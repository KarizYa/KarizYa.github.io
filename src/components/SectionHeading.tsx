interface SectionHeadingProps { id: string; title: string }

export default function SectionHeading({ id, title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-[24px] sm:gap-[32px]">
      <h1 id={id} className="py-[10px] font-poppins text-[28px] leading-[36px] font-semibold tracking-[0.02em] text-ink sm:text-[36px] sm:leading-[44px]">
        {title}
      </h1>
      <span aria-hidden="true" className="hidden h-[3px] w-[252px] max-w-[42%] flex-1 rounded-full bg-brand-gradient sm:block" />
    </div>
  );
}
