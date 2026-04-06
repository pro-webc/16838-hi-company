import Image from 'next/image'
import Reveal from '@/components/Reveal'
import MidCta from '@/components/MidCta'

const COMPANY = [
  ['会社名', '株式会社Hi・company'],
  ['代表者', '代表取締役 山下 逸人'],
  ['設立', '2009年3月23日'],
  ['所在地', '〒144-0052 東京都大田区蒲田1-4-19 クロスビルB1'],
  ['電話', '03-6424-5947'],
  ['メール', 'H.yamashita@hicompany.co.jp'],
  ['営業時間', '平日9時～18時'],
  ['事業内容', '業務用エアコン買取・業務用エアコン販売・エアコン取付工事・空調設備メンテナンス'],
] as const

const LICENSES = [
  {
    title: '建設業・管工事登録',
    body: '許可番号:東京都知事 許可（般-4）第155197号 / 種類:管工事業',
  },
  {
    title: '高圧ガス販売事業届',
    body: '東京都知事許可25 環政保冷第4031号',
  },
  {
    title: 'フロン回収業者登録',
    body: '東京都:13104534 / 神奈川県:第1-2325 / 千葉県:12A132752 / 埼玉県:19130945',
  },
] as const

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section data-section="hero" className="relative min-h-[550px] md:min-h-[750px] overflow-hidden">
        <Image src="/images/hero.svg" alt="" fill priority sizes="100vw" className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 grain opacity-70 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-24 right-6 md:right-16 text-right">
          <p className="font-en text-[11px] md:text-[12px] tracking-[0.32em] text-ink/60">since 2009</p>
          <span className="hairline w-12 ml-auto mt-3 block" />
        </div>
        <div className="absolute bottom-14 md:bottom-24 left-6 md:left-20 max-w-[600px]">
          <p className="font-en text-[10px] md:text-[11px] tracking-[0.32em] text-ink/55">no.03 — about</p>
          <span className="hairline w-12 mt-3 mb-8 block" />
          <h1 className="font-serif text-[34px] md:text-[58px] leading-[1.18] text-ink font-light">
            人と環境に、<br />やさしい空気を。
          </h1>
          <p className="mt-8 md:mt-10 text-[13px] md:text-[15px] text-ink/75 leading-[2.0] max-w-[460px]">
            業務用エアコンの売買と施工を通じて、店舗・施設のコストを抑えつつ高品質な空調を提供する。それが株式会社Hi・companyの仕事です。
          </p>
        </div>
      </section>

      {/* STORY */}
      <section data-section="story" aria-labelledby="story-h" className="py-[120px] md:py-[160px] scroll-mt-20">
        <div className="max-w-[680px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="font-en text-[11px] tracking-[0.32em] text-ash">— our stance</p>
            <span className="hairline w-12 mt-3 mb-10 block" />
            <h2 id="story-h" className="font-serif text-[26px] md:text-[40px] leading-[1.4] text-ink mb-12">
              信頼される空調を、<br className="md:hidden" />現場から。
            </h2>
            <p className="text-[14px] md:text-[16px] text-ink/80 leading-[2.0]">
              人や環境に優しい空間づくりを目指し、信頼される空調メンテナンスサービスを提供する。業務用エアコンの売買を通じてコストを抑えつつ高品質な製品を提供し、店舗や施設の運営に貢献する。信頼性のある専門知識で適切な商品提案を行う。これが弊社の存在理由です。
            </p>
            <p className="mt-10 text-[14px] md:text-[16px] text-ink/80 leading-[2.0]">
              業務用エアコンを専門に扱い、再生品でも新品同様の品質を維持する。部品交換やメンテナンスを実施し、単なる中古品販売に留まらない品質向上を図る。飲食店リフォームや空調トラブルに対する高度な対応能力を持ち、専門性と幅広い対応力により顧客のニーズに合わせた提案が可能です。
            </p>
          </Reveal>
        </div>
      </section>

      {/* REPRESENTATIVE */}
      <section data-section="representative" aria-labelledby="rep-h" className="py-[160px] md:py-[240px] bg-[#F4EFE3] scroll-mt-20">
        <div className="max-w-screen-lg mx-auto px-6 md:px-12">
          <Reveal>
            <div className="md:grid md:grid-cols-12 md:gap-12">
              <div className="md:col-span-4">
                <p className="font-en text-[11px] tracking-[0.32em] text-ash">— representative</p>
                <span className="hairline w-12 mt-3 mb-10 block" />
                <p className="font-en text-[11px] tracking-[0.22em] text-ash">CEO</p>
                <h2 id="rep-h" className="font-serif text-[28px] md:text-[40px] text-ink mt-4 leading-[1.3]">
                  山下 逸人
                </h2>
                <p className="font-en text-[12px] tracking-[0.18em] text-ash mt-4">Hayato Yamashita</p>
              </div>
              <div className="md:col-span-7 md:col-start-6 mt-12 md:mt-2">
                <p className="text-[14px] md:text-[16px] text-ink/80 leading-[2.0]">
                  業務用エアコンの世界では、価格の安さだけを訴求し、整備や保証を曖昧にしたまま中古機を流通させる業者が少なくありません。そういった「安かろう悪かろう」の落とし穴に陥らないためには、整備工程を持ち、施工までを自社で完結し、保証で品質を担保する事業者を選ぶ必要があります。弊社が業務用専門にこだわるのは、そのためです。
                </p>
                <p className="mt-8 text-[14px] md:text-[16px] text-ink/80 leading-[2.0]">
                  技術と人格の両面で優れた人材育成を行い、定期的な技術研修とマナー研修を実施しています。総合的かつハイクオリティな管理で、安心と快適を提供する体制を整えています。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section data-section="overview" aria-labelledby="ov-h" className="py-[120px] md:py-[160px] scroll-mt-20">
        <div className="max-w-[820px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="font-en text-[11px] tracking-[0.32em] text-ash">— company</p>
            <span className="hairline w-12 mt-3 mb-10 block" />
            <h2 id="ov-h" className="font-serif text-[26px] md:text-[40px] leading-[1.4] text-ink mb-16">
              会社概要
            </h2>
          </Reveal>
          <dl className="flex flex-col">
            {COMPANY.map(([k, v]) => (
              <div key={k} className="grid grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 border-t border-ink/15 last:border-b">
                <dt className="col-span-12 md:col-span-3 font-en text-[11px] tracking-[0.22em] text-ash uppercase">
                  {k}
                </dt>
                <dd className="col-span-12 md:col-span-9 text-[14px] md:text-[16px] text-ink leading-[1.9]">
                  {k === '電話' ? (
                    <a href="tel:0364245947" className="font-num text-[18px] md:text-[20px] link-reveal">
                      03-6424-5947
                    </a>
                  ) : k === 'メール' ? (
                    <a href="mailto:H.yamashita@hicompany.co.jp" className="link-reveal break-all">
                      H.yamashita@hicompany.co.jp
                    </a>
                  ) : (
                    v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* LICENSES */}
      <section data-section="licenses" aria-labelledby="lic-h" className="py-[160px] md:py-[240px] bg-ink text-paper scroll-mt-20">
        <div className="max-w-[820px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="font-en text-[11px] tracking-[0.32em] text-paper/55">— licenses</p>
            <span className="block w-12 h-px bg-paper/30 mt-3 mb-10" />
            <h2 id="lic-h" className="font-serif text-[26px] md:text-[40px] leading-[1.4] mb-16">
              許認可・登録
            </h2>
          </Reveal>
          <ol className="flex flex-col">
            {LICENSES.map((l, i) => (
              <li key={l.title}>
                <Reveal delay={i * 80}>
                  <div className="py-10 md:py-14 border-t border-paper/15 last:border-b grid grid-cols-12 gap-4 md:gap-10">
                    <div className="col-span-2">
                      <span className="font-num text-[20px] md:text-[28px] text-paper/60">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="col-span-10">
                      <h3 className="font-serif text-[18px] md:text-[22px] mb-4 leading-[1.5]">{l.title}</h3>
                      <p className="text-[13px] md:text-[15px] text-paper/75 leading-[1.9] font-num tracking-wide">
                        {l.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section data-section="area" aria-labelledby="area2-h" className="py-[120px] md:py-[160px] scroll-mt-20">
        <div className="max-w-[820px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="font-en text-[11px] tracking-[0.32em] text-ash">— area</p>
            <span className="hairline w-12 mt-3 mb-10 block" />
            <h2 id="area2-h" className="font-serif text-[26px] md:text-[40px] leading-[1.4] text-ink mb-12">
              対応エリア
            </h2>
            <ul className="flex flex-col">
              {[
                '東京23区',
                '神奈川県川崎市全域',
                '横浜市港北区',
                '横浜市都筑区',
                '横浜市鶴見区',
              ].map((a, i) => (
                <li key={a} className="grid grid-cols-12 gap-4 py-6 border-t border-ink/15 last:border-b">
                  <span className="col-span-2 font-num text-[14px] md:text-[16px] text-ash">{String(i + 1).padStart(2, '0')}</span>
                  <span className="col-span-10 font-serif text-[14px] md:text-[18px] text-ink">{a}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <MidCta />
    </>
  )
}