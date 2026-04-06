import Link from 'next/link'

export default function MidCta({ note }: { note?: string }) {
  return (
    <section data-section="mid_cta" className="py-[120px] md:py-[160px]">
      <div className="max-w-[680px] mx-auto px-6 md:px-12">
        <p className="font-en text-[11px] tracking-[0.3em] text-ash">— next step</p>
        <span className="hairline w-12 mt-3 mb-10" />
        <h2 className="font-serif text-[24px] md:text-[34px] text-ink leading-[1.5]">
          見積りは、現地から。<br />相談だけでも、お気軽に。
        </h2>
        <p className="mt-8 text-[13px] md:text-[15px] text-ink/70 leading-[2.0]">
          {note ?? '業務用エアコンの買取・販売・取付・メンテナンスに関するご相談を承ります。2年〜3年保証付き、見積り無料、現地調査前提でお伺いします。'}
        </p>
        <span className="hairline w-full mt-12" />
        <div className="mt-10 flex flex-col gap-6">
          <Link href="/contact" className="link-reveal font-serif text-[15px] md:text-[17px] text-ink">
            無料見積を依頼する（現地調査あり）
          </Link>
          <Link href="/contact#line" className="link-reveal font-serif text-[15px] md:text-[17px] text-ink">
            LINEで相談する（無料・準備中につきフォーム経由）
          </Link>
          <a href="tel:0364245947" className="link-reveal font-num text-[20px] md:text-[24px] text-ink">
            03-6424-5947
          </a>
          <span className="text-[12px] md:text-[13px] text-ash">平日9時〜18時 / 株式会社Hi・company</span>
        </div>
      </div>
    </section>
  )
}