import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req, res) => {
  const { email, subject, message } = await req.json();

  // Configure nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail", // Or any other email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    // to: 'chiragvadhavanaai@gmail.com', // Where the message should be sent
    to: email, // Where the message should be sent
    subject: subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new NextResponse(
      JSON.stringify({
        message: "Thanks for sending mail. I'll contact as soon possible.",
        status: 200,
      })
    );
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
