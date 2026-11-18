import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Footer() {
  const t = await getTranslations();
  return (
    <footer>
      <div className="w fg">
        <div><span className="logo">A<b>J</b></span> <span style={{ marginInlineStart: 10 }}>{t("tag")}</span></div>
        <div>© {new Date().getFullYear()} Arash Jannatabadi</div>
        <Link href="/#home" className="btn">{t("top")}</Link>
      </div>
    </footer>
  );
}
