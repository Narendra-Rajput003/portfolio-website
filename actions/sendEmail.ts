"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

const isValidEmail = (email: string) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

export const sendEmail = async (formData: FormData): Promise<{ data?: any; error?: string }> => {
  const senderEmail = formData.get("senderEmail") as string | null;
  const message = formData.get("message") as string | null;

  if (!senderEmail || !message) {
    return { error: "Both email and message are required" };
  }

  if (!isValidEmail(senderEmail)) {
    return { error: "Invalid email format" };
  }

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // No changes needed
      to: "narendrarajput05007@gmail.com", 
      subject: "Message from contact form",
      replyTo: senderEmail, 
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
    
  } catch (error: unknown) {
    console.error("Email sending failed:", error);
    return { error: getErrorMessage(error) };
  }

  return {
   
  };
};
