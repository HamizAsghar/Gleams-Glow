// "use client"

// import { useState } from "react"
// import Image from "next/image"

// const productImages = [
//     "/images/hero/P_1.JPG?height=600&width=600",
//     "/images/hero/2nd.jpg?height=600&width=600",
//     "/images/hero/3rd.jpg?height=600&width=600",
//     "/images/hero/P_2.JPG?height=600&width=600",
//     "/images/hero/P_3.JPG?height=600&width=600",
// ]

// const features = ["Brightens Skin Tone", "Remove Dark Spots", "Reduces Pigmentation", "Fades Acne Scars", "Anti aging"]

// export default function ProductPage() {
//     const [currentImage, setCurrentImage] = useState(0)
//     const [selectedSize, setSelectedSize] = useState("30ml")
//     const [quantity, setQuantity] = useState(1)
//     const [showCheckout, setShowCheckout] = useState(false)

//     const basePrice = 2200
//     const discountedPrice = 1999
//     const totalPrice = discountedPrice * quantity

//     const nextImage = () => {
//         setCurrentImage((prev) => (prev + 1) % productImages.length)
//     }

//     const previousImage = () => {
//         setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length)
//     }

//     return (
//         <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 <div className="grid md:grid-cols-2 gap-8">
//                     {/* Image Gallery */}
//                     <div className="relative">
//                         <div className="aspect-square relative overflow-hidden rounded-lg">
//                             <Image
//                                 src={productImages[currentImage] || "/placeholder.svg"}
//                                 alt={`Product image ${currentImage + 1}`}
//                                 fill
//                                 className="object-cover"
//                             />
//                             <button
//                                 onClick={previousImage}
//                                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
//                             >
//                                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                                 </svg>
//                             </button>
//                             <button
//                                 onClick={nextImage}
//                                 className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
//                             >
//                                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                 </svg>
//                             </button>
//                         </div>
//                         <div className="mt-4 grid grid-cols-3 gap-4">
//                             {productImages.map((src, idx) => (
//                                 <button
//                                     key={idx}
//                                     onClick={() => setCurrentImage(idx)}
//                                     className={`aspect-square relative rounded-lg overflow-hidden ${currentImage === idx ? "ring-2 ring-blue-500" : ""
//                                         }`}
//                                 >
//                                     <Image src={src || "/placeholder.svg"} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
//                                 </button>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Product Details */}
//                     <div className="space-y-6">
//                         <div>
//                             <h1 className="text-3xl font-bold">Gleam and Glows whitening serum</h1>
//                             <div className="mt-4 flex items-baseline gap-4">
//                                 <span className="text-3xl font-bold text-blue-600">Rs.{discountedPrice}</span>
//                                 <span className="text-xl text-gray-500 line-through">Rs.{basePrice}</span>
//                             </div>
//                         </div>

//                         <div className="space-y-4">
//                             <h3 className="text-lg font-semibold">Product Features:</h3>
//                             <ul className="space-y-2">
//                                 {features.map((feature, idx) => (
//                                     <li key={idx} className="flex items-center gap-2">
//                                         <span className="text-blue-600">•</span>
//                                         {feature}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         {!showCheckout ? (
//                             <div className="space-y-6">
//                                 <div className="space-y-2">
//                                     <label className="text-sm font-medium">Size</label>
//                                     <select
//                                         value={selectedSize}
//                                         onChange={(e) => setSelectedSize(e.target.value)}
//                                         className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                     >
//                                         <option value="30ml">30ml</option>
//                                     </select>
//                                 </div>

//                                 <div className="space-y-2">
//                                     <label className="text-sm font-medium">Quantity</label>
//                                     <div className="flex items-center gap-4">
//                                         <button
//                                             onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                                             className="rounded-md border border-gray-300 p-2 hover:bg-gray-100"
//                                         >
//                                             <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
//                                             </svg>
//                                         </button>
//                                         <span className="text-lg font-medium w-12 text-center">{quantity}</span>
//                                         <button
//                                             onClick={() => setQuantity(quantity + 1)}
//                                             className="rounded-md border border-gray-300 p-2 hover:bg-gray-100"
//                                         >
//                                             <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                                             </svg>
//                                         </button>
//                                     </div>
//                                 </div>

//                                 <button
//                                     onClick={() => setShowCheckout(true)}
//                                     className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
//                                 >
//                                     <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                                         />
//                                     </svg>
//                                     Add to Cart - Rs.{totalPrice}
//                                 </button>
//                             </div>
//                         ) : (
//                             <div className="bg-white p-6 rounded-lg border border-gray-200">
//                                 <form
//                                     onSubmit={(e) => {
//                                         e.preventDefault()
//                                         // Handle order submission here
//                                         alert("Order placed successfully!")
//                                     }}
//                                     className="space-y-4"
//                                 >
//                                     <h3 className="text-lg font-semibold">Checkout Details</h3>

//                                     <div className="space-y-2">
//                                         <label className="text-sm font-medium">Full Name</label>
//                                         <input
//                                             type="text"
//                                             required
//                                             className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                         />
//                                     </div>

//                                     <div className="space-y-2">
//                                         <label className="text-sm font-medium">Email</label>
//                                         <input
//                                             type="email"
//                                             required
//                                             className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                         />
//                                     </div>

//                                     <div className="space-y-2">
//                                         <label className="text-sm font-medium">Phone</label>
//                                         <input
//                                             type="tel"
//                                             required
//                                             className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                         />
//                                     </div>

