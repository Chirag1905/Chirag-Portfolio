import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for TLS
      auth: {
        user: "chiragvadhavana1@gmail.com", // your Gmail
        pass: "pjgb zxfj dpoh afkb", // your App password
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender must be your Gmail
      replyTo: email, // So you can reply to the user's mail
      to: process.env.EMAIL_USER, // Where you receive messages
      subject: `Portfolio Contact: ${subject}`,
      text: `
Email: ${email}
Message:
${message}
      `,
    });

    return NextResponse.json(
      {
        message:
          "Thanks for reaching out! I'll get back to you as soon as possible.",
        status: 200,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Mail Error:", error);
    let errorMessage = "Failed to send message";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
