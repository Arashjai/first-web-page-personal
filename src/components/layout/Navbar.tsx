"use client";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Icon, { type IconName } from "@/components/ui/Icon";
import ResumeButton from "@/components/ui/ResumeButton";

const items = [["home", "n_home", "home"], ["about", "n_about", "user"], ["skills", "n_skills", "gauge"], ["experience", "n_exp", "briefcase"], ["projects", "n_proj", "rocket"], ["contact", "n_contact", "mail"]] as const;

export default function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, [pathname]);

  return (
    <nav className={scrolled ? "s" : ""}>
      <div className="w nb">
        <Link href="/" className="logo" aria-label="AJ">A<b>J</b></Link>
        <button className="burger" aria-label={t("menu")} aria-expanded={open} onClick={() => setOpen(!open)}><Icon name="menu" size={20} /></button>
        <div className={`links${open ? " open" : ""}`}>
          {items.map(([id, key, ic]) => (
            <Link key={id} href={`/#${id}`} className={active === id ? "on" : ""} onClick={() => setOpen(false)}><span className="nav-ic"><Icon name={ic as IconName} size={15} /></span>{t(key)}</Link>
          ))}
        </div>
        <Link href={pathname} locale={locale === "fa" ? "en" : "fa"} className="lang" aria-label="Language">
          {locale === "fa" ? "English" : "فارسی"}
        </Link>
        <ResumeButton className="btn p rs" style={{ padding: "7px 16px", fontSize: 14 }} />
      </div>
    </nav>
  );
}
