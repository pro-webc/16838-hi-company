type Props = {
  index: string;
  en: string;
  className?: string;
};

export default function SectionLabel({ index, en, className = '' }: Props) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="font-num text-[11px] tracking-[0.22em] uppercase text-accent tabular">no.{index}</span>
      <span className="block w-12 h-px bg-accent" />
      <span className="font-num text-[11px] tracking-[0.22em] uppercase text-sub">{en}</span>
    </div>
  );
}