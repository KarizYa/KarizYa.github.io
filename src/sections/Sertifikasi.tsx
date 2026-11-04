import { useState } from "react";
import { Award, X, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import SectionCard from "../components/SectionCard";
import { certificates } from "../data/portfolio";
import { asset } from "../lib/asset";

export default function Sertifikasi() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const selected = selectedIndex === null ? null : certificates[selectedIndex];
  const hasPrev = selectedIndex !== null && selectedIndex > 0;
  const hasNext = selectedIndex !== null && selectedIndex < certificates.length - 1;

  const moveTo = (nextDirection: "prev" | "next") => {
    if (selectedIndex === null) return;

    setDirection(nextDirection);

    if (nextDirection === "prev" && hasPrev) {
      setSelectedIndex(selectedIndex - 1);
      return;
    }

    if (nextDirection === "next" && hasNext) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const contentClass = direction === "next" ? "animate-[cert-slide-in-right_0.3s_ease-out]" : "animate-[cert-slide-in-left_0.3s_ease-out]";

  return (
    <SectionCard labelledBy="sertifikasi-title" pad="narrow">
      <div className="mt-[18px] rounded-[28px] border border-line/80 bg-panel p-[18px] shadow-[0_20px_40px_rgba(15,23,42,0.04)] sm:p-[22px]">
        <div className="mb-[18px] flex items-center gap-[12px]">
          <div className="grid size-[38px] place-items-center rounded-full bg-brand-gradient text-white shadow-[0_12px_20px_rgba(37,99,235,0.2)]">
            <Award size={18} aria-hidden="true" />
          </div>
          <div>
            <p className="font-poppins text-[10px] uppercase tracking-[0.18em] text-brand">Credential</p>
            <h2 className="mt-[2px] font-poppins text-[24px] leading-[32px] font-semibold text-ink">Sertifikat Saya</h2>
          </div>
        </div>

        <div className="grid gap-[18px] md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="group overflow-hidden rounded-[20px] border border-line/80 bg-card p-[10px] text-left shadow-[0_12px_22px_rgba(15,23,42,0.03)] transition-all duration-200 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_18px_30px_rgba(37,99,235,0.08)]"
            >
              <div className="overflow-hidden rounded-[14px] border border-line/80 bg-soft">
                <img
                  src={asset(item.image ?? "images/Rizka Annisa KTA.png")}
                  alt={item.title}
                  className="h-[170px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-[12px] space-y-[6px]">
                <p className="font-poppins text-[9px] uppercase tracking-[0.14em] text-brand">{item.year}</p>
                <p className="font-poppins text-[14px] leading-[20px] font-semibold text-ink">{item.title}</p>
                <p className="font-raleway text-[12px] leading-[18px] text-mute">{item.organizer}</p>
              </div>

              <div className="mt-[12px] inline-flex items-center gap-[6px] font-poppins text-[10px] font-semibold uppercase tracking-[0.12em] text-brand">
                Lihat sertifikat
                <ArrowUpRight size={12} aria-hidden="true" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/75 p-3 backdrop-blur-sm sm:p-4" role="dialog" aria-modal="true" aria-label="Zoom sertifikat">
          <div className="relative w-[min(92vw,980px)] max-h-[90vh] overflow-hidden rounded-[28px] border border-line/80 bg-card shadow-[0_32px_90px_rgba(15,23,42,0.35)]">
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute top-3 right-3 z-20 grid size-[34px] place-items-center rounded-full bg-soft text-ink shadow-lg transition hover:bg-card sm:top-4 sm:right-4"
              aria-label="Tutup modal"
            >
              <X size={16} aria-hidden="true" />
            </button>

            {hasPrev && (
              <button
                type="button"
                onClick={() => moveTo("prev")}
                className="absolute left-3 top-1/2 z-20 grid size-[38px] -translate-y-1/2 place-items-center rounded-full border border-line bg-card text-ink shadow-lg backdrop-blur-sm transition hover:bg-soft sm:left-4"
                aria-label="Sertifikat sebelumnya"
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
            )}

            {hasNext && (
              <button
                type="button"
                onClick={() => moveTo("next")}
                className="absolute right-3 top-1/2 z-20 grid size-[38px] -translate-y-1/2 place-items-center rounded-full border border-line bg-card text-ink shadow-lg backdrop-blur-sm transition hover:bg-soft sm:right-4"
                aria-label="Sertifikat berikutnya"
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            )}

            <div className={`grid max-h-[90vh] overflow-y-auto md:grid-cols-[1.15fr_0.85fr] ${contentClass}`}>
              <div className="bg-soft p-3 sm:p-4 md:p-5">
                <div className="flex min-h-[240px] items-center justify-center overflow-hidden rounded-[20px] border border-line bg-card">
                  <img
                    src={asset(selected.image ?? "images/Rizka Annisa KTA.png")}
                    alt={selected.title}
                    className="max-h-[62vh] w-full rounded-[16px] object-contain transition-transform duration-500 ease-out hover:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center p-4 sm:p-5 md:p-6">
                <p className="font-poppins text-[10px] uppercase tracking-[0.16em] text-brand">{selected.year}</p>
                <h3 className="mt-2 font-poppins text-[22px] leading-[30px] font-semibold text-ink sm:text-[26px] sm:leading-[34px]">{selected.title}</h3>
                <p className="mt-3 font-raleway text-[14px] leading-[22px] text-mute">{selected.organizer}</p>

                {selected.description && (
                  <p className="mt-4 font-raleway text-[14px] leading-[24px] text-ink/80">
                    {selected.description}
                  </p>
                )}

                {selected.href && (
                  <a
                    href={selected.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-[8px] rounded-full bg-brand-gradient px-[14px] py-[10px] font-poppins text-[11px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_12px_22px_rgba(37,99,235,0.2)]"
                  >
                    Lihat detail
                    <ArrowUpRight size={12} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </SectionCard>
  );
}
