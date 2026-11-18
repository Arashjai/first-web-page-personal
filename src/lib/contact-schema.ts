import { z } from "zod";
export type ContactMessages = { name: string; email: string; subject: string; message: string };
export const makeSchema = (m: ContactMessages) =>
  z.object({
    name: z.string().trim().min(2, m.name).max(100, m.name),
    email: z.string().trim().email(m.email).max(200, m.email),
    subject: z.string().trim().min(3, m.subject).max(150, m.subject),
    message: z.string().trim().min(10, m.message).max(5000, m.message),
    website: z.string().max(0).optional(), // honeypot
  });
export type ContactInput = z.infer<ReturnType<typeof makeSchema>>;
