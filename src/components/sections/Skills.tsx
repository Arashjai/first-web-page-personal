import { getLocale, getTranslations } from "next-intl/server";
import type { CSSProperties } from "react";
import Section from "@/components/ui/Section";
import Icon, { iconForTag } from "@/components/ui/Icon";
import { DATA } from "@/data/data";
import type { Locale } from "@/types";

export default async function Skills() {
  const t = await getTranslations();
  const l = (await getLocale()) as Locale;
  return (
    <Section id="skills" title={t("skills_t")} sub={t("skills_s")}>
      <div className="grid">
        {DATA.skills.map((c, n) => (
          <div className="card" key={c.t.en} style={{ "--i": n } as CSSProperties}>
            <h3>{c.t[l]}</h3>
            {c.description && <p className="skill-description">{c.description[l]}</p>}
            {c.items.length
              ? c.items.map((i, m) => <span key={i.n.en} className={`tag${i.s ? ` ${i.s}` : ""}`} style={{ "--i": n + m + 1 } as CSSProperties}><Icon name={iconForTag(i.n[l])} size={13} />{i.n[l]}{i.s ? ` · ${t(`st_${i.s}`)}` : ""}</span>)
              : <p className="mu">{t("sk_empty")}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
}
