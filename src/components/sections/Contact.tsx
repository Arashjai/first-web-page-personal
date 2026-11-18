import { getTranslations } from "next-intl/server";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/forms/ContactForm";
import { CONFIG } from "@/config";

export default async function Contact() {
  const t = await getTranslations();
  const methods: [string, string, string][] = [
    ["Email", CONFIG.email ? `mailto:${CONFIG.email}` : "", CONFIG.email],
    ["Telegram", CONFIG.telegram, CONFIG.telegram],
    ["LinkedIn", CONFIG.linkedin, CONFIG.linkedin],
    ["GitHub", CONFIG.github, CONFIG.github],
  ];
  return (
    <Section id="contact" title={t("ct_t")} sub={t("ct_s")}>
      <div className="two">
        <ContactForm />
        <div className="cl">
          {methods.map(([n, href, v]) =>
            href ? (
              <a key={n} href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                {n}<small dir="ltr">{v}</small>
              </a>
            ) : (
              <span key={n} style={{ display: "block", padding: "10px 0", borderBottom: "1px solid var(--bd)", color: "var(--mu)" }}>
                {n}<small style={{ display: "block", fontSize: 13 }}>{t("nolink")}</small>
              </span>
            ),
          )}
        </div>
      </div>
    </Section>
  );
}
