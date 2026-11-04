import { Award, Briefcase, FileText, Home } from "lucide-react";
import { NavLink } from "react-router-dom";

const items = [
  { to: "/", label: "Beranda", Icon: Home, end: true },
  { to: "/resume", label: "Resume", Icon: FileText, end: false },
  { to: "/work", label: "Karya", Icon: Briefcase, end: false },
  { to: "/sertifikasi", label: "Sertifikasi", Icon: Award, end: false },
];

export default function NavBar() {
  return (
    <nav aria-label="Navigasi utama" className="w-full max-w-[503px] rounded-[20px] border border-line/80 bg-soft/90 p-[10px] shadow-[0_12px_24px_rgba(15,23,42,0.05)] backdrop-blur-sm lg:ml-auto">
      <ul className="grid grid-cols-4 justify-items-center gap-2 sm:gap-2.5 sm:px-[18px]">
        {items.map(({ to, label, Icon, end }) => (
          <li key={to} className="w-full max-w-[90px]">
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex aspect-square w-full flex-col items-center justify-center gap-[3px] rounded-[18px] font-raleway text-[12px] leading-[18px] font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-brand-gradient text-white shadow-[0_8px_16px_rgba(37,99,235,0.28)]"
                    : "bg-chip text-ink/80 hover:bg-card hover:text-ink"
                }`
              }
            >
              <Icon size={22} aria-hidden="true" />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
