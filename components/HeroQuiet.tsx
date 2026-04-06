import Image from 'next/image';

type Props = {
  no: string;
  kanji: string;
  english: string;
  lead?: string;
  bgSrc: string;
};

export default function HeroQuiet({ no, kanji, english, lead, bgSrc }: Props) {
  return (
    <section
      data-section="hero"
      aria-labelledby="hero-h"
      className="relative bg-paper min-h-[550px] md:min-h-[750px] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-[60%] bg-paper z-10" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-[55%]">
          <Image
            src={bgSrc}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom opacity-90"
          />
        </div>
        <div className="absolute inset-x-0 top-[55%] h-24 bg-gradient-to-b from-paper to-transparent z-10" aria-hidden="true" />
      </div>

      <div className="relative z-20 mx-auto max-w-[1400px] px-6 md:px-12 h-full">
        <div className="pt-28 md:pt-40 grid md:grid-cols-12 gap-6">
          <div className="md:col-span-1 md:col-start-1">
            <span className="eng text-[11px] text-ink-300">{no}</span>
          </div>
        </div>

        <div className="absolute left-6 md:left-24 bottom-[120px] md:bottom-[140px] max-w-[520px]">
          <div className="w-12 h-px hairline mb-8" aria-hidden="true" />
          <p className="eng text-[12px] text-ink-500 mb-6">{english}</p>
          <h1 id="hero-h" className="text-[56px] md:text-[88px] leading-[1.05] tracking-tight text-ink-900 font-normal">
            {kanji}
          </h1>
          {lead && (
            <p className="mt-8 text-[14px] md:text-[16px] text-ink-700 max-w-[420px]">{lead}</p>
          )}
        </div>
      </div>
    </section>
  );
}