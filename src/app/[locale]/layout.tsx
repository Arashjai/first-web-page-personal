import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SITE } from "@/lib/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const vazir = Vazirmatn({ subsets: ["arabic", "latin"], variable: "--font-vazir", display: "swap" });

export const generateStaticParams = () => routing.locales.map((locale) => ({ locale }));

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const title = t("meta_title"), description = t("meta_desc");
  return {
    metadataBase: new URL(SITE), title, description,
    alternates: { canonical: `/${locale}`, languages: { en: "/en", fa: "/fa", "x-default": "/en" } },
    openGraph: { title, description, url: `/${locale}`, siteName: "Arash Jannatabadi", type: "website", locale: locale === "fa" ? "fa_IR" : "en_US" },
    twitter: { card: "summary", title, description },
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"} className={`${inter.variable} ${vazir.variable}`}>
      <body>
        <div className="neon" aria-hidden="true"><i className="nb1" /><i className="nb2" /><i className="nb3" /></div>
        <NextIntlClientProvider>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
