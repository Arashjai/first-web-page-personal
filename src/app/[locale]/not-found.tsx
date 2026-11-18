import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
export default async function NotFound() {
  const t = await getTranslations();
  return (
    <main className="w" style={{ padding: "120px 20px", textAlign: "center" }}>
      <h2>{t("nf_t")}</h2><p className="sub" style={{ margin: "0 auto 24px" }}>{t("nf_b")}</p>
      <Link href="/" className="btn p">{t("go_home")}</Link>
    </main>
  );
}
