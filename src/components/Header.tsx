import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../data/portfolio";

interface HeaderProps { dark: boolean; onToggle: () => void }

export default function Header({ dark, onToggle }: HeaderProps) {
  const Icon = dark ? Sun : Moon;
  return (
    <header className="mb-4 flex h-[80px] items-center justify-between lg:mb-[42px] lg:h-[104px]">
      <Link to="/" className="py-[20px] font-pacifico text-[24px] leading-normal text-ink">
        {profile.firstName} <span className="text-brand-gradient">{profile.lastName}</span>
      </Link>
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={dark}
        aria-label={dark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
        className="grid size-[56px] cursor-pointer place-items-center rounded-full border border-line bg-soft text-ink shadow-[0_10px_30px_rgba(17,24,39,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:bg-card hover:shadow-[0_12px_24px_rgba(37,99,235,0.08)] focus-visible:outline-none"
      >
        <Icon size={20} aria-hidden="true" />
      </button>
    </header>
  );
}
