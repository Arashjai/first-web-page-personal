import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { DATA } from "@/data/data";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...DATA.projects.map((p) => `/projects/${p.slug}`)];
  return paths.flatMap((p) =>
    routing.locales.map((l) => ({
      url: `${SITE}/${l}${p}`,
      alternates: { languages: Object.fromEntries(routing.locales.map((x) => [x, `${SITE}/${x}${p}`])) },
    })),
  );
}
