import { setRequestLocale } from "next-intl/server";
import { CONFIG } from "@/config";
import { SITE } from "@/lib/site";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Trading from "@/components/sections/Trading";
import Contact from "@/components/sections/Contact";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Person", name: "Arash Jannatabadi", url: SITE, sameAs: [CONFIG.linkedin, CONFIG.github, CONFIG.telegram].filter(Boolean) },
      { "@type": "WebSite", name: "Arash Jannatabadi", url: SITE, inLanguage: locale },
    ],
  };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }} />
      <Hero /><About /><Skills /><Experience /><Projects />
      {CONFIG.showTrading && <Trading />}
      <Contact />
    </main>
  );
}
