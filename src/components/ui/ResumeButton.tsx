"use client";
import { useLocale, useTranslations } from "next-intl";
import { CONFIG } from "@/config";
import type { Locale } from "@/types";

export default function ResumeButton({ className = "btn p", style }: { className?: string; style?: React.CSSProperties }) {
  const t = useTranslations();
  const file = CONFIG.resume[useLocale() as Locale];
  if (file) return <a className={className} style={style} href={file} download>{t("resume")}</a>;
  return <button type="button" className={className} style={style} onClick={() => alert(t("nores"))}>{t("resume")}</button>;
}
