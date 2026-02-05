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
      from: `"Chirag Vadhavana | Portfolio" <chiragvadhavana1@gmail.com>`,
      to: "chiragvadhavana1@gmail.com",
      replyTo: email,
      subject: `🚀 New Portfolio Inquiry — ${subject}`,

      text: `
New Portfolio Contact Message

From: ${email}
Subject: ${subject}

Message:
${message}
  `,

      html: `
  <div style="background:#0f172a; padding:40px 0; font-family: 'Segoe UI', Roboto, Arial, sans-serif;">
    <div style="max-width:640px; margin:auto; background:#ffffff; border-radius:14px; overflow:hidden; box-shadow:0 20px 40px rgba(0,0,0,0.25);">
      
      <!-- HEADER -->
      <div style="background:linear-gradient(135deg,#6366f1,#22d3ee); padding:24px 32px;">
        <h1 style="margin:0; color:#ffffff; font-size:22px; letter-spacing:0.3px;">
          📩 New Portfolio Contact
        </h1>
        <p style="margin:6px 0 0; color:#e0e7ff; font-size:14px;">
          Someone just reached out via your website
        </p>
      </div>

      <!-- BODY -->
      <div style="padding:32px;">
        
        <div style="margin-bottom:20px;">
          <p style="margin:0; font-size:13px; color:#6b7280;">FROM</p>
          <p style="margin:4px 0 0; font-size:16px; font-weight:600; color:#111827;">
            ${email}
          </p>
        </div>

        <div style="margin-bottom:20px;">
          <p style="margin:0; font-size:13px; color:#6b7280;">SUBJECT</p>
          <p style="margin:4px 0 0; font-size:16px; font-weight:600; color:#111827;">
            ${subject}
          </p>
        </div>

        <div>
          <p style="margin:0 0 8px; font-size:13px; color:#6b7280;">MESSAGE</p>
          <div style="background:#f8fafc; border-left:4px solid #6366f1; padding:16px; border-radius:8px; color:#1f2937; font-size:15px; line-height:1.7;">
            ${message.replace(/\n/g, "<br />")}
          </div>
        </div>

        <!-- CTA -->
        <div style="margin-top:28px; text-align:center;">
          <a href="mailto:${email}"
             style="display:inline-block; padding:12px 22px; background:#6366f1; color:#ffffff; text-decoration:none; font-weight:600; border-radius:999px; font-size:14px;">
            Reply to Sender →
          </a>
        </div>
      </div>

      <!-- FOOTER -->
      <div style="background:#f1f5f9; padding:16px; text-align:center;">
        <p style="margin:0; font-size:12px; color:#64748b;">
          Sent from <strong>chiragvadhavana.dev</strong> · Portfolio Contact Form
        </p>
      </div>
    </div>
  </div>
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
