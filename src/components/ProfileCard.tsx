import { useState, type ReactNode } from "react";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "../data/portfolio";
import { asset } from "../lib/asset";
import { GithubIcon, LinkedinIcon } from "./Icons";

function Photo() {
  const [failed, setFailed] = useState(false);
  const initials = `${profile.firstName[0]}${profile.lastName[0]}`;

  return (
    <div className="relative h-[250px] w-[250px] overflow-visible">
      <div className="absolute left-1/2 top-[20px] h-[220px] w-[220px] -translate-x-1/2">
        <div className="absolute inset-0 z-0 rounded-[22px] bg-brand-gradient shadow-[0_18px_30px_rgba(37,99,235,0.18)]" />
        <div className="absolute inset-[10px] z-0 rounded-[20px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8),_rgba(191,219,254,0.7)_35%,_rgba(37,99,235,0.18)_100%)]" />

        {!failed ? (
          <div className="absolute inset-0 z-10 overflow-hidden rounded-[22px] ring-4 ring-white/70 shadow-[0_16px_30px_rgba(15,23,42,0.12)] transition-transform duration-300 hover:scale-[1.04]">
            <img
              src={asset(profile.photo)}
              alt={`Foto ${profile.firstName} ${profile.lastName}`}
              onError={() => setFailed(true)}
              className="h-full w-full scale-[1.12] object-cover object-center transition-transform duration-500 hover:scale-[1.22]"
            />
          </div>
        ) : (
          <div
            role="img"
            aria-label={`Foto ${profile.firstName} ${profile.lastName}`}
            className="absolute inset-0 z-10 grid place-items-center rounded-[22px] bg-brand-gradient font-poppins text-[56px] font-medium text-white shadow-[0_16px_30px_rgba(15,23,42,0.12)]"
          >
            {initials}
          </div>
        )}
      </div>
    </div>
  );
}

function Row({
  icon,
  label,
  tone,
  children,
}: {
  icon: ReactNode;
  label: string;
  tone: string;
  children: ReactNode;
}) {
  return (
    <li className="mb-[16px] flex w-[256px] max-w-full items-center gap-[12px] border-b border-line pb-[16px] last:mb-0 last:border-b-0">
      <span
        className={`grid size-[44px] shrink-0 place-items-center rounded-[12px] bg-soft ${tone} shadow-[inset_0_0_0_1px_rgba(15,23,42,0.02)]`}
      >
        {icon}
      </span>
      <span className="flex min-w-0 flex-col py-[5px] font-raleway text-[14px] font-semibold">
        <span className="leading-[15px] text-mute">{label}</span>
        <span className="mt-[5px] leading-[20px] break-all text-ink">
          {children}
        </span>
      </span>
    </li>
  );
}

const socialIcon = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
};

const socialColor = {
  linkedin: "text-[#0a66c2]",
  github: "text-ink",
};

export default function ProfileCard() {
  async function handleCvDownload(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    const cvUrl = asset(profile.cv);

    try {
      const response = await fetch(cvUrl, { cache: "no-store" });
      if (!response.ok) {
        window.open(cvUrl, "_blank", "noopener,noreferrer");
        return;
      }

      const contentType = response.headers.get("content-type") || "";
      const blob = await response.blob();
      const isPdf = contentType.includes("application/pdf") || blob.type.includes("application/pdf") || blob.size > 0;

      if (!isPdf) {
        window.open(cvUrl, "_blank", "noopener,noreferrer");
        return;
      }

      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = objectUrl;
      link.download = "CV-Rizka-Annisa.pdf";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(objectUrl);
    } catch {
      window.open(cvUrl, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <aside aria-label="Profil" className="lg:-mt-[8px] lg:self-stretch">
      <div className="relative z-20 mx-auto h-[250px] w-[250px] lg:mx-0 lg:ml-[92px]">
        <Photo />
      </div>

      <div className="relative z-0 -mt-[100px] flex min-h-[700px] w-full max-w-[400px] flex-col items-center rounded-[24px] border border-line/80 bg-card px-3 pt-[114px] pb-[66px] shadow-[0_8px_18px_rgba(15,23,42,0.04)] lg:max-w-none lg:h-[760px] lg:min-h-[760px] lg:self-stretch">
        <h2 className="mt-[18px] font-raleway text-[24px] leading-[30px] font-bold tracking-[-0.02em] text-ink">
          {profile.firstName} {profile.lastName}, {profile.credential}
        </h2>

        <p className="font-raleway text-[16px] leading-[40px] font-medium text-mute">
          {profile.role}
        </p>

        <ul className="mt-[6px] flex gap-[9px]">
          {profile.socials.map(({ id, label, href }) => {
            const Icon = socialIcon[id];

            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`grid h-[61px] w-[60px] place-items-center rounded-[12px] bg-soft ${socialColor[id]} shadow-[0_8px_18px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-card hover:shadow-[0_10px_20px_rgba(15,23,42,0.08)]`}
                >
                  <Icon className="size-[20px]" />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-[22px] flex min-h-[350px] w-full max-w-[350px] flex-col rounded-[22px] bg-page px-[18px] pt-[26px] pb-[20px] shadow-[inset_0_0_0_1px_rgba(15,23,42,0.02)]">
          <ul>
            {profile.phone && (
              <Row
                icon={<Phone size={24} aria-hidden="true" />}
                label="Telepon"
                tone="text-brand"
              >
                <a href={profile.phoneHref} target="_blank" rel="noopener noreferrer">
                  {profile.phone}
                </a>
              </Row>
            )}

            <Row
              icon={<Mail size={24} aria-hidden="true" />}
              label="Email"
              tone="text-amber"
            >
              <a href={`mailto:${profile.email}`} target="_blank" rel="noopener noreferrer">
                {profile.email}
              </a>
            </Row>

            <Row
              icon={<MapPin size={24} aria-hidden="true" />}
              label="Lokasi"
              tone="text-brand"
            >
              {profile.location}
            </Row>
          </ul>

          <a
            href={asset(profile.cv)}
            onClick={handleCvDownload}
            className="mt-[16px] mr-[18px] flex w-fit items-center gap-[10px] self-center rounded-[18px] bg-brand-gradient px-[20px] py-[10px] font-raleway text-[12px] leading-[20px] font-semibold text-[#f2f7fc] shadow-[0_10px_20px_rgba(37,99,235,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_24px_rgba(37,99,235,0.28)]"
          >
            <Download size={24} aria-hidden="true" />
            Unduh CV
          </a>
        </div>
      </div>
    </aside>
  );
}
