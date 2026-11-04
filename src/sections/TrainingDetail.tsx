import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, ImageIcon, Link as LinkIcon, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SectionCard from "../components/SectionCard";
import { trainingDetails } from "../data/portfolio";

const detailMap = new Map(trainingDetails.map((item) => [item.slug, item]));

export default function TrainingDetail() {
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

  const gallery = item.gallery.length > 0 ? item.gallery : [{ src: "", alt: "Dokumentasi kegiatan akan ditambahkan di kemudian hari." }];

  const scrollGallery = (direction: 1 | -1) => {
    const container = galleryRef.current;
    if (!container) return;

    const firstCard = container.querySelector<HTMLElement>("[data-gallery-item]");
    const cardWidth = firstCard ? firstCard.offsetWidth + 16 : 280;
    container.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <SectionCard labelledBy="training-detail-title" pad="wide">
      <div className="max-w-[980px]">
        <nav aria-label="Breadcrumb" className="mb-[20px] flex flex-wrap items-center gap-[8px] font-raleway text-[12px] leading-[18px] font-semibold text-mute">
          <Link to="/" className="hover:text-brand">Beranda</Link>
          <span>/</span>
          <Link to="/resume" className="hover:text-brand">Resume</Link>
          <span>/</span>
          <Link to="/resume" className="hover:text-brand">Pelatihan</Link>
          <span>/</span>
          <span className="text-ink">{item.title}</span>
        </nav>

        <div className="mb-[22px] flex flex-col gap-[14px] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-raleway text-[12px] leading-[16px] font-semibold uppercase tracking-[0.12em] text-mute">{item.period}</p>
            <h1 id="training-detail-title" className="mt-[8px] font-poppins text-[28px] leading-[36px] font-semibold tracking-[0.02em] text-ink sm:text-[36px] sm:leading-[44px]">
              {item.title}
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
              <p className="font-poppins text-[20px] leading-[28px] font-semibold text-ink">{item.organizer}</p>
              <p className="mt-[4px] font-raleway text-[14px] leading-[20px] text-mute">{item.program}</p>
            </div>
            <div className="flex flex-wrap gap-[8px] text-[12px] font-raleway text-mute">
              <span className="rounded-full bg-soft px-[10px] py-[5px]">{item.field}</span>
              <span className="rounded-full bg-soft px-[10px] py-[5px]">{item.focusTechnology}</span>
            </div>
          </div>

          <p className="mt-[18px] font-raleway text-[15px] leading-[28px] text-ink/80">{item.overview}</p>
        </div>

        <div className="mt-[24px] grid gap-[24px] lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-[24px] border border-line/80 bg-card p-[20px] shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
            <h2 className="font-poppins text-[22px] leading-[30px] font-semibold text-ink">Tentang program</h2>
            <p className="mt-[12px] font-raleway text-[15px] leading-[28px] text-ink/80">{item.learningObjectives}</p>
          </section>

          <aside className="rounded-[24px] border border-line/80 bg-soft/60 p-[20px] shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
            <h2 className="font-poppins text-[22px] leading-[30px] font-semibold text-ink">Fokus kompetensi</h2>
            <div className="mt-[14px] flex flex-wrap gap-[8px]">
              {item.competencyFocus.map((skill) => (
                <span key={skill} className="rounded-full border border-line bg-card px-[10px] py-[6px] font-raleway text-[12px] leading-[18px] font-semibold text-ink">
                  {skill}
                </span>
              ))}
            </div>
          </aside>
        </div>

        <section className="mt-[24px] rounded-[24px] border border-line/80 bg-card p-[20px] shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
          <h2 className="font-poppins text-[22px] leading-[30px] font-semibold text-ink">Materi pembelajaran</h2>
          <div className="mt-[18px] grid gap-[18px] md:grid-cols-2">
            {item.modules.map((module) => (
              <div key={module.name} className="rounded-[18px] border border-line/80 bg-soft/60 p-[16px]">
                <h3 className="font-poppins text-[18px] leading-[24px] font-semibold text-ink">{module.name}</h3>
                <p className="mt-[8px] font-raleway text-[14px] leading-[22px] text-ink/80">{module.description}</p>
                <div className="mt-[12px] flex flex-wrap gap-[8px]">
                  {module.tools.map((tool) => (
                    <span key={tool} className="rounded-full bg-card px-[8px] py-[5px] font-raleway text-[12px] font-semibold text-ink">
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="mt-[12px] font-raleway text-[13px] leading-[20px] text-mute">{module.outcome}</p>
              </div>
            ))}
          </div>
        </section>

        {item.projects.length > 0 && (
          <section className="mt-[24px] rounded-[24px] border border-line/80 bg-card p-[20px] shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
            <h2 className="font-poppins text-[22px] leading-[30px] font-semibold text-ink">Proyek dan hasil pembelajaran</h2>
            <div className="mt-[18px] grid gap-[18px]">
              {item.projects.map((project) => (
                <div key={project.name} className="rounded-[20px] border border-line/80 bg-soft/60 p-[18px]">
                  <div className="flex flex-col gap-[10px] sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-poppins text-[20px] leading-[28px] font-semibold text-ink">{project.name}</h3>
                      <p className="mt-[4px] font-raleway text-[13px] leading-[20px] text-mute">Peran: {project.role}</p>
                    </div>

                    {(project.repoHref || project.demoHref) && (
                      <div className="flex flex-wrap gap-[8px]">
                        {project.repoHref && (
                          <a href={project.repoHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-[6px] rounded-full border border-line bg-card px-[10px] py-[6px] font-raleway text-[12px] font-semibold text-ink">
                            <LinkIcon size={12} aria-hidden="true" />
                            Repo
                          </a>
                        )}
                        {project.demoHref && (
                          <a href={project.demoHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-[6px] rounded-full bg-brand-gradient px-[10px] py-[6px] font-raleway text-[12px] font-semibold text-white">
                            <ArrowUpRight size={12} aria-hidden="true" />
                            Demo
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="mt-[14px] space-y-[12px] font-raleway text-[14px] leading-[24px] text-ink/80">
                    <p><span className="font-semibold text-ink">Latar belakang:</span> {project.background}</p>
                    <p><span className="font-semibold text-ink">Tujuan:</span> {project.goal}</p>
                    <p><span className="font-semibold text-ink">Solusi:</span> {project.solution}</p>
                    <p><span className="font-semibold text-ink">Hasil:</span> {project.result}</p>
                  </div>

                  <div className="mt-[14px] flex flex-wrap gap-[8px]">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-line bg-card px-[8px] py-[5px] font-raleway text-[12px] font-semibold text-ink">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-[14px] list-disc space-y-[8px] pl-[20px] font-raleway text-[14px] leading-[22px] text-ink/80">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-[24px] rounded-[24px] border border-line/80 bg-card p-[20px] shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
          <div className="mb-[14px] flex items-center justify-between gap-[10px]">
            <h2 className="font-poppins text-[22px] leading-[30px] font-semibold text-ink">Dokumentasi dan referensi</h2>

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
        </section>

        {item.certificate && (
          <section className="mt-[24px] rounded-[24px] border border-line/80 bg-card p-[20px] shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
            <h2 className="font-poppins text-[22px] leading-[30px] font-semibold text-ink">Sertifikat</h2>
            <div className="mt-[18px] flex flex-col gap-[18px] rounded-[18px] border border-line/80 bg-soft/60 p-[18px] md:flex-row md:items-start md:justify-between">
              <div>
                <p className="font-poppins text-[18px] leading-[24px] font-semibold text-ink">{item.certificate.title}</p>
                <p className="mt-[6px] font-raleway text-[14px] leading-[20px] text-mute">{item.certificate.organizer}</p>
                <p className="mt-[4px] font-raleway text-[14px] leading-[20px] text-mute">{item.certificate.period}</p>
              </div>

              {item.certificate.href && (
                <a href={item.certificate.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-[8px] rounded-full bg-brand-gradient px-[14px] py-[9px] font-raleway text-[12px] font-semibold text-white">
                  <LinkIcon size={14} aria-hidden="true" />
                  Lihat Sertifikat
                </a>
              )}
            </div>
          </section>
        )}
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
            <img src={selectedImage} alt={item.title} className="max-h-[80vh] max-w-[80vw] rounded-[18px] object-contain" />
          </div>
        </div>
      )}
    </SectionCard>
  );
}
