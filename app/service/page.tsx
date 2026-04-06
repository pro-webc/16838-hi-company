import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import MidCta from '@/components/MidCta'

const BUYBACK_FLOW = [
  ['1', 'お電話でヒアリングし概算見積書を提出'],
  ['2', '現地で見積調査～最終のお見積書を提出'],
  ['3', '工事日程のお打ち合わせ'],
  ['4', 'エアコンの撤去、回収工事'],
  ['5', '工事後、買取料金のお振込み'],
] as const

const SALES_FLOW = [
  ['1', 'お電話でヒアリングし概算見積書を提出'],
  ['2', '現地で見積調査～最終のお見積書を提出'],
  ['3', '納品日、工事日程のお打ち合わせ'],
  ['4', 'エアコン代金、工事代金のお支払い手続き'],
  ['5', 'ご入金確認後、エアコン納品、取付工事'],
] as const

export default function ServicePage() {
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
          <p className="font-en text-[10px] md:text-[11px] tracking-[0.32em] text-ink/55">no.02 — service</p>
          <span className="hairline w-12 mt-3 mb-8 block" />
          <h1 className="font-serif text-[34px] md:text-[58px] leading-[1.18] text-ink font-light">
            買って、整えて、<br />取付けて、守る。
          </h1>
          <p className="mt-8 md:mt-10 text-[13px] md:text-[15px] text-ink/75 leading-[2.0] max-w-[460px]">
            業務用エアコン買取・業務用エアコン販売・エアコン取付工事・空調設備メンテナンス。一社で完結する四つの仕事を、ひとつずつ説明します。
          </p>
        </div>
      </section>

      {/* SERVICE 01 — buyback */}
      <section data-section="buyback" aria-labelledby="buyback-h" className="py-[120px] md:py-[160px] scroll-mt-20">
        <div className="max-w-[760px] mx-auto px-6 md:px-12">
          <Reveal>
            <div className="flex items-baseline gap-6 mb-10">
              <span className="font-num text-[44px] md:text-[64px] text-ink leading-none">01</span>
              <span className="font-en text-[11px] tracking-[0.32em] text-ash">— buyback</span>
            </div>
            <span className="hairline w-12 block mb-10" />
            <h2 id="buyback-h" className="font-serif text-[26px] md:text-[40px] leading-[1.4] text-ink mb-10">
              業務用エアコン買取
            </h2>
            <p className="text-[14px] md:text-[16px] text-ink/80 leading-[2.0]">
              店舗閉鎖や移転、更新で役目を終えた業務用エアコンを引き取ります。電話・メール・LINEでのヒアリング後、現地調査を経て最終見積りを提示します。撤去・回収・処分まで自社で行うため、店舗オーナー様や設計事務所様の手間を最小限に抑えられます。
            </p>
            <p className="mt-8 text-[14px] md:text-[16px] text-ink/80 leading-[2.0]">
              フロン回収業者として正規に登録された立場で、冷媒の適切な回収まで責任を持って行います。再生可能な機体は弊社で整備し、二度目の現場へ送り出します。
            </p>
          </Reveal>
        </div>
      </section>

      {/* BUYBACK FLOW */}
      <section data-section="buyback_flow" aria-labelledby="buyback-flow-h" className="py-[120px] md:py-[240px] bg-[#F4EFE3] scroll-mt-20">
        <div className="max-w-[760px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="font-en text-[11px] tracking-[0.32em] text-ash">— buyback flow</p>
            <span className="hairline w-12 mt-3 mb-10 block" />
            <h2 id="buyback-flow-h" className="font-serif text-[24px] md:text-[36px] leading-[1.4] text-ink mb-12">
              エアコン買取の流れ
            </h2>
            <p className="text-[14px] md:text-[16px] text-ink/80 leading-[2.0] mb-16">
              まずは、お見積依頼を電話かメールでご連絡ください。
            </p>
          </Reveal>
          <ol className="flex flex-col">
            {BUYBACK_FLOW.map(([n, t], i) => (
              <li key={n}>
                <Reveal delay={i * 60}>
                  <div className="py-12 md:py-16 border-t border-ink/15 last:border-b grid grid-cols-12 gap-4 md:gap-10">
                    <div className="col-span-2">
                      <span className="font-num text-[36px] md:text-[56px] text-ink leading-none">{n}</span>
                    </div>
                    <div className="col-span-10">
                      <p className="font-serif text-[16px] md:text-[20px] text-ink leading-[1.7]">{t}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SERVICE 02 — sales */}
      <section data-section="sales" aria-labelledby="sales-h" className="py-[160px] md:py-[240px] scroll-mt-20">
        <div className="max-w-[760px] mx-auto px-6 md:px-12">
          <Reveal>
            <div className="flex items-baseline gap-6 mb-10">
              <span className="font-num text-[44px] md:text-[64px] text-ink leading-none">02</span>
              <span className="font-en text-[11px] tracking-[0.32em] text-ash">— sales</span>
            </div>
            <span className="hairline w-12 block mb-10" />
            <h2 id="sales-h" className="font-serif text-[26px] md:text-[40px] leading-[1.4] text-ink mb-10">
              業務用エアコン販売
            </h2>
            <p className="text-[14px] md:text-[16px] text-ink/80 leading-[2.0]">
              買い取った機体を自社で分解整備し、消耗部品を交換し、性能試験を経たうえで再販します。再生品でも新品同様の品質を維持することにこだわり、単なる中古品販売には留まらない品質向上を図っています。すべての販売機体に2年〜3年保証付き。見積り無料。
            </p>
            <p className="mt-8 text-[14px] md:text-[16px] text-ink/80 leading-[2.0]">
              「安かろう悪かろう」の業者と弊社の決定的な違いは、整備工程と保証の有無です。価格だけで決めると、設置直後の初期故障や、保証期間がないために泣き寝入りする事例が後を絶ちません。弊社は品質と施工の信頼を担保したうえで、もっとも費用対効果の良い選択肢として再生品をご提案します。
            </p>
          </Reveal>
        </div>
      </section>

      {/* SALES FLOW */}
      <section data-section="sales_flow" aria-labelledby="sales-flow-h" className="py-[120px] md:py-[160px] bg-[#F4EFE3] scroll-mt-20">
        <div className="max-w-[760px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="font-en text-[11px] tracking-[0.32em] text-ash">— sales flow</p>
            <span className="hairline w-12 mt-3 mb-10 block" />
            <h2 id="sales-flow-h" className="font-serif text-[24px] md:text-[36px] leading-[1.4] text-ink mb-12">
              エアコン販売・取付工事の流れ
            </h2>
            <p className="text-[14px] md:text-[16px] text-ink/80 leading-[2.0] mb-16">
              まずは、お見積依頼を電話かメールでご連絡ください。
            </p>
          </Reveal>
          <ol className="flex flex-col">
            {SALES_FLOW.map(([n, t], i) => (
              <li key={n}>
                <Reveal delay={i * 60}>
                  <div className="py-12 md:py-16 border-t border-ink/15 last:border-b grid grid-cols-12 gap-4 md:gap-10">
                    <div className="col-span-2">
                      <span className="font-num text-[36px] md:text-[56px] text-ink leading-none">{n}</span>
                    </div>
                    <div className="col-span-10">
                      <p className="font-serif text-[16px] md:text-[20px] text-ink leading-[1.7]">{t}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SERVICE 03 — installation */}
      <section data-section="installation" aria-labelledby="install-h" className="py-[160px] md:py-[240px] scroll-mt-20">
        <div className="max-w-[760px] mx-auto px-6 md:px-12">
          <Reveal>
            <div className="flex items-baseline gap-6 mb-10">
              <span className="font-num text-[44px] md:text-[64px] text-ink leading-none">03</span>
              <span className="font-en text-[11px] tracking-[0.32em] text-ash">— installation</span>
            </div>
            <span className="hairline w-12 block mb-10" />
            <h2 id="install-h" className="font-serif text-[26px] md:text-[40px] leading-[1.4] text-ink mb-10">
              エアコン取付工事
            </h2>
            <p className="text-[14px] md:text-[16px] text-ink/80 leading-[2.0]">
              建設業・管工事登録事業者(東京都知事許可〔般-4〕第155197号)として、室外機の据付・配管・電源接続・冷媒充填・試運転までを自社の職人が担います。販売した機体を、別会社へ施工を投げる業者と異なり、納品から取付までを同じチームが行うため、品質と責任の所在が一致します。
            </p>
            <p className="mt-8 text-[14px] md:text-[16px] text-ink/80 leading-[2.0]">
              飲食店リフォームや空調トラブルへの高度な対応能力を持ち、厨房・客席・事務所それぞれの環境に応じた配管経路や機種選定までご提案します。技術と人格の両面で優れた人材育成を行い、定期的な技術研修とマナー研修を実施しているため、現場での立ち振る舞いまでご安心ください。
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICE 04 — maintenance */}
      <section data-section="maintenance" aria-labelledby="maint-h" className="py-[120px] md:py-[160px] bg-ink text-paper scroll-mt-20">
        <div className="max-w-[760px] mx-auto px-6 md:px-12">
          <Reveal>
            <div className="flex items-baseline gap-6 mb-10">
              <span className="font-num text-[44px] md:text-[64px] text-paper leading-none">04</span>
              <span className="font-en text-[11px] tracking-[0.32em] text-paper/55">— maintenance</span>
            </div>
            <span className="block w-12 h-px bg-paper/30 mb-10" />
            <h2 id="maint-h" className="font-serif text-[26px] md:text-[40px] leading-[1.4] mb-10">
              空調設備メンテナンス
            </h2>
            <p className="text-[14px] md:text-[16px] text-paper/80 leading-[2.0]">
              業務用エアコンは、導入後の維持管理によって寿命が大きく変わります。定期点検・洗浄・部品交換・冷媒回収まで、フロン回収業者として登録された立場で対応します。総合的かつハイクオリティな管理で安心と快適を提供する体制を整え、各種品質管理を徹底しています。
            </p>
            <p className="mt-8 text-[14px] md:text-[16px] text-paper/80 leading-[2.0]">
              専門性と幅広い対応力により、お客様のニーズに合わせた提案が可能です。トラブル時の駆けつけから定期メンテナンス契約まで、必要な範囲でお選びいただけます。
            </p>
          </Reveal>
        </div>
      </section>

      <MidCta />
    </>
  )
}