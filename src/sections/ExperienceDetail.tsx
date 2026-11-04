import { ArrowLeft, ChevronLeft, ChevronRight, ImageIcon, Link as LinkIcon, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SectionCard from "../components/SectionCard";
import { experienceDetails } from "../data/portfolio";

const detailMap = new Map(experienceDetails.map((item) => [item.slug, item]));

export default function ExperienceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const item = slug ? detailMap.get(slug) : undefined;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!item) {
      navigate("/resume", { replace: true });
    }
  }, [item, navigate]);

  if (!item) {
    return null;
  }

  const gallery = item.gallery.length > 0 ? item.gallery : [{ src: "", alt: "Dokumentasi pekerjaan belum tersedia." }];

  const scrollGallery = (direction: 1 | -1) => {
    const container = galleryRef.current;
    if (!container) return;

    const firstCard = container.querySelector<HTMLElement>("[data-gallery-item]");
    const cardWidth = firstCard ? firstCard.offsetWidth + 16 : 280;
    container.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <SectionCard labelledBy="experience-detail-title" pad="wide">
      <div className="max-w-[980px]">
        <nav aria-label="Breadcrumb" className="mb-[20px] flex flex-wrap items-center gap-[8px] font-raleway text-[12px] leading-[18px] font-semibold text-mute">
          <Link to="/" className="hover:text-brand">Beranda</Link>
          <span>/</span>
          <Link to="/resume" className="hover:text-brand">Resume</Link>
          <span>/</span>
          <span className="text-ink">{item.company}</span>
        </nav>

        <div className="mb-[22px] flex flex-col gap-[14px] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-raleway text-[12px] leading-[16px] font-semibold uppercase tracking-[0.12em] text-mute">{item.period}</p>
            <h1 id="experience-detail-title" className="mt-[8px] font-poppins text-[28px] leading-[36px] font-semibold tracking-[0.02em] text-ink sm:text-[36px] sm:leading-[44px]">
              {item.role.replace(/\s*[-–—]\s*.*$/, "")}
            </h1>
          </div>

          <Link
            to="/resume"
            className="inline-flex w-fit items-center gap-[8px] rounded-full border border-line bg-soft px-[14px] py-[9px] font-raleway text-[13px] font-semibold text-ink hover:border-brand/30 hover:bg-card"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Kembali
          </Link>
        </div>

        <div className="rounded-[24px] border border-line/80 bg-card p-[18px] shadow-[0_12px_24px_rgba(15,23,42,0.04)] sm:p-[24px]">
          <div className="flex flex-col gap-[16px] border-b border-line pb-[18px] sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-poppins text-[20px] leading-[28px] font-semibold text-ink">{item.company}</p>
              <p className="mt-[4px] font-raleway text-[14px] leading-[20px] text-mute">{item.department ?? "Tim / Divisi"}</p>
            </div>
            <div className="flex flex-wrap gap-[8px] text-[12px] font-raleway text-mute">
              <span className="rounded-full bg-soft px-[10px] py-[5px]">{item.location}</span>
            </div>
          </div>

          <p className="mt-[18px] font-raleway text-[15px] leading-[28px] text-ink/80">{item.summary}</p>
        </div>

        <div className="mt-[24px] grid gap-[24px] lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-[24px] border border-line/80 bg-card p-[20px] shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
            <h2 className="font-poppins text-[22px] leading-[30px] font-semibold text-ink">Tentang pengalaman</h2>
            <p className="mt-[12px] font-raleway text-[15px] leading-[28px] text-ink/80">{item.about}</p>
          </section>

          <aside className="rounded-[24px] border border-line/80 bg-soft/60 p-[20px] shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
            <h2 className="font-poppins text-[22px] leading-[30px] font-semibold text-ink">Teknologi & tools</h2>
            <div className="mt-[14px] flex flex-wrap gap-[8px]">
              {item.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-line bg-card px-[10px] py-[6px] font-raleway text-[12px] leading-[18px] font-semibold text-ink">
                  {tech}
                </span>
              ))}
            </div>
          </aside>
        </div>

        <section className="mt-[24px] rounded-[24px] border border-line/80 bg-card p-[20px] shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
          <h2 className="font-poppins text-[22px] leading-[30px] font-semibold text-ink">Tanggung jawab & kontribusi</h2>
          <ul className="mt-[14px] list-disc space-y-[10px] pl-[20px] font-raleway text-[15px] leading-[26px] text-ink/80">
            {item.responsibilities.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="mt-[24px] rounded-[24px] border border-line/80 bg-card p-[20px] shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
          <div className="mb-[14px] flex items-center justify-between gap-[10px]">
            <h2 className="font-poppins text-[22px] leading-[30px] font-semibold text-ink">Dokumentasi dan hasil pekerjaan</h2>

            {gallery.length > 1 && (
              <div className="flex items-center gap-[8px]">
                <button
                  type="button"
                  onClick={() => scrollGallery(-1)}
                  className="grid size-[34px] place-items-center rounded-full border border-line bg-soft text-ink transition hover:border-brand/30 hover:bg-card"
                  aria-label="Geser dokumentasi sebelumnya"
                >
                  <ChevronLeft size={16} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollGallery(1)}
                  className="grid size-[34px] place-items-center rounded-full border border-line bg-soft text-ink transition hover:border-brand/30 hover:bg-card"
                  aria-label="Geser dokumentasi berikutnya"
                >
                  <ChevronRight size={16} aria-hidden="true" />
                </button>
              </div>
            )}
          </div>

          <div
            ref={galleryRef}
            className="flex gap-[16px] overflow-x-auto pb-[2px] snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {gallery.map((entry, index) => (
              <div
                key={`${entry.alt}-${index}`}
                data-gallery-item
                className="group min-w-full shrink-0 snap-start overflow-hidden rounded-[16px] border border-line/80 bg-soft/50 p-[6px] shadow-[0_10px_18px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_22px_rgba(15,23,42,0.08)] sm:min-w-[calc((100%-32px)/3)]"
              >
                {entry.src ? (
                  <button
                    type="button"
                    onClick={() => setSelectedImage(entry.src ?? null)}
                    className="block w-full overflow-hidden rounded-[10px] bg-card"
                    aria-label={`Lihat gambar ${entry.alt}`}
                  >
                    <img
                      src={entry.src}
                      alt={entry.alt}
                      className="h-[170px] w-full object-cover transition duration-300 group-hover:scale-[1.03] sm:h-[180px]"
                    />
                  </button>
                ) : (
                  <div className="grid h-[170px] place-items-center rounded-[10px] border border-dashed border-line bg-card text-mute sm:h-[180px]">
                    <div className="text-center">
                      <ImageIcon size={24} className="mx-auto mb-[8px]" aria-hidden="true" />
                      <p className="font-raleway text-[12px] leading-[18px]">Dokumentasi belum tersedia</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {(item.demoHref || item.githubHref) && (
            <div className="mt-[20px] flex flex-wrap gap-[12px]">
              {item.demoHref ? (
                <a href={item.demoHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[8px] rounded-full bg-brand-gradient px-[16px] py-[10px] font-raleway text-[12px] font-semibold text-white">
                  <LinkIcon size={14} aria-hidden="true" />
                  Demo
                </a>
              ) : null}
              {item.githubHref ? (
                <a href={item.githubHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[8px] rounded-full border border-line bg-card px-[16px] py-[10px] font-raleway text-[12px] font-semibold text-ink">
                  <LinkIcon size={14} aria-hidden="true" />
                  GitHub
                </a>
              ) : null}
            </div>
          )}
        </section>

        <section className="mt-[24px]">
          <div className="rounded-[24px] border border-line/80 bg-card p-[20px] shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
            <h2 className="font-poppins text-[22px] leading-[30px] font-semibold text-ink">Hasil & pembelajaran</h2>
            <p className="mt-[12px] font-raleway text-[15px] leading-[28px] text-ink/80">{item.result}</p>
            <p className="mt-[12px] font-raleway text-[15px] leading-[28px] text-ink/80">{item.learnings}</p>
          </div>
        </section>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Lihat gambar dokumentasi">
          <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-[24px] border border-white/10 bg-slate-900 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.45)]">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 grid size-[34px] place-items-center rounded-full bg-slate-950/80 text-white transition hover:bg-slate-800"
              aria-label="Tutup gambar"
            >
              <X size={16} aria-hidden="true" />
            </button>
            <img src={selectedImage} alt={item.company} className="max-h-[80vh] max-w-[80vw] rounded-[18px] object-contain" />
          </div>
        </div>
      )}
    </SectionCard>
  );
}
