import { getLocale, getTranslations } from "next-intl/server";
import type { CSSProperties } from "react";
import Section from "@/components/ui/Section";
import Icon, { iconForTag } from "@/components/ui/Icon";
import { DATA } from "@/data/data";
import type { Locale } from "@/types";

export default async function Experience() {
  const t = await getTranslations();
  const l = (await getLocale()) as Locale;
  return (
    <Section id="experience" title={t("exp_t")} sub={t("exp_s")}>
      <div className="grid">
        {DATA.experience.map((e, n) => (
          <div className="card" key={e.role.en} style={{ "--i": n } as CSSProperties}>
            <h3>{e.role[l]}{e.org[l] ? ` — ${e.org[l]}` : ""}</h3>
            <div className="when">{e.start && e.end ? `${e.start} – ${e.end}` : e.dur[l]}</div>
            <p className="mu">{e.desc[l]}</p>
            {e.resp[l].length > 0 && <ul>{e.resp[l].map((r) => <li key={r}>{r}</li>)}</ul>}
            {e.skills.map((s, m) => <span key={s} className="tag" style={{ "--i": n + m + 1 } as CSSProperties}><Icon name={iconForTag(s)} size={13} />{s}</span>)}
          </div>
        ))}
      </div>
      <h2 style={{ marginTop: 64 }}>{t("edu_t")}</h2>
      <p className="sub">{t("edu_s")}</p>
      {DATA.education.map((e, n) => (
        <div className="card" key={e.field.en} style={{ "--i": n } as CSSProperties}>
          <h3>{e.field[l]}</h3>
          <p className="mu">{e.institution[l]}</p>
        </div>
      ))}
    </Section>
  );
}
