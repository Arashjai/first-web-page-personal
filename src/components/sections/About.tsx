import { getLocale, getTranslations } from "next-intl/server";
import type { CSSProperties } from "react";
import Section from "@/components/ui/Section";
import Icon, { iconForTag } from "@/components/ui/Icon";
import { DATA } from "@/data/data";
import type { Locale } from "@/types";

export default async function About() {
  const t = await getTranslations();
  const l = (await getLocale()) as Locale;
  return (
    <Section id="about" title={t("about_t")} sub={t("about_s")}>
      <div className="two">
        <div className="card">
          <h3>{t("bio_t")}</h3>
          <p className="bio-copy">{t("bio")}</p>
        </div>
        {[
          { title: t("goals_t"), items: DATA.goals[l] },
          { title: t("expertise_t"), items: DATA.expertise[l] },
        ].map(({ title, items }, n) => (
          <div className="card" key={title}>
            <h3>{title}</h3>
            <div style={{ marginTop: 10 }}>{items.map((item, index) => (
              <span key={item} className="tag" style={{ "--i": n + index } as CSSProperties}>
                <Icon name={iconForTag(item)} size={13} />{item}
              </span>
            ))}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
