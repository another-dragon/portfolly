"use server";

import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  antiBot: string;
  hiddenField: string;
}

async function sendEmailNotification(data: ContactFormData) {
  // Debug logging
  console.log('Email config check:', {
    hasUser: !!process.env.SMTP_USER,
    hasPass: !!process.env.SMTP_PASSWORD,
    userLength: process.env.SMTP_USER?.length,
    passLength: process.env.SMTP_PASSWORD?.length
  });

  if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    throw new Error("Missing email configuration");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.NOTIFICATION_EMAIL,
    subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
    text: `
New contact form submission:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}

Message:
${data.message}
    `,
    html: `
<h2>New contact form submission</h2>
<p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
<p><strong>Email:</strong> ${data.email}</p>
<h3>Message:</h3>
<p>${data.message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}

export async function submitContactForm(data: ContactFormData) {
  try {
    // Basic validation
    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.message ||
      !data.antiBot
    ) {
      throw new Error("All fields are required");
    }

    if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      throw new Error("Invalid email format");
    }

    // Bot protection checks
    if (data.hiddenField) {
      throw new Error("Bot submission detected");
    }

    // Initialize Supabase client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error("Missing Supabase configuration");
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    });

    // Attempt to insert the data
    const { error: supabaseError } = await supabase
      .from("contact_submissions")
      .insert([
        {
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          message: data.message,
        },
      ]);

    if (supabaseError) {
      console.error("Supabase error:", supabaseError);
      throw new Error(`Database error: ${supabaseError.message}`);
    }

    // Send email notification
    await sendEmailNotification(data);

    return { success: true, message: "Form submitted successfully!" };
  } catch (error) {
    console.error("Error in submitContactForm:", error);
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again.",
    };
  }
}
