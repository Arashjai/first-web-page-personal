import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { CONFIG } from "@/config";
import ResumeButton from "@/components/ui/ResumeButton";

export default async function Hero() {
  const t = await getTranslations();
  const socials = [["Telegram", CONFIG.telegram], ["LinkedIn", CONFIG.linkedin], ["GitHub", CONFIG.github]].filter(([, u]) => u);
  return (
    <section className="hero" id="home">
      <div className="w hg">
        <div>
          <h1>{t("name_l1")}<br />{t("name_l2")}</h1>
          <p className="hl">{t("headline")}</p>
          <p className="hd">{t("intro")}</p>
          <div className="cta">
            <a className="btn p" href="#projects">{t("cta1")}</a>
            <ResumeButton className="btn" />
            <a className="btn" href="#contact">{t("cta3")}</a>
          </div>
          <div className="soc">
            {socials.map(([n, u]) => <a key={n} href={u} target="_blank" rel="noopener noreferrer">{n}</a>)}
          </div>
        </div>
        <div className="ph" role="img" aria-label={t("photo_alt")}>
          {CONFIG.photo ? <Image src={CONFIG.photo.startsWith("/") ? CONFIG.photo : `/${CONFIG.photo}`} alt={t("photo_alt")} fill sizes="340px" priority style={{ objectFit: "cover" }} /> : <span>AJ</span>}
        </div>
        <div className="sc" aria-hidden="true" />
      </div>
    </section>
  );
}
