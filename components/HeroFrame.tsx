import Image from 'next/image'

type Props = {
  no: string
  label: string
  catch1: string
  catch2?: string
  lead: string
  imgSrc: string
}

export function HeroFrame({ no, label, catch1, catch2, lead, imgSrc }: Props) {
  return (
    <section
      data-section="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[550px] md:min-h-[750px] flex items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={imgSrc}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute top-10 right-6 md:top-14 md:right-12">
        <p className="font-outfit font-light text-[12px] md:text-[14px] tracking-[0.32em] text-mute tnum">since 2009</p>
      </div>
      <div className="relative w-full max-w-screen-xl mx-auto px-6 md:px-12 pb-16 md:pb-28">
        <div className="md:max-w-xl">
          <div className="flex items-center gap-5 mb-8 md:mb-10">
            <span className="font-outfit font-light text-[12px] md:text-[14px] tracking-[0.32em] text-mute tnum">no.{no}</span>
            <span className="block w-16 h-px bg-ink/50" aria-hidden="true"></span>
            <span className="font-outfit font-light text-[12px] md:text-[14px] tracking-[0.32em] text-mute">{label}</span>
          </div>
          <h1
            id="hero-heading"
            className="font-serif font-light text-[32px] md:text-[48px] leading-[1.45] tracking-tight text-ink"
          >
            {catch1}
            {catch2 && (
              <>
                <br />
                {catch2}
              </>
            )}
          </h1>
          <p className="mt-10 md:mt-12 text-[14px] md:text-[16px] leading-[2] text-ink/75 max-w-md">
            {lead}
          </p>
        </div>
      </div>
    </section>
  )
}