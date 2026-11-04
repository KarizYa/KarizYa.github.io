import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Code2,
  GraduationCap,
  Newspaper,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionCard from "../components/SectionCard";
import SectionHeading from "../components/SectionHeading";
import {
  education,
  experiences,
  organizations,
  publications,
  softSkills,
  technicalSkills,
  training,
} from "../data/portfolio";

function SectionShell({ title, icon: Icon, children }: { title: string; icon: LucideIcon; children: React.ReactNode }) {
  return (
    <section className="rounded-[22px] border border-line/80 bg-card p-[18px] shadow-[0_12px_24px_rgba(15,23,42,0.04)] sm:p-[22px]">
      <div className="mb-[18px] flex items-center gap-[12px]">
        <span className="grid size-[40px] place-items-center rounded-[12px] bg-soft text-brand shadow-[inset_0_0_0_1px_rgba(15,23,42,0.02)]">
          <Icon size={18} aria-hidden="true" />
        </span>
        <h2 className="font-poppins text-[20px] leading-[28px] font-semibold tracking-[0.02em] text-ink sm:text-[24px]">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function Resume() {
  return (
    <SectionCard labelledBy="resume-title" pad="none">
      <div className="px-5 pb-8 sm:px-[72px]">
        <SectionHeading id="resume-title" title="Resume" />

        <div className="mt-[22px] space-y-[22px]">
          <SectionShell title="Pendidikan" icon={GraduationCap}>
            <div className="rounded-[18px] border border-line/80 bg-soft/70 p-[18px]">
              <div className="flex flex-col gap-[6px] sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-poppins text-[16px] leading-[20px] font-semibold text-ink">{education[0].title}</p>
                  <p className="mt-[4px] font-raleway text-[14px] leading-[20px] text-mute">{education[0].place}</p>
                </div>
                <span className="inline-flex w-fit rounded-full bg-card px-[10px] py-[5px] font-raleway text-[12px] font-semibold text-brand">
                  {education[0].period}
                </span>
              </div>
            </div>
          </SectionShell>

          <SectionShell title="Pengalaman Kerja" icon={BriefcaseBusiness}>
            <ol className="relative space-y-[18px] before:absolute before:bottom-0 before:left-[10px] before:top-2 before:w-px before:bg-line">
              {experiences.map((item) => (
                <li key={`${item.period}-${item.company}`} className="relative pl-[34px]">
                  <span className="absolute left-0 top-[10px] block size-[22px] rounded-full border-[5px] border-brand bg-white shadow-[0_0_0_4px_rgba(37,99,235,0.08)]" aria-hidden="true" />
                  <div className="rounded-[18px] border border-line/80 bg-soft/60 p-[16px]">
                    <div className="flex items-start justify-between gap-[12px]">
                      <div className="flex-1">
                        <p className="font-raleway text-[12px] leading-[16px] font-semibold uppercase tracking-[0.12em] text-mute">{item.period}</p>
                        <h3 className="mt-[6px] font-poppins text-[18px] leading-[24px] font-semibold text-ink">{item.role}</h3>
                        <p className="mt-[3px] font-raleway text-[14px] leading-[20px] text-ink">
                          {item.company}
                          {item.location ? <span className="text-mute"> • {item.location}</span> : null}
                        </p>
                      </div>

                      <Link
                        to={`/resume/pengalaman/${item.slug}`}
                        className="inline-flex items-center gap-[6px] pt-[2px] font-raleway text-[10px] font-semibold uppercase tracking-[0.08em] text-brand hover:text-brand/80"
                      >
                        Detail
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </Link>
                    </div>

                    <ul className="mt-[12px] list-disc space-y-[8px] pl-[18px] font-raleway text-[13px] leading-[20px] text-ink/80">
                      {item.points?.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </SectionShell>

          <SectionShell title="Pelatihan" icon={Award}>
            {training.map((item) => (
              <div key={item.title} className="rounded-[18px] border border-line/80 bg-soft/70 p-[18px]">
                <div className="flex flex-col gap-[8px] sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <p className="font-poppins text-[16px] leading-[22px] font-semibold text-ink">{item.title}</p>
                    <p className="mt-[4px] font-raleway text-[14px] leading-[20px] text-mute">{item.organizer} • {item.program}</p>
                    <p className="mt-[4px] font-raleway text-[12px] leading-[18px] font-semibold uppercase tracking-[0.08em] text-mute">{item.period}</p>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    {item.slug ? (
                      <Link
                        to={`/resume/pelatihan/${item.slug}`}
                        className="inline-flex items-center gap-[6px] font-raleway text-[10px] font-semibold uppercase tracking-[0.08em] text-brand hover:text-brand/80"
                      >
                        Detail
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </Link>
                    ) : null}
                  </div>
                </div>
                <p className="mt-[12px] font-raleway text-[14px] leading-[22px] text-ink/80">{item.description}</p>
              </div>
            ))}
          </SectionShell>

          <SectionShell title="Publikasi Ilmiah" icon={Newspaper}>
            <div className="rounded-[22px] border border-line/80 bg-soft/60 p-[16px] shadow-[0_10px_18px_rgba(15,23,42,0.04)] sm:p-[20px]">
              <div className="flex flex-col gap-[12px] sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-[10px]">
                  <span className="grid size-[34px] place-items-center rounded-[10px] bg-card text-brand shadow-[inset_0_0_0_1px_rgba(15,23,42,0.04)]">
                    <BookOpen size={16} aria-hidden="true" />
                  </span>
                  <span className="font-raleway text-[11px] font-semibold uppercase tracking-[0.12em] text-mute">Publikasi Ilmiah</span>
                </div>
                {publications[0].href ? (
                  <a
                    href={publications[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center justify-center gap-[6px] rounded-full bg-brand-gradient px-[12px] py-[7px] font-raleway text-[11px] font-semibold text-white shadow-[0_10px_20px_rgba(37,99,235,0.18)] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_14px_24px_rgba(37,99,235,0.24)] hover:brightness-[1.04]"
                  >
                    <BookOpen size={12} aria-hidden="true" />
                    Lihat Jurnal
                  </a>
                ) : null}
              </div>

              <div className="mt-[16px]">
                <p className="font-poppins text-[18px] leading-[26px] font-semibold text-ink sm:text-[20px]">{publications[0].title}</p>
                <p className="mt-[8px] font-raleway text-[14px] leading-[22px] text-mute">{publications[0].authors}</p>
              </div>

              <div className="mt-[14px] flex flex-wrap items-center gap-x-[10px] gap-y-[6px] text-[12px] leading-[18px] text-mute">
                <span className="rounded-full bg-card px-[8px] py-[4px] font-medium">{publications[0].journal}</span>
                <span>•</span>
                <span>{publications[0].volume}</span>
                <span>{publications[0].issue}</span>
                <span>{publications[0].year}</span>
                <span>•</span>
                <span>{publications[0].pages}</span>
              </div>

              <div className="mt-[14px] grid gap-[8px] rounded-[14px] border border-line/80 bg-card/70 p-[12px] sm:grid-cols-2">
                <div className="flex flex-col gap-[4px]">
                  <span className="font-raleway text-[11px] font-semibold uppercase tracking-[0.08em] text-mute">Tanggal Terbit</span>
                  <span className="font-raleway text-[13px] text-ink">{publications[0].date}</span>
                </div>
                {publications[0].doi ? (
                  <div className="flex flex-col gap-[4px]">
                    <span className="font-raleway text-[11px] font-semibold uppercase tracking-[0.08em] text-mute">DOI</span>
                    <a href={`https://doi.org/${publications[0].doi}`} target="_blank" rel="noopener noreferrer" className="break-all font-raleway text-[13px] text-brand hover:text-brand/80">
                      {publications[0].doi}
                    </a>
                  </div>
                ) : null}
              </div>

              <p className="mt-[16px] font-raleway text-[14px] leading-[24px] text-ink/80">{publications[0].summary}</p>
            </div>
          </SectionShell>

          <SectionShell title="Keahlian Teknis" icon={Code2}>
            <div className="grid gap-[16px] md:grid-cols-2">
              {technicalSkills.map((group) => (
                <div key={group.title} className="rounded-[18px] border border-line/80 bg-soft/60 p-[16px]">
                  <h3 className="font-poppins text-[16px] leading-[22px] font-semibold text-ink">{group.title}</h3>
                  <div className="mt-[12px] flex flex-wrap gap-[8px]">
                    {group.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-line bg-card px-[10px] py-[5px] font-raleway text-[12px] leading-[18px] font-medium text-ink">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionShell>

          <SectionShell title="Organisasi" icon={Users}>
            <div className="space-y-[14px]">
              {organizations.map((org) => (
                <div key={`${org.title}-${org.role}`} className="rounded-[18px] border border-line/80 bg-soft/60 p-[16px]">
                  <div className="flex flex-col gap-[8px] sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="font-poppins text-[16px] leading-[22px] font-semibold text-ink">{org.title}</p>
                      <p className="mt-[4px] font-raleway text-[14px] leading-[20px] text-mute">{org.role}</p>
                    </div>
                    <span className="inline-flex w-fit rounded-full bg-card px-[10px] py-[5px] font-raleway text-[12px] font-semibold text-brand">
                      {org.period}
                    </span>
                  </div>
                  {org.description ? <p className="mt-[10px] font-raleway text-[14px] leading-[22px] text-ink/80">{org.description}</p> : null}
                </div>
              ))}
            </div>
          </SectionShell>

          <SectionShell title="Soft Skills" icon={Sparkles}>
            <div className="grid gap-[12px] sm:grid-cols-2 lg:grid-cols-4">
              {softSkills.map((skill) => (
                <div key={skill} className="flex items-center gap-[10px] rounded-[14px] border border-line/80 bg-soft/60 px-[12px] py-[10px]">
                  <span className="grid size-[24px] place-items-center rounded-full bg-brand/10 text-brand">
                    <Check size={14} aria-hidden="true" />
                  </span>
                  <span className="font-raleway text-[13px] leading-[18px] font-semibold text-ink">{skill}</span>
                </div>
              ))}
            </div>
          </SectionShell>
        </div>
      </div>
    </SectionCard>
  );
}
