/* ست آیکون SVG اینلاین (بدون وابستگی) + نگاشت کلیدواژه‌ای دوزبانه برای تگ‌ها */
import type { CSSProperties } from "react";

const P = {
  user: <><circle cx="12" cy="7" r="4" /><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /></>,
  gauge: <><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0z" /></>,
  briefcase: <><rect width="20" height="14" x="2" y="7" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>,
  rocket: <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></>,
  shield: <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />,
  chart: <><path d="M9 5v4" /><rect width="4" height="6" x="7" y="9" rx="1" /><path d="M9 15v2" /><path d="M17 3v2" /><rect width="4" height="8" x="15" y="5" rx="1" /><path d="M17 13v3" /><path d="M3 3v16a2 2 0 0 0 2 2h16" /></>,
  mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
  home: <><path d="m3 10.5 9-7.5 9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M10 21v-6h4v6" /></>,
  chevron: <path d="m6 9 6 6 6-6" />,
  menu: <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>,
  code: <><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /></>,
  cpu: <><rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" /></>,
  terminal: <><path d="m4 17 6-6-6-6" /><path d="M12 19h8" /></>,
  globe: <><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></>,
  phone: <><rect width="14" height="20" x="5" y="2" rx="2" /><path d="M12 18h.01" /></>,
  flag: <><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><path d="M4 22v-7" /></>,
  pen: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  sparkles: <><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z" /><path d="M5 3v4M3 5h4M19 17v4M17 19h4" /></>,
  python: <><path fill="#3776AB" stroke="none" d="M12 2c-5 0-5.5 2.2-5.5 4.5V9h6v1H4.8C2.5 10 1 12 1 15s1.5 5 4 5h2v-3c0-2.5 2-4.5 4.5-4.5h5c2.5 0 4-1.8 4-4.3V6.5C20.5 3.5 18 2 15 2z" /><path fill="#FFD43B" stroke="none" d="M12 22c5 0 5.5-2.2 5.5-4.5V15h-6v-1h7.7c2.3 0 3.8-2 3.8-5s-1.5-5-4-5h-2v3c0 2.5-2 4.5-4.5 4.5h-5c-2.5 0-4 1.8-4 4.3v1.2C3.5 20.5 6 22 9 22z" /><circle cx="9.5" cy="5.5" r=".8" fill="#fff" stroke="none" /><circle cx="14.5" cy="18.5" r=".8" fill="#fff" stroke="none" /></>,
  next: <><circle cx="12" cy="12" r="10" stroke="#fff" /><path d="M8 16V8l8 8V8" stroke="#fff" /></>,
  html: <><path fill="#E34F26" stroke="none" d="m3 2 1.6 18L12 22l7.4-2L21 2z" /><path fill="#fff" stroke="none" d="M12 4H6.5l.2 2.2H12v2.2H7l.5 6.1 4.5 1.2v-2.3l-2.4-.6-.2-2.2H12v-2.2h6l-.2 2.2h-3v2.2h2.8l-.4 3.2-4.2 1.1v2.3l6.3-1.7L20.5 4z" /></>,
  css: <><path fill="#1572B6" stroke="none" d="m3 2 1.6 18L12 22l7.4-2L21 2z" /><path fill="#fff" stroke="none" d="M12 4H6.5l.2 2.2H12v2.2H7l.2 2.2H12v2.2H9.4l.2 2.2 2.4.6v2.3l-4.7-1.3-.4-4.1h2.2l.1 1.7h2.8v-3.6H7L6.5 4H12zM12 4h5.5l-.2 2.2H12v2.2h5l-.5 6.1-4.5 1.2v-2.3l2.4-.6.2-2.2H12v-2.2h2.8l.2-2.2H12z" /></>,
  tradingview: <><path fill="#fff" stroke="none" d="M3 6h7v3H7v3H4v-3H3zM10 6h11v3H10zM7 12h14v3H7zM3 18h10v3H3z" /><circle cx="17.5" cy="19.5" r="2.5" fill="#FF6B00" stroke="none" /></>,
  android: <><path fill="#3DDC84" stroke="none" d="M5.2 9a7.8 7.8 0 0 1 13.6 0zM4 10h16v7a2 2 0 0 1-2 2h-1v3h-2v-3H9v3H7v-3H6a2 2 0 0 1-2-2zM5 2l2.3 4M19 2l-2.3 4" /><circle cx="8" cy="13" r=".8" fill="#090909" stroke="none" /><circle cx="16" cy="13" r=".8" fill="#090909" stroke="none" /></>,
  java: <><path d="M8 17h9M6 20h13M10 14c-2-1-2-2 0-3m3 3c-2-1-2-2 0-3m2 3c-2-1-2-2 0-3" stroke="#F89820" /><path d="M7 16v2a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2" stroke="#E76F00" /></>,
  apple: <><path fill="#fff" stroke="none" d="M17.1 20.3c-1 .9-2.1.8-3.1.3-1.1-.5-2.1-.5-3.2 0-1.4.6-2.3.4-3.1-.3C2.8 14.3 3.5 6.6 8.2 6.3c1.1.1 1.9.6 2.6.7 1-.2 2-.8 3.1-.7 1.3.1 2.3.6 3 1.6-2.8 1.6-2.1 5.2.4 6.2-.5 1.3-1.2 2.6-2.3 4.2zM10.8 6.1c-.1-2 1.5-3.6 3.3-3.7.3 2.2-2.1 3.9-3.3 3.7z" /></>,
  crypto: <><circle cx="12" cy="12" r="10" fill="#F7931A" stroke="none" /><path d="M11 6v12m0-11h3.5a2 2 0 0 1 0 4H11m0 0h4a2 2 0 0 1 0 4h-4" stroke="#fff" strokeWidth="1.5" /></>,
  indicator: <><path d="M3 20h18M5 17l4-5 3 2 6-8" /><circle cx="18" cy="6" r="2" fill="#FF6B00" stroke="none" /></>,
} as const;

