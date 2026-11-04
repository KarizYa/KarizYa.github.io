import type { ReactNode } from "react";

const padding = {
  wide: "px-5 sm:px-[72px] pb-8",
  narrow: "px-5 sm:px-[48px] pb-8",
  none: "",
} as const;

interface SectionCardProps { children: ReactNode; pad?: keyof typeof padding; labelledBy: string }

export default function SectionCard({ children, pad = "wide", labelledBy }: SectionCardProps) {
  return (
    <section aria-labelledby={labelledBy} className={`flex h-full min-h-[700px] w-full flex-col overflow-y-auto rounded-[24px] border border-line/80 bg-card pt-[18px] shadow-[0_12px_32px_rgba(15,23,42,0.04)] lg:h-[760px] ${padding[pad]}`}>
      {children}
    </section>
  );
}
