"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

export default function Collapsible({ id, title, sub, children }: { id: string; title: string; sub?: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const revealObserver = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { setVis(true); revealObserver.disconnect(); } }),
      { rootMargin: "0px 0px -10% 0px" },
    );
    const accordionObserver = new IntersectionObserver(
      ([entry]) => setOpen(entry.isIntersecting),
      { rootMargin: "-15% 0px -15% 0px" },
    );
    revealObserver.observe(el);
    accordionObserver.observe(el);
    return () => {
      revealObserver.disconnect();
      accordionObserver.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={`acc rv${vis ? " in" : ""}${open ? " open" : ""}`}>
      <div className="acc-h">
        <div className="acc-t">
          <h2>{title}</h2>
          {sub && <p className="sub">{sub}</p>}
        </div>
      </div>
      <div className="acc-b" id={`${id}-body`} aria-hidden={!open} inert={!open}>
        <div>
          <div className="acc-c">{children}</div>
        </div>
      </div>
    </div>
  );
}
