import type { Data } from "@/types";

export const DATA: Data = {
  goals: {
    en: ["Web Design", "Python Programming", "Forex Trading"],
    fa: ["طراحی وب", "برنامه‌نویسی پایتون", "ترید فارکس"],
  },
  expertise: {
    en: [
      "Frontend Development",
      "Mobile Hardware",
      "Mobile Software",
      "Financial Market Analysis",
      "Indicator Development",
      "Hacking & Cybersecurity",
    ],
    fa: [
      "توسعه فرانت‌اند",
      "سخت‌افزار موبایل",
      "نرم‌افزار موبایل",
      "تحلیل بازارهای مالی",
      "طراحی اندیکاتور",
      "هک و امنیت",
    ],
  },
  skills: [
    {
      t: { en: "Programming & Development", fa: "برنامه‌نویسی و توسعه" },
      items: [{ n: { en: "Python", fa: "پایتون" } }],
    },
    {
      t: { en: "Frontend & Web Development", fa: "فرانت‌اند و توسعه وب" },
      items: [
        { n: { en: "Next.js", fa: "Next.js" } },
        { n: { en: "HTML", fa: "HTML" } },
        { n: { en: "CSS", fa: "CSS" } },
      ],
    },
    {
      t: { en: "Financial Markets", fa: "بازارهای مالی" },
      items: [
        { n: { en: "Forex", fa: "فارکس" } },
        { n: { en: "Cryptocurrency", fa: "ارز دیجیتال" } },
        { n: { en: "TradingView", fa: "TradingView" } },
        { n: { en: "Indicator Development", fa: "طراحی اندیکاتور" } },
      ],
    },
    {
      t: {
        en: "Mobile Hardware & Troubleshooting",
        fa: "سخت‌افزار و عیب‌یابی موبایل",
      },
      description: {
        en: "Practical experience diagnosing, repairing, and resolving hardware and software issues on mobile devices.",
        fa: "تجربه عملی در عیب‌یابی، تعمیر و رفع مشکلات سخت‌افزاری و نرم‌افزاری دستگاه‌های موبایل.",
      },
      items: [
        { n: { en: "Android", fa: "Android" } },
        { n: { en: "Java", fa: "Java" } },
        { n: { en: "iOS", fa: "iOS" } },
      ],
    },
  ],
  experience: [
    {
      role: { en: "Mobile Repair Technician", fa: "تعمیرکار موبایل" },
      org: { en: "", fa: "" },
      start: "",
      end: "",
      dur: { en: "1.5 Years", fa: "حدود ۱٫۵ سال" },
      desc: {
        en: "Hands-on experience in mobile phone repair, hardware and software troubleshooting, diagnosing technical issues, and resolving problems across various smartphone models.",
        fa: "فعالیت عملی در زمینه تعمیرات تخصصی موبایل، عیب‌یابی مشکلات سخت‌افزاری و نرم‌افزاری، شناسایی ایرادات دستگاه و رفع مشکلات فنی انواع گوشی‌های هوشمند.",
      },
      resp: { en: [], fa: [] },
      skills: [],
    },
    {
      role: { en: "Financial Market Trader", fa: "تریدر بازارهای مالی" },
      org: { en: "", fa: "" },
      start: "",
      end: "",
      dur: { en: "2 Years", fa: "۲ سال" },
      desc: {
        en: "Two years of active experience in financial markets, particularly Forex trading, focusing on price action analysis, risk and money management, trading strategy development, and performance evaluation.",
        fa: "فعالیت مستمر در بازارهای مالی، به‌ویژه فارکس، با تمرکز بر تحلیل نمودارهای قیمتی، مدیریت ریسک و سرمایه، توسعه استراتژی‌های معاملاتی و بررسی عملکرد معاملات.",
      },
      resp: { en: [], fa: [] },
      skills: [],
    },
    {
      role: { en: "Web Designer & Developer", fa: "طراح و توسعه‌دهنده وب" },
      org: { en: "", fa: "" },
      start: "",
      end: "",
      dur: { en: "1 Year", fa: "۱ سال" },
      desc: {
        en: "One year of experience in modern website design and development, building responsive user interfaces and creating functional web experiences using HTML, CSS, and Next.js.",
        fa: "فعالیت در زمینه طراحی و توسعه وب‌سایت‌های مدرن، پیاده‌سازی رابط کاربری، توسعه صفحات ریسپانسیو و استفاده از فناوری‌های HTML، CSS و Next.js برای ساخت تجربه‌های کاربری سریع و کاربردی.",
      },
      resp: { en: [], fa: [] },
      skills: [],
    },
  ],
  education: [
    {
      field: {
        en: "Bachelor's Degree in Computer Engineering",
        fa: "کارشناسی پیوسته مهندسی کامپیوتر",
      },
      institution: {
        en: "Islamic Azad University, Roudehen Branch",
        fa: "دانشگاه آزاد اسلامی واحد رودهن",
      },
    },
  ],
  categories: [
    { id: "web", en: "Web Development", fa: "توسعه وب" },
    { id: "prog", en: "Programming", fa: "برنامه‌نویسی" },
    { id: "tools", en: "Tools & Utilities", fa: "ابزارها" },
    { id: "other", en: "Other Projects", fa: "سایر پروژه‌ها" },
  ],
  projects: [],
};
