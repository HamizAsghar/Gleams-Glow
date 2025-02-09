import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const body = await request.json();
        const { orderDetails, customerDetails } = body;

        const date = new Date().toLocaleString("en-US", {
            dateStyle: "full",
            timeStyle: "long",
        });

        // Define email credentials directly in the file (Not Recommended)
        const EMAIL_USER = "hamizasghar@gmail.com";
        const EMAIL_PASS = "hfra fdvu qpgp veom"; // Sensitive Data (Risky)
        const ADMIN_EMAIL = "hamizasghar@gmail.com"; // Replace with admin email

        // Create email transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS,
            },
        });

        // Create email content with formatted order details
        const mailOptions = {
            from: EMAIL_USER,
            to: ADMIN_EMAIL,
            subject: `New Order Received - ${date}`,
            html: `
                <h1>New Order Details</h1>
                <p><strong>Order Date:</strong> ${date}</p>
                
                <h2>Customer Information:</h2>
                <p><strong>Name:</strong> ${customerDetails.name}</p>
                <p><strong>Email:</strong> ${customerDetails.email}</p>
                <p><strong>Phone:</strong> ${customerDetails.phone}</p>
                <p><strong>Address:</strong> ${customerDetails.address}</p>
                <p><strong>Postal Code:</strong> ${customerDetails.postalCode}</p>
                
                <h2>Order Items:</h2>
                <table style="width:100%; border-collapse: collapse;">
                  <thead>
                    <tr style="background-color: #f3f4f6;">
                      <th style="padding: 8px; border: 1px solid #e5e7eb;">Product</th>
                      <th style="padding: 8px; border: 1px solid #e5e7eb;">Size</th>
                      <th style="padding: 8px; border: 1px solid #e5e7eb;">Quantity</th>
                      <th style="padding: 8px; border: 1px solid #e5e7eb;">Price</th>
                      <th style="padding: 8px; border: 1px solid #e5e7eb;">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${orderDetails.items
                    .map(
                        (item) => `
                      <tr>
                        <td style="padding: 8px; border: 1px solid #e5e7eb;">${item.name}</td>
                        <td style="padding: 8px; border: 1px solid #e5e7eb;">${item.size}</td>
                        <td style="padding: 8px; border: 1px solid #e5e7eb;">${item.quantity}</td>
                        <td style="padding: 8px; border: 1px solid #e5e7eb;">Rs.${item.price}</td>
                        <td style="padding: 8px; border: 1px solid #e5e7eb;">Rs.${item.price * item.quantity}</td>
                      </tr>
                    `,
                    )
                    .join("")}
                  </tbody>
                  <tfoot>
                    <tr style="background-color: #f3f4f6;">
                      <td colspan="4" style="padding: 8px; border: 1px solid #e5e7eb; text-align: right;"><strong>Total Amount:</strong></td>
                      <td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Rs.${orderDetails.total}</strong></td>
                    </tr>
                  </tfoot>
                </table>
              `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Order email error:", error);
        return NextResponse.json({ error: "Failed to process order" }, { status: 500 });
    }
}
