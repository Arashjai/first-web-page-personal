"use client";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { makeSchema, type ContactInput } from "@/lib/contact-schema";

export default function ContactForm() {
  const t = useTranslations();
  const schema = useMemo(
    () => makeSchema({ name: t("v_name"), email: t("v_email"), subject: t("v_subject"), message: t("v_message") }),
    [t],
  );
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactInput>({ resolver: zodResolver(schema) });
  const [status, setStatus] = useState<"idle" | "ok" | "bad">("idle");

  async function onSubmit(data: ContactInput) {
    setStatus("idle");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!r.ok) throw new Error();
      setStatus("ok");
      reset();
    } catch {
      setStatus("bad");
    }
  }

  const field = (id: "name" | "email" | "subject", label: string, type = "text") => (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} aria-invalid={!!errors[id]} {...register(id)} />
      <div className="er" role="alert">{errors[id]?.message}</div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {field("name", t("f_name"))}
      {field("email", t("f_email"), "email")}
      {field("subject", t("f_subj"))}
      <div>
        <label htmlFor="message">{t("f_msg")}</label>
        <textarea id="message" rows={5} aria-invalid={!!errors.message} {...register("message")} />
        <div className="er" role="alert">{errors.message?.message}</div>
      </div>
      <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" {...register("website")} />
      <button className="btn p" type="submit" disabled={isSubmitting} style={{ justifySelf: "start" }}>
        {isSubmitting ? t("sending") : t("send")}
      </button>
      <div id="st" role="status" aria-live="polite" className={status === "ok" ? "ok" : status === "bad" ? "bad" : ""}>
        {status === "ok" ? t("ok") : status === "bad" ? t("fail") : ""}
      </div>
    </form>
  );
}
