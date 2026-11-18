import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import Icon, { iconForTag } from "@/components/ui/Icon";
import { DATA } from "@/data/data";
import type { Locale } from "@/types";

export const generateStaticParams = () =>
  DATA.projects.flatMap((p) => routing.locales.map((locale) => ({ locale, slug: p.slug })));

export default async function ProjectPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const p = DATA.projects.find((x) => x.slug === slug);
  if (!p) notFound();
  const l = locale as Locale, t = await getTranslations();
  return (
    <main className="w" style={{ padding: "80px 20px" }}>
      <Link href="/#projects" className="btn">{t("back_projects")}</Link>
      <h2 style={{ marginTop: 32 }}>{p.name[l]}</h2>
      <p className="sub">{p.desc[l]}</p>
      {p.status && <span className="tag learning"><Icon name="clock" size={13} />{p.status[l]}</span>}
      {p.tech?.map((x) => <span key={x} className="tag"><Icon name={iconForTag(x)} size={13} />{x}</span>)}
      <p style={{ marginTop: 24, display: "flex", gap: 14 }}>
        {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--o)" }}>{t("view_gh")}</a>}
        {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" style={{ color: "var(--o)" }}>{t("view_demo")}</a>}
      </p>
    </main>
  );
}
