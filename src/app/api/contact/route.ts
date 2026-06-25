import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, whatsapp, inquiryType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Basic Email Validation Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Basic XSS Sanitization (HTML Escaping for message bodies)
    const sanitize = (str: string) => str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const sanitizedName = sanitize(name);
    const sanitizedMessage = sanitize(message);

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json({ error: "Email configuration is missing on the server" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "mirza.fasih99@gmail.com",
      replyTo: email,
      subject: `New Portfolio Inquiry: ${inquiryType} from ${sanitizedName}`,
      text: `Name: ${sanitizedName}\nEmail: ${email}\nWhatsApp: ${whatsapp || 'Not provided'}\nInquiry Type: ${inquiryType}\n\nMessage:\n${sanitizedMessage}`,
      html: `
        <h3>New Inquiry from Portfolio</h3>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp || '<i>Not provided</i>'}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, "<br/>")}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