//                                     <div className="space-y-2">
//                                         <label className="text-sm font-medium">Shipping Address</label>
//                                         <textarea
//                                             required
//                                             className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                             rows={3}
//                                         />
//                                     </div>

//                                     <div className="flex gap-4">
//                                         <button
//                                             type="button"
//                                             onClick={() => setShowCheckout(false)}
//                                             className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
//                                         >
//                                             Back
//                                         </button>
//                                         <button
//                                             type="submit"
//                                             className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
//                                         >
//                                             Place Order - Rs.{totalPrice}
//                                         </button>
//                                     </div>
//                                 </form>
//                             </div>
//                         )}

//                         <div className="prose prose-sm">
//                             <h3 className="text-lg font-semibold">Product Description:</h3>
//                             <p className="text-gray-600">
//                                 Gleam and Glows face serum is a powerful blend of natural oils and active ingredients, designed to
//                                 Hydrate, Brightens and Evens tone, Reduce Dark spots and pimple marks and rejuvenate your skin.
//                             </p>
//                             <p className="text-gray-600">
//                                 The formula is enriched with argan oil and jojoba oil for deep hydration, while rosehip oil and vitamin
//                                 C work to promote collagen production and brighten your complexion. Tea tree oil and lavender oil
//                                 provide soothing and antibacterial benefits, making it ideal for calming acne-prone or irritated skin.
//                             </p>
//                             <p className="text-gray-600">
//                                 Vitamin E and green tea extract deliver antioxidants that protect against environmental damage and
//                                 premature aging, while hyaluronic acid and glycerin provide moisture retention for a plump, smooth
//                                 appearance.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }




"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

const productImages = [
    "/images/hero/P_1.JPG",
    "/images/hero/2nd.jpg",
    "/images/hero/3rd.jpg",
    "/images/hero/P_2.JPG",
    "/images/hero/P_3.JPG",
]

const features = ["Brightens Skin Tone", "Remove Dark Spots", "Reduces Pigmentation", "Fades Acne Scars", "Anti aging"]

export default function ProductPage() {
    const router = useRouter()
    const [currentImage, setCurrentImage] = useState(0)
    const [selectedSize, setSelectedSize] = useState("30ml")
    const [quantity, setQuantity] = useState(1)

    const basePrice = 2200
    const discountedPrice = 1999
    const totalPrice = discountedPrice * quantity

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % productImages.length)
    }

    const previousImage = () => {
        setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length)
    }

    const addToCart = () => {
        const item = {
            id: 1,
            name: "Gleam and Glows whitening serum",
            price: discountedPrice,
            quantity: quantity,
            size: selectedSize,
            image: productImages[0],
        }

        // Get existing cart
        const existingCart = JSON.parse(localStorage.getItem("cart") || "[]")

        // Add new item
        existingCart.push(item)

        // Save back to localStorage
        localStorage.setItem("cart", JSON.stringify(existingCart))

        // Navigate to cart page
        router.push("/cart")
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Image Gallery */}
                    <div className="relative">
                        <div className="aspect-square relative overflow-hidden rounded-lg">
                            <Image
                                src={productImages[currentImage] || "/placeholder.svg"}
                                alt={`Product image ${currentImage + 1}`}
                                fill
                                className="object-cover"
                            />
                            <button
                                onClick={previousImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-4 grid grid-cols-5 gap-4">
                            {productImages.map((src, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImage(idx)}
                                    className={`aspect-square relative rounded-lg overflow-hidden ${currentImage === idx ? "ring-2 ring-blue-500" : ""
                                        }`}
                                >
                                    <Image src={src || "/placeholder.svg"} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold">Gleam and Glows whitening serum</h1>
                            <div className="mt-4 flex items-baseline gap-4">
                                <span className="text-3xl font-bold text-blue-600">Rs.{discountedPrice}</span>
                                <span className="text-xl text-gray-500 line-through">Rs.{basePrice}</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Product Features:</h3>
                            <ul className="space-y-2">
                                {features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <span className="text-blue-600">•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Size</label>
                                <select
                                    value={selectedSize}
                                    onChange={(e) => setSelectedSize(e.target.value)}
                                    className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="30ml">30ml + 15ml FREE</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Quantity</label>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="rounded-md border border-gray-300 p-2 hover:bg-gray-100"
                                    >
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                        </svg>
                                    </button>
                                    <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="rounded-md border border-gray-300 p-2 hover:bg-gray-100"
                                    >
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={addToCart}
                                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                Add to Cart - Rs.{totalPrice}
                            </button>
                        </div>

                        <div className="prose prose-sm">
                            <h3 className="text-lg font-semibold">Product Description:</h3>
                            <p className="text-gray-600">
                                Gleam and Glows face serum is a powerful blend of natural oils and active ingredients, designed to
                                Hydrate, Brightens and Evens tone, Reduce Dark spots and pimple marks and rejuvenate your skin.
                            </p>
                            <p className="text-gray-600">
                                The formula is enriched with argan oil and jojoba oil for deep hydration, while rosehip oil and vitamin
                                C work to promote collagen production and brighten your complexion. Tea tree oil and lavender oil
                                provide soothing and antibacterial benefits, making it ideal for calming acne-prone or irritated skin.
                            </p>
                            <p className="text-gray-600">
                                Vitamin E and green tea extract deliver antioxidants that protect against environmental damage and
                                premature aging, while hyaluronic acid and glycerin provide moisture retention for a plump, smooth
                                appearance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

