"use client";
import { useState, type CSSProperties } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Icon, { iconForTag } from "@/components/ui/Icon";

interface Item { slug: string; cat: string; name: string; desc: string; status?: string; tech: string[]; github?: string; demo?: string }

export default function ProjectsGrid({ items, cats }: { items: Item[]; cats: { id: string; label: string }[] }) {
  const t = useTranslations();
  const [cat, setCat] = useState("all");
  const shown = items.filter((p) => cat === "all" || p.cat === cat);
  return (
    <>
      <div className="fl" role="group">
        {cats.map((c) => (
          <button key={c.id} className={c.id === cat ? "on" : ""} aria-pressed={c.id === cat} onClick={() => setCat(c.id)}>{c.label}</button>
        ))}
      </div>
      <div className="grid">
        {shown.length === 0 && (
          <div className="empty" style={{ gridColumn: "1/-1" }}><h3>{t("pe_t")}</h3><p>{t("pe_b")}</p></div>
        )}
        {shown.map((p, n) => (
          <article className="card" key={p.slug} style={{ "--i": n } as CSSProperties}>
            <h3><Link href={`/projects/${p.slug}`}>{p.name}</Link></h3>
            <p>{p.desc}</p>
            {p.status && <span className="tag learning" style={{ "--i": n } as CSSProperties}><Icon name="clock" size={13} />{p.status}</span>}
            {p.tech.map((x) => <span key={x} className="tag" style={{ "--i": n } as CSSProperties}><Icon name={iconForTag(x)} size={13} />{x}</span>)}
            <p style={{ marginTop: 14, display: "flex", gap: 14 }}>
              {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--o)" }}>{t("view_gh")}</a>}
              {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" style={{ color: "var(--o)" }}>{t("view_demo")}</a>}
            </p>
          </article>
        ))}
      </div>
    </>
  );
}
