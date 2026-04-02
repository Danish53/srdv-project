import nodemailer from "nodemailer";
import { BRAND } from "@/lib/brand";
import { THEME } from "@/lib/theme";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export function isSmtpConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.CONTACT_TO_EMAIL
  );
}

export async function sendContactFormEmails(payload: ContactPayload): Promise<void> {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || `"Contact Form" <${user}>`;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!host || !user || !pass || !to) {
    throw new Error("SMTP is not configured");
  }

  const secure =
    process.env.SMTP_SECURE === "true" || port === 465 || String(port) === "465";

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const { name, phone, email, message } = payload;
  const safe = {
    name: escapeHtml(name),
    phone: escapeHtml(phone),
    email: escapeHtml(email),
    message: escapeHtml(message).replace(/\n/g, "<br/>"),
  };

  const textBody = [
    `New message from ${BRAND.siteTitle} (contact form)`,
    ``,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const htmlBody = `
    <h2 style="font-family:sans-serif;">New contact form submission — ${BRAND.siteTitle}</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
      <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Name</td><td>${safe.name}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Phone</td><td>${safe.phone}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Email</td><td><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
    </table>
    <p style="font-family:sans-serif;font-size:14px;margin-top:16px;"><strong>Message</strong></p>
    <p style="font-family:sans-serif;font-size:14px;line-height:1.5;border-left:3px solid ${THEME.primary};padding-left:12px;">${safe.message}</p>
  `;

  await transporter.sendMail({
    from,
    to,
    replyTo: email,
    subject: `[${BRAND.siteTitle}] Contact: ${name}`.slice(0, 200),
    text: textBody,
    html: htmlBody,
  });

  if (process.env.CONTACT_SEND_USER_ACK === "true") {
    await transporter.sendMail({
      from,
      to: email,
      subject: `${BRAND.siteTitle} — We received your message`,
      text: `Hi ${name},\n\nThank you for contacting us. We have received your message and will get back to you soon.\n\n— ${BRAND.fullName}`,
      html: `<p>Hi ${safe.name},</p><p>Thank you for contacting us. We have received your message and will get back to you soon.</p><p>— ${BRAND.fullName}</p>`,
    });
  }
}
