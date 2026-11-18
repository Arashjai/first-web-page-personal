import { NextResponse } from "next/server";
import { makeSchema } from "@/lib/contact-schema";

const hits = new Map<string, number[]>(); // simple per-instance rate limit: 3 messages / 10 min / IP
const schema = makeSchema({ name: "invalid", email: "invalid", subject: "invalid", message: "invalid" });
const res = (ok: boolean, status: number) => NextResponse.json({ ok }, { status });

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anon";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 600_000);
  if (recent.length >= 3) return res(false, 429);
  hits.set(ip, [...recent, now]);

  let body: unknown;
  try { body = await req.json(); } catch { return res(false, 400); }
  const parsed = schema.safeParse(body);
  if (!parsed.success) return res(false, 400);
  const { name, email, subject, message, website } = parsed.data;
  if (website) return res(true, 200); // bot caught by honeypot

  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) return res(false, 503); // not configured → never fake a success
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
      to: [to], reply_to: email, subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
  });
  return r.ok ? res(true, 200) : res(false, 502);
}
