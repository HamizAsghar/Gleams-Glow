"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"

export default function CartPage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
    })

    const [cartItems, setCartItems] = useState(() => {
        if (typeof window !== "undefined") {
            return JSON.parse(localStorage.getItem("cart") || "[]")
        }
        return []
    })

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formData.name || !formData.phone || !formData.city || !formData.address) {
            Swal.fire({
                icon: "error",
                title: "Required Fields Missing",
                text: "Please fill in all required fields before placing your order.",
                confirmButtonColor: "#DC2626",
            })
            return
        }

        Swal.fire({
            title: "Processing Order",
            html: "Please wait...",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading()
            },
        })

        try {
            const response = await fetch("/api/send-order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    orderDetails: {
                        items: cartItems,
                        total,
                    },
                    customerDetails: formData,
                }),
            })

            if (response.ok) {
                localStorage.removeItem("cart")

                await Swal.fire({
                    icon: "success",
                    title: "Order Placed Successfully!",
                    text: "Thank you for your order. We will process it soon!",
                    confirmButtonColor: "#3B82F6",
                })

                router.push("/thank-you")
            } else {
                throw new Error("Failed to place order")
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong! Please try again.",
                confirmButtonColor: "#3B82F6",
            })
        }
    }

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                    <button
                        onClick={() => router.push("/FutureProducts/1")}
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

                <div className="bg-white rounded-lg shadow mb-8">
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex items-center p-4 border-b">
                            <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-20 h-20 object-cover rounded" />
                            <div className="ml-4 flex-1">
                                <h3 className="font-semibold">{item.name}</h3>
                                <p className="text-gray-600">Quantity: {item.quantity}</p>
                                <p className="text-gray-600">Size: {item.size}</p>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold">Rs.{item.price * item.quantity}</p>
                                <button
                                    onClick={() => {
                                        const newItems = cartItems.filter((_, i) => i !== index)
                                        setCartItems(newItems)
                                        localStorage.setItem("cart", JSON.stringify(newItems))
                                    }}
                                    className="text-red-600 text-sm hover:text-red-700"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="p-4 border-t">
                        <div className="flex justify-between text-lg font-semibold">
                            <span>Total:</span>
                            <span>Rs.{total}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full rounded-md border p-2"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full rounded-md border p-2"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Phone <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full rounded-md border p-2"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    City <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full rounded-md border p-2"
                                    value={formData.city}
                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Address <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                required
                                rows={3}
                                className="w-full rounded-md border p-2"
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Place Order - Rs.{total}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
