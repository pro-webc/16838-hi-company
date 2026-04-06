import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import MidCta from '@/components/MidCta'

const DIFFERENTIATORS = [
  '総合的かつハイクオリティな管理で安心と快適を提供する体制',
  '定期的な技術研修とマナー研修を実施している',
  '技術と人格の両面で優れた人材育成を行っている',
  '各種品質管理を徹底している',
  '業務用エアコンを専門に扱い、再生品でも新品同様の品質を維持する',
  '部品交換やメンテナンスを実施し、単なる中古品販売に留まらない品質向上を図る',
  '飲食店リフォームや空調トラブルに対する高度な対応能力を持つ',
  '専門性と幅広い対応力により顧客のニーズに合わせた提案が可能',
  '2年～3年保証付き',
]

const SERVICES = [
  {
    no: '01',
    en: 'buyback',
    title: '業務用エアコン買取',
    body: '店舗閉鎖・移転・更新でお役御免となった業務用エアコンを、状態を細部まで確認したうえで査定し、現地調査と撤去・回収まで一貫して請け負います。再生可能な機体は自社で整備し直し、二度目の現場へ送り出します。',
  },
  {
    no: '02',
    en: 'sales',
    title: '業務用エアコン販売',
    body: '買い取った機体を分解整備し、消耗部品を交換し、性能試験を経たうえで再販します。新品同様の品質を担保しつつ、初期コストを大幅に抑えられるのが弊社の販売です。2年〜3年保証付き。',
  },
  {
    no: '03',
    en: 'installation',
    title: 'エアコン取付工事',
    body: '建設業・管工事の登録事業者として、室外機の設置・配管・電源接続・冷媒充填までを自社の職人が施工します。納品から取付、試運転までを同じチームで担い、工事品質に責任を持ちます。',
  },
  {
    no: '04',
    en: 'maintenance',
    title: '空調設備メンテナンス',
    body: '空調機器は導入後の維持管理で寿命が大きく変わります。定期点検・洗浄・部品交換・冷媒回収まで、フロン回収業者として登録された立場で適切に対応します。',
  },
]

