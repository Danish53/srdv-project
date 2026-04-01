import { NextResponse } from "next/server";
import { isSmtpConfigured, sendContactFormEmails } from "@/lib/contact-mail";

const MAX = { name: 200, phone: 40, email: 254, message: 5000 };

function badRequest(message: string) {
  return NextResponse.json({ ok: false, error: message }, { status: 400 });
}

export async function POST(request: Request) {
  if (!isSmtpConfigured()) {
    return NextResponse.json(
      { ok: false, error: "Email service is not configured on the server." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return badRequest("Invalid JSON body");
  }

  if (!body || typeof body !== "object") {
    return badRequest("Invalid payload");
  }

  const { name, phone, email, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || !name.trim()) {
    return badRequest("Name is required");
  }
  if (typeof phone !== "string" || !phone.trim()) {
    return badRequest("Phone is required");
  }
  if (typeof email !== "string" || !email.trim()) {
    return badRequest("Email is required");
  }
  if (typeof message !== "string" || !message.trim()) {
    return badRequest("Message is required");
  }

  const trimmed = {
    name: name.trim().slice(0, MAX.name),
    phone: phone.trim().slice(0, MAX.phone),
    email: email.trim().slice(0, MAX.email),
    message: message.trim().slice(0, MAX.message),
  };

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email);
  if (!emailOk) {
    return badRequest("Please enter a valid email address");
  }

  try {
    await sendContactFormEmails(trimmed);
  } catch (err) {
    console.error("[contact] SMTP error:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send email. Please try again later." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