export type IconName = keyof typeof P;

export default function Icon({ name, size = 18, className, style }: { name: IconName; size?: number; className?: string; style?: CSSProperties }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} style={style}>{P[name]}</svg>
  );
}

/* آیکون تگ از روی کلیدواژه انگلیسی/فارسی؛ ترتیب مهم است (اختصاصی‌ها اول) */
const TAG_MAP: [RegExp, IconName][] = [
  [/python|پایتون/i, "python"],
  [/next\.?js/i, "next"],
  [/^html$/i, "html"],
  [/^css$/i, "css"],
  [/tradingview/i, "tradingview"],
  [/crypto|ارز دیجیتال/i, "crypto"],
  [/android/i, "android"],
  [/java/i, "java"],
  [/^ios$/i, "apple"],
  [/indicator|اندیکاتور/i, "indicator"],
  [/ctf|سی‌تی‌اف/i, "flag"],
  [/secur|cyber|hack|امنیت|سایبری|هک|نفوذ/i, "shield"],
  [/hardware|سخت[\s‌]?افزار/i, "cpu"],
  [/mobile|phone|repair|موبایل|گوشی|تعمیر/i, "phone"],
  [/trad|stock|forex|market|financ|ترید|معامل|بورس|بازار|مالی/i, "chart"],
  [/script|tool|bash|terminal|cmd|اسکریپت|ابزار|ترمینال|خط فرمان/i, "terminal"],
  [/write|report|article|blog|گزارش|نوشت|مقال|بلاگ/i, "pen"],
  [/web design|طراحی وب/i, "pen"],
  [/front|فرانت|code|کد/i, "code"],
  [/web|site|وب|سایت/i, "globe"],
  [/program|code|develop|software|app|برنامه|کد|توسعه|نرم[\s‌]?افزار/i, "code"],
  [/tech|فناوری|تکنولوژی/i, "cpu"],
  [/network|شبکه/i, "globe"],
];

export function iconForTag(label: string): IconName {
  for (const [re, icon] of TAG_MAP) if (re.test(label)) return icon;
  return "sparkles";
}
