import Collapsible from "@/components/ui/Collapsible";
import type { ReactNode } from "react";

export default function Section({ id, title, sub, children }: { id: string; title: string; sub?: string; children: ReactNode }) {
  return (
    <section id={id}>
      <div className="w">
        <Collapsible id={id} title={title} sub={sub}>{children}</Collapsible>
      </div>
    </section>
  );
}
