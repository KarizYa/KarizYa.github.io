import { useState } from "react";
import { Code, X, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import SectionCard from "../components/SectionCard";
import SectionHeading from "../components/SectionHeading";
import { workTags, works, type Work as WorkItem } from "../data/portfolio";
import { asset } from "../lib/asset";
import { toneClass } from "../lib/tone";

type Size = "sm" | "lg";

function Thumb({ src, size }: { src?: string; size: Size }) {
  const [failed, setFailed] = useState(false);
  const height = size === "sm" ? "h-[100px]" : "h-[150px]";
  if (!src || failed) {
    return (
      <div aria-hidden="true" className={`${height} grid place-items-center rounded-[8px] bg-soft text-mute`}>
        <Code size={28} />
      </div>
    );
  }
  return <img src={asset(src)} alt="" width={334} height={size === "sm" ? 100 : 150} loading="lazy" onError={() => setFailed(true)} className={`${height} w-full rounded-[8px] object-cover`} />;
}

function WorkCard({ item, size, onSelect }: { item: WorkItem; size: Size; onSelect: (item: WorkItem) => void }) {
  const cls = `group block cursor-pointer rounded-[18px] border border-line/80 p-[10px] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_28px_rgba(15,23,42,0.08)] ${size === "sm" ? "min-h-[150px]" : "min-h-[200px]"} ${toneClass[item.tone]}`;
  const body = (
    <>
      <Thumb src={item.image} size={size} />
      <p className="mt-[10px] font-poppins text-[10px] leading-[14px] font-medium uppercase tracking-[0.12em] text-mute">{item.category}</p>
      <p className="mt-[4px] font-poppins text-[16px] leading-[20px] font-semibold text-ink transition-colors duration-200 group-hover:text-brand">
        {item.title}
      </p>
    </>
  );

  return (
    <button type="button" onClick={() => onSelect(item)} className={cls}>
      {body}
    </button>
  );
}

export default function Work() {
  const [tag, setTag] = useState<(typeof workTags)[number]>("All");
  const [selected, setSelected] = useState<WorkItem | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const visible = works.filter((w) => tag === "All" || w.tags.includes(tag));
  const columns: [WorkItem[], WorkItem[]] = [visible.filter((_, i) => i % 2 === 0), visible.filter((_, i) => i % 2 === 1)];

  const gallery = selected?.gallery && selected.gallery.length > 0 ? selected.gallery : selected?.image ? [selected.image] : [];
  const useContainGallery = selected ? ["aptika", "aptika2", "monitoring"].includes(selected.id) : false;

  const mainImageClass = useContainGallery ? "h-[240px] w-full rounded-[16px] bg-white object-contain sm:h-[300px] md:h-[360px]" : "h-[260px] w-full object-cover sm:h-[340px] md:h-[420px]";
  const thumbImageClass = useContainGallery ? "h-[72px] w-[110px] bg-white object-contain" : "h-[72px] w-[110px] object-cover";

  const nextImage = () => setActiveIndex((current) => (current + 1) % (gallery.length || 1));
  const prevImage = () => setActiveIndex((current) => (current - 1 + (gallery.length || 1)) % (gallery.length || 1));

  return (
    <SectionCard labelledBy="work-title" pad="narrow">
      <div className="sm:px-[24px]">
        <SectionHeading id="work-title" title="Portofolio" />
      </div>
      <div role="group" aria-label="Filter kategori" className="mt-[2px] flex flex-wrap justify-end gap-x-[16px] gap-y-2 font-poppins text-[15px] leading-[24px] font-medium">
        {workTags.map((t) => (
          <button key={t} type="button" aria-pressed={tag === t} onClick={() => setTag(t)} className={`cursor-pointer rounded-full px-[10px] py-[5px] transition-all duration-200 ${tag === t ? "bg-brand-gradient text-white shadow-[0_8px_16px_rgba(37,99,235,0.16)]" : "bg-transparent text-tag hover:text-ink"}`}>
            {t}
          </button>
        ))}
      </div>
      <div className="mt-[16px] grid items-start gap-x-[24px] gap-y-[32px] sm:grid-cols-2">
        {columns.map((col, c) => (
          <div key={c} className="flex flex-col gap-[28px]">
            {col.map((item) => (
              <WorkCard key={item.id} item={item} size={c === 0 ? "sm" : "lg"} onSelect={(item) => {
                setSelected(item);
                setActiveIndex(0);
              }} />
            ))}
          </div>
        ))}
      </div>
      {visible.length === 0 && <p className="mt-6 font-raleway text-mute">Belum ada karya pada kategori ini.</p>}

      {selected && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 p-3 sm:p-4" role="dialog" aria-modal="true" aria-label="Detail karya">
          <div className="mx-auto my-4 flex min-h-full w-full items-center justify-center">
            <div className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[28px] border border-line/80 bg-card shadow-[0_28px_80px_rgba(15,23,42,0.35)]">
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 grid size-[36px] place-items-center rounded-full bg-slate-900/80 text-white transition hover:bg-slate-800"
                aria-label="Tutup detail karya"
              >
                <X size={18} aria-hidden="true" />
              </button>

              <div className="grid max-h-[90vh] overflow-y-auto md:grid-cols-[1.2fr_0.8fr]">
                <div className={useContainGallery ? "bg-[#f8fafc] p-3 sm:p-4 md:p-5" : "bg-soft p-3 sm:p-4 md:p-5"}>
                  <div className="overflow-hidden rounded-[22px] border border-line/80 bg-card shadow-[0_18px_32px_rgba(15,23,42,0.08)]">
                    <div className="relative">
                      <img
                        src={asset(gallery[activeIndex] ?? selected.image ?? "")}
                        alt={selected.title}
                        className={`${mainImageClass} animate-thumbnail-fade`}
                      />

                      {gallery.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={prevImage}
                            className="absolute left-3 top-1/2 grid size-[36px] -translate-y-1/2 place-items-center rounded-full bg-white/80 text-slate-700 shadow-md backdrop-blur-sm transition hover:bg-white"
                            aria-label="Gambar sebelumnya"
                          >
                            <ChevronLeft size={18} aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            onClick={nextImage}
                            className="absolute right-3 top-1/2 grid size-[36px] -translate-y-1/2 place-items-center rounded-full bg-white/80 text-slate-700 shadow-md backdrop-blur-sm transition hover:bg-white"
                            aria-label="Gambar berikutnya"
                          >
                            <ChevronRight size={18} aria-hidden="true" />
                          </button>
                        </>
                      )}
                    </div>

                    {gallery.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto border-t border-line/80 bg-soft p-3">
                        {gallery.map((img, index) => (
                          <button
                            key={`${selected.id}-${index}`}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            className={`relative shrink-0 overflow-hidden rounded-[12px] border-2 transition ${activeIndex === index ? "border-brand" : "border-transparent"}`}
                            aria-label={`Lihat gambar ${index + 1}`}
                          >
                            <img src={asset(img)} alt={`${selected.title} ${index + 1}`} className={`${thumbImageClass}`} />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-5 md:p-7">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                    <span>{selected.category}</span>
                  </div>
                  <h3 className="mt-3 font-poppins text-[24px] leading-[32px] font-semibold text-ink sm:text-[28px] sm:leading-[36px]">{selected.title}</h3>
                  <p className="mt-4 font-raleway text-[14px] leading-[25px] text-mute sm:text-[15px] sm:leading-[27px]">
                    {selected.description || "Karya ini dibuat untuk menyelesaikan kebutuhan nyata dengan pendekatan yang efisien, terstruktur, dan mudah digunakan."}
                  </p>

                  {selected.stack && selected.stack.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {selected.stack.map((tool) => (
                        <span key={tool} className="rounded-full border border-line bg-soft px-3 py-1.5 font-raleway text-[12px] font-medium text-tag">
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}

                  {selected.href ? (
                    <a
                      href={selected.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-4 py-2.5 font-poppins text-[12px] font-semibold text-white shadow-[0_12px_22px_rgba(37,99,235,0.2)]"
                    >
                      Lihat proyek
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </SectionCard>
  );
}
