import { useState, type FormEvent } from "react";
import { Mail, Phone, ArrowUpRight, Award } from "lucide-react";
import SectionCard from "../components/SectionCard";
import SectionHeading from "../components/SectionHeading";
import { certificates, profile } from "../data/portfolio";
import { asset } from "../lib/asset";

function Field({ id, label, type = "text", multiline = false, value, onChange }: { id: string; label: string; type?: string; multiline?: boolean; value: string; onChange: (v: string) => void }) {
  const shared = "min-w-0 flex-1 resize-none bg-transparent font-raleway text-[16px] leading-[20px] text-ink outline-none";
  return (
    <div className="mt-[21px] flex items-start gap-2 border-b-2 border-line pb-[19px] focus-within:border-brand">
      <label htmlFor={id} className="font-raleway text-[16px] leading-[20px] font-semibold tracking-[0.4px] text-ink">
        {label}:
      </label>
      {multiline ? (
        <textarea id={id} name={id} rows={1} required value={value} onChange={(e) => onChange(e.target.value)} className={shared} />
      ) : (
        <input id={id} name={id} type={type} required value={value} onChange={(e) => onChange(e.target.value)} className={shared} />
      )}
    </div>
  );
}

export default function Contact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Pesan dari ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${from}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <SectionCard labelledBy="contact-title" pad="narrow">
      <div className="sm:px-[24px]">
        <SectionHeading id="contact-title" title="Kontak" />
      </div>

      <div className="mt-[18px] grid gap-[18px] xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-[18px]">
          <div className="grid gap-[18px] sm:grid-cols-2">
            {profile.phone && (
              <div className="flex min-h-[150px] gap-[10px] rounded-[20px] bg-peach-2 px-[26px] pt-[22px] pb-4">
                <Phone size={24} className="mt-[8px] shrink-0 text-brand" aria-hidden="true" />
                <div className="font-poppins font-medium">
                  <h2 className="text-[16px] leading-[40px] tracking-[0.5px] text-ink">Telepon:</h2>
                  <a href={profile.phoneHref} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] tracking-[0.35px] text-ink">
                    {profile.phone}
                  </a>
                </div>
              </div>
            )}
            <div className="flex min-h-[150px] gap-[10px] rounded-[20px] bg-soft px-[14px] pt-[22px] pb-4">
              <Mail size={24} className="mt-[8px] shrink-0 text-brand" aria-hidden="true" />
              <div className="min-w-0 font-poppins font-medium">
                <h2 className="text-[16px] leading-[40px] tracking-[0.35px] text-ink">Email:</h2>
                <a href={`mailto:${profile.email}`} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] tracking-[0.35px] break-all text-ink">
                  {profile.email}
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="rounded-[20px] bg-panel px-5 pt-[29px] pb-8 sm:px-[39px]">
            <p className="p-[10px] font-raleway text-[16px] leading-[30px] tracking-[0.4px] text-ink">
              Saya terbuka untuk membahas <strong>peluang kerja</strong>, <strong>proyek</strong>, <strong>kolaborasi</strong>, dan <strong>diskusi seputar teknologi</strong>.
            </p>
            <Field id="name" label="Nama" value={name} onChange={setName} />
            <Field id="email" label="Email" type="email" value={from} onChange={setFrom} />
            <Field id="message" label="Pesan" multiline value={message} onChange={setMessage} />
            <button type="submit" className="mt-[24px] cursor-pointer rounded-[20px] border border-[#fd8a18] bg-transparent px-[30px] py-[10px] font-raleway text-[12px] leading-[20px] font-semibold text-ink">
              Kirim
            </button>
          </form>
        </div>

        <div className="rounded-[24px] border border-line/80 bg-panel p-[18px] shadow-[0_16px_28px_rgba(15,23,42,0.04)]">
          <div className="mb-[18px] flex items-center gap-[10px]">
            <div className="grid size-[36px] place-items-center rounded-full bg-brand-gradient text-white shadow-[0_12px_20px_rgba(37,99,235,0.2)]">
              <Award size={18} aria-hidden="true" />
            </div>
            <h2 className="font-poppins text-[18px] leading-[26px] font-semibold text-ink">Sertifikat & Penghargaan</h2>
          </div>

          <div className="grid gap-[14px]">
            {certificates.map((item) => (
              <div key={item.title} className="rounded-[18px] border border-line/80 bg-card p-[12px] transition-transform duration-200 hover:-translate-y-0.5">
                <div className="flex items-start gap-[12px]">
                  <img
                    src={asset(item.image ?? "images/Rizka Annisa KTA.png")}
                    alt={item.title}
                    className="h-[96px] w-[130px] rounded-[12px] object-cover shadow-[0_10px_20px_rgba(15,23,42,0.08)]"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-poppins text-[14px] leading-[20px] font-semibold text-ink">{item.title}</p>
                    <p className="mt-[4px] font-raleway text-[12px] leading-[18px] text-mute">{item.organizer}</p>
                    <p className="mt-[2px] font-raleway text-[12px] leading-[18px] text-mute">{item.year}</p>
                    <p className="mt-[6px] font-raleway text-[12px] leading-[18px] text-mute">{item.description}</p>
                    {item.href && (
                      <a href={item.href} target="_blank" rel="noreferrer" className="mt-[8px] inline-flex items-center gap-[6px] font-raleway text-[12px] font-semibold text-brand">
                        Lihat detail
                        <ArrowUpRight size={12} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