export default function Page() {
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

        <div className="absolute bottom-14 md:bottom-24 left-6 md:left-20 max-w-[520px] md:max-w-[600px]">
          <p className="font-en text-[10px] md:text-[11px] tracking-[0.32em] text-ink/55">no.01 — air conditioning</p>
          <span className="hairline w-12 mt-3 mb-8 block" />
          <h1 className="font-serif text-[34px] md:text-[58px] leading-[1.18] text-ink font-light tracking-[0.02em]">
            空気を、<br />あつらえる。
          </h1>
          <p className="mt-8 md:mt-10 text-[13px] md:text-[15px] text-ink/75 leading-[2.0] max-w-[420px]">
            業務用エアコンの買取と販売を専門に。整備済み 2年〜3年保証付きで、店舗・施設の空調更新を支える株式会社Hi・companyです。
          </p>
          <span className="hairline w-full mt-10 mb-8 block" />
          <ul className="flex flex-col gap-5">
            <li>
              <Link href="/contact#line" className="link-reveal font-serif text-[14px] md:text-[16px] text-ink">
                LINEで相談する(無料・準備中につきフォーム経由)
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link-reveal font-serif text-[14px] md:text-[16px] text-ink">
                無料見積を依頼する(現地調査あり)
              </Link>
            </li>
            <li>
              <a href="tel:0364245947" className="link-reveal font-num text-[20px] md:text-[24px] text-ink">
                03-6424-5947
              </a>
              <span className="block mt-2 text-[11px] md:text-[12px] text-ash">平日9時〜18時</span>
            </li>
          </ul>
        </div>
      </section>

      {/* STATEMENT — narrow */}
      <section data-section="statement" aria-labelledby="statement-h" className="py-[120px] md:py-[160px] scroll-mt-20">
        <div className="max-w-[680px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="font-en text-[11px] tracking-[0.32em] text-ash">no.02 — statement</p>
            <span className="hairline w-12 mt-3 mb-12 block" />
            <h2 id="statement-h" className="font-serif text-[26px] md:text-[40px] leading-[1.45] text-ink mb-12">
              中古ではなく、<br className="md:hidden" />整備済みという考え方。
            </h2>
            <p className="text-[14px] md:text-[16px] text-ink/80 leading-[2.0]">
              業務用エアコンを潰す店舗から引き取り、自社で分解整備し、消耗部品を交換し、性能試験を経て新品同様の品質に戻したものだけを次の現場へ送り出す。これが弊社の基本姿勢です。安かろう悪かろうではなく、品質と施工の信頼を担保したうえで、初期コストを大幅に抑えられる選択肢として業務用エアコンの再生品を提案しています。
            </p>
            <p className="mt-10 text-[14px] md:text-[16px] text-ink/80 leading-[2.0]">
              一般家庭用は扱いません。業務用に特化することで、機種ごとの癖、設置環境ごとのトラブル、店舗・厨房・事務所それぞれの空調要件まで踏み込んだ提案ができます。飲食店リフォームや空調トラブルへの高度な対応能力も、弊社が業務用専門であるからこそ培われたものです。
            </p>
          </Reveal>
        </div>
      </section>

      {/* FOUR SERVICES — asymmetric editorial */}
      <section data-section="services" aria-labelledby="services-h" className="py-[160px] md:py-[240px] bg-[#F4EFE3] scroll-mt-20">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="md:grid md:grid-cols-12 md:gap-12 mb-24">
              <div className="md:col-span-5">
                <p className="font-en text-[11px] tracking-[0.32em] text-ash">no.03 — service</p>
                <span className="hairline w-12 mt-3 mb-8 block" />
                <h2 id="services-h" className="font-serif text-[28px] md:text-[44px] leading-[1.35] text-ink">
                  四つの仕事で、<br />現場の空気を支える。
                </h2>
              </div>
              <div className="md:col-span-6 md:col-start-7 md:pt-12">
                <p className="text-[14px] md:text-[16px] text-ink/75 leading-[2.0]">
                  業務用エアコン買取・業務用エアコン販売・エアコン取付工事・空調設備メンテナンス。仕入れから出荷、施工、その後の維持管理まで、ひとつの会社で完結できることが、再生品の品質を担保するうえでの条件だと考えています。
                </p>
              </div>
            </div>
          </Reveal>

          <ol className="flex flex-col">
            {SERVICES.map((s, i) => (
              <li key={s.no}>
                <Reveal>
                  <div className={`md:grid md:grid-cols-12 md:gap-10 py-16 md:py-24 ${i !== 0 ? 'border-t border-ink/15' : ''}`}>
                    <div className="md:col-span-3">
                      <p className="font-num text-[44px] md:text-[64px] text-ink leading-none">{s.no}</p>
                      <p className="font-en text-[11px] tracking-[0.3em] text-ash mt-4">— {s.en}</p>
                    </div>
                    <div className="md:col-span-9 mt-8 md:mt-2">
                      <h3 className="font-serif text-[22px] md:text-[30px] text-ink leading-[1.4]">{s.title}</h3>
                      <p className="mt-6 text-[13px] md:text-[16px] text-ink/75 leading-[2.0] max-w-[640px]">{s.body}</p>
                      <Link href="/service" className="link-reveal mt-8 inline-block font-en text-[12px] tracking-[0.22em] text-ink">
                        read on service
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DIFFERENTIATORS — single col, numbered */}
      <section data-section="differentiators" aria-labelledby="diff-h" className="py-[120px] md:py-[160px] scroll-mt-20">
        <div className="max-w-[820px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="font-en text-[11px] tracking-[0.32em] text-ash">no.04 — why us</p>
            <span className="hairline w-12 mt-3 mb-10 block" />
            <h2 id="diff-h" className="font-serif text-[26px] md:text-[40px] leading-[1.4] text-ink mb-16">
              選ばれている、<br className="md:hidden" />九つの理由。
            </h2>
          </Reveal>
          <ol className="flex flex-col">
            {DIFFERENTIATORS.map((d, i) => (
              <li key={i}>
                <Reveal delay={i * 40}>
                  <div className="grid grid-cols-12 gap-4 md:gap-8 py-8 border-t border-ink/15 last:border-b">
                    <div className="col-span-2 md:col-span-2">
                      <span className="font-num text-[18px] md:text-[22px] text-ink/80">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="col-span-10 md:col-span-10">
                      <p className="font-serif text-[14px] md:text-[18px] text-ink leading-[1.9]">{d}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TRUST NUMBERS — quiet numeric callout, large Outfit */}
      <section data-section="numbers" aria-labelledby="numbers-h" className="py-[160px] md:py-[240px] bg-ink text-paper scroll-mt-20">
        <div className="max-w-[920px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="font-en text-[11px] tracking-[0.32em] text-paper/55">no.05 — figures</p>
            <span className="block w-12 mt-3 mb-10 h-px bg-paper/30" />
            <h2 id="numbers-h" className="font-serif text-[26px] md:text-[40px] leading-[1.4] mb-20 font-light">
              数で書ける、品質の輪郭。
            </h2>
          </Reveal>

          <div className="flex flex-col gap-16 md:gap-20">
            <Reveal>
              <div className="grid grid-cols-12 gap-4 items-end border-b border-paper/15 pb-10">
                <div className="col-span-12 md:col-span-3">
                  <p className="font-en text-[10px] tracking-[0.3em] text-paper/55">established</p>
                </div>
                <div className="col-span-7 md:col-span-7">
                  <p className="font-num text-[64px] md:text-[120px] leading-none text-paper">2009</p>
                </div>
                <div className="col-span-5 md:col-span-2">
                  <p className="text-[12px] md:text-[14px] text-paper/70 font-serif">年3月23日設立</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="grid grid-cols-12 gap-4 items-end border-b border-paper/15 pb-10">
                <div className="col-span-12 md:col-span-3">
                  <p className="font-en text-[10px] tracking-[0.3em] text-paper/55">warranty</p>
                </div>
                <div className="col-span-7 md:col-span-7">
                  <p className="font-num text-[64px] md:text-[120px] leading-none text-paper">2–3</p>
                </div>
                <div className="col-span-5 md:col-span-2">
                  <p className="text-[12px] md:text-[14px] text-paper/70 font-serif">年保証付き</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="grid grid-cols-12 gap-4 items-end border-b border-paper/15 pb-10">
                <div className="col-span-12 md:col-span-3">
                  <p className="font-en text-[10px] tracking-[0.3em] text-paper/55">scope</p>
                </div>
                <div className="col-span-7 md:col-span-7">
                  <p className="font-num text-[64px] md:text-[120px] leading-none text-paper">04</p>
                </div>
                <div className="col-span-5 md:col-span-2">
                  <p className="text-[12px] md:text-[14px] text-paper/70 font-serif">分野で空調を担う</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="grid grid-cols-12 gap-4 items-end pb-2">
                <div className="col-span-12 md:col-span-3">
                  <p className="font-en text-[10px] tracking-[0.3em] text-paper/55">licensed</p>
                </div>
                <div className="col-span-7 md:col-span-7">
                  <p className="font-num text-[64px] md:text-[120px] leading-none text-paper">23+4</p>
                </div>
                <div className="col-span-5 md:col-span-2">
                  <p className="text-[12px] md:text-[14px] text-paper/70 font-serif">区＋川崎・横浜エリア</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <p className="mt-20 text-[13px] md:text-[15px] text-paper/65 leading-[2.0] max-w-[640px]">
              建設業・管工事登録事業者、高圧ガス販売事業届出済、フロン回収業者登録(東京・神奈川・千葉・埼玉)。病院・自治体・大手企業への納入や空調サービス提供の実績があります。
            </p>
          </Reveal>
        </div>
      </section>

      {/* MID CTA */}
      <MidCta />

      {/* SERVICE AREA */}
      <section data-section="area" aria-labelledby="area-h" className="py-[120px] md:py-[160px] scroll-mt-20">
        <div className="max-w-[820px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="font-en text-[11px] tracking-[0.32em] text-ash">no.06 — area</p>
            <span className="hairline w-12 mt-3 mb-10 block" />
            <h2 id="area-h" className="font-serif text-[26px] md:text-[40px] leading-[1.4] text-ink mb-12">
              現地まで、出向きます。
            </h2>
            <p className="text-[14px] md:text-[16px] text-ink/75 leading-[2.0] mb-16">
              業務用エアコンの買取・販売・取付・メンテナンスは、機体の状態と現場の条件を実際に確認しないと適正な見積りが出せません。下記エリアであれば、見積り無料・現地調査前提で伺います。
            </p>
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

      {/* FAQ TEASER */}
      <section data-section="faq_teaser" aria-labelledby="faq-teaser-h" className="py-[120px] md:py-[160px] bg-[#F4EFE3] scroll-mt-20">
        <div className="max-w-[820px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="font-en text-[11px] tracking-[0.32em] text-ash">no.07 — questions</p>
            <span className="hairline w-12 mt-3 mb-10 block" />
            <h2 id="faq-teaser-h" className="font-serif text-[26px] md:text-[40px] leading-[1.4] text-ink mb-10">
              中古という言葉に、<br className="md:hidden" />ためらいがある方へ。
            </h2>
            <p className="text-[14px] md:text-[16px] text-ink/75 leading-[2.0] mb-12">
              再生品の性能・寿命・保証・施工後の不具合対応など、業務用エアコンに特有の不安について、品質・保証・価格・施工の四つの観点でお答えしています。
            </p>
            <Link href="/faq" className="link-reveal font-serif text-[15px] md:text-[18px] text-ink">
              よくある質問を読む
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}