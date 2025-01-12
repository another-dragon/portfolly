"use server";

import { createClient } from "@supabase/supabase-js";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  antiBot: string;
  hiddenField: string;
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
