import { getTranslations } from "next-intl/server";
import Section from "@/components/ui/Section";

export default async function Trading() {
  const t = await getTranslations();
  return (
    <Section id="trading" title={t("tr_t")} sub={t("tr_s")}>
      <div className="card"><p>{t("tr_b")}</p></div>
    </Section>
  );
}
