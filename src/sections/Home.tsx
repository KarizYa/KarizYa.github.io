import { Code, Database, Smartphone, Users, type LucideIcon } from "lucide-react";
import SectionCard from "../components/SectionCard";
import SectionHeading from "../components/SectionHeading";
import { about, services, type Service } from "../data/portfolio";
import { toneClass } from "../lib/tone";

const icons: Record<Service["id"], { Icon: LucideIcon; color: string }> = {
  web: { Icon: Code, color: "text-brand" },
  app: { Icon: Smartphone, color: "text-amber" },
  data: { Icon: Database, color: "text-amber" },
  leadership: { Icon: Users, color: "text-brand" },
};

export default function Home() {
  return (
    <SectionCard labelledBy="about-title">
      <SectionHeading id="about-title" title={about.title} />
      <p className="mt-[14px] max-w-[694px] px-[10px] font-raleway text-[16px] leading-[30px] font-medium text-ink/85">{about.text}</p>
      <h2 className="mt-[18px] px-[10px] font-poppins text-[24px] leading-[32px] font-semibold tracking-[0.02em] text-ink sm:text-[30px] sm:leading-[40px]">{about.subtitle}</h2>
      <ul className="mt-[18px] grid gap-x-[27px] gap-y-[24px] md:grid-cols-2">
        {services.map(({ id, title, text, tone }) => {
          const { Icon, color } = icons[id];
          return (
            <li key={id} className={`min-h-[169px] rounded-[22px] border border-line/80 px-[25px] py-[16px] shadow-[0_12px_22px_rgba(15,23,42,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(15,23,42,0.06)] ${toneClass[tone]}`}>
              <h3 className="flex items-center gap-[8px] font-poppins text-[15px] leading-[22px] font-semibold tracking-[0.02em] text-ink sm:text-[16px]">
                <span className="grid size-[30px] shrink-0 place-items-center rounded-[10px] bg-white/40 ring-1 ring-black/5"><Icon size={16} className={color} aria-hidden="true" /></span>
                <span className="min-w-0 whitespace-nowrap leading-[1.2]">{title}</span>
              </h3>
              <p className="mt-[10px] font-raleway text-[14px] leading-[22px] tracking-[0.01em] text-ink/80">{text}</p>
            </li>
          );
        })}
      </ul>
    </SectionCard>
  );
}
