import { getLocale, getTranslations } from "next-intl/server";
import Section from "@/components/ui/Section";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import { DATA } from "@/data/data";
import type { Locale } from "@/types";

export default async function Projects() {
  const t = await getTranslations();
  const l = (await getLocale()) as Locale;
  const items = DATA.projects.map((p) => ({
    slug: p.slug, cat: p.cat, name: p.name[l], desc: p.desc[l], status: p.status?.[l],
    tech: p.tech ?? [], github: p.github, demo: p.demo,
  }));
  const cats = [{ id: "all", label: t("all") }, ...DATA.categories.map((c) => ({ id: c.id, label: c[l] }))];
  return (
    <Section id="projects" title={t("proj_t")} sub={t("proj_s")}>
      <ProjectsGrid items={items} cats={cats} />
    </Section>
  );
}
