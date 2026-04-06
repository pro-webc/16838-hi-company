'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Plus as PlusIcon, Minus as MinusIcon } from 'lucide-react'

type QA = { q: string; a: string }

const QUALITY: QA[] = [
  {
    q: '中古のエアコンの性能は、新品に比べて劣りませんか?',
    a: '弊社の販売機体は、買取後に自社で分解整備し、消耗部品を交換し、性能試験を経たうえで出荷しています。再生品でも新品同様の品質を維持することにこだわっており、単なる中古品販売とは異なる工程を経ています。整備工程を経ないままの中古とは、別物とお考えください。',
  },
  {
    q: '見た目はきれいでも、内部の汚れや劣化が心配です。',
    a: '外装の清掃だけでなく、熱交換器・送風ファン・ドレンパン・電装部品まで分解して洗浄・点検しています。再販に値しない機体は仕入れ時点で除外しており、流通させているのは整備で新品同様に戻せたものだけです。',
  },
  {
    q: '取扱機種に制限はありますか?',
    a: '業務用エアコンに特化しており、一般家庭用は扱いません。業務用に絞ることで、機種ごとの癖や設置環境ごとのトラブルに精通した提案ができます。具体的な機種についてはお問い合わせください。',
  },
]

const WARRANTY: QA[] = [
  {
    q: '保証期間はどのくらいですか?',
    a: 'すべての販売機体に2年～3年保証付きでお渡ししています。機種・設置条件によって保証範囲が変わる場合があるため、見積り時に書面でお伝えします。',
  },
  {
    q: '購入後すぐに故障した場合、どうなりますか?',
    a: '保証期間内の不具合については、原則として弊社が責任を持って対応します。納品から取付までを自社の職人で完結しているため、責任の所在が一致しているのが弊社の強みです。',
  },
  {
    q: '保証の適用外になるケースはありますか?',
    a: '使用環境に起因する明らかな過負荷運転、第三者による分解・改造、災害による損傷などは保証適用外となります。詳細な適用条件は契約書面でご確認いただけます。',
  },
]

const PRICE: QA[] = [
  {
    q: '見積りは有料ですか?',
    a: '見積り無料です。電話・メールでのヒアリング後に概算をお伝えし、その後の現地調査を経て最終のお見積書を提出します。現地調査も無料です。',
  },
  {
    q: '激安業者と何が違いますか?',
    a: '弊社は最安・激安業者ではありません。品質が担保されており、設置工事の信頼性がある業者の中で最安値という立ち位置です。安価な業者の見積書に書かれていない保証期間・施工責任・冷媒回収費用まで含めて比較されることをお勧めします。',
  },
  {
    q: '支払い方法を教えてください。',
    a: 'エアコン代金・工事代金は、現地調査後の最終お見積書をもとに、納品前のお支払い手続きとなります。詳細はお問い合わせ時にご案内します。',
  },
]

const INSTALL: QA[] = [
  {
    q: '対応エリアを教えてください。',
    a: '東京23区、神奈川県川崎市全域、横浜市港北区、横浜市都筑区、横浜市鶴見区を中心に対応しています。',
  },
  {
    q: '取付工事だけの依頼も可能ですか?',
    a: '可能です。建設業・管工事登録事業者(東京都知事 許可〔般-4〕第155197号)として、室外機の据付・配管・電源接続・冷媒充填・試運転までを自社の職人が施工します。',
  },
  {
    q: '工事後に不具合が出たら、どこに連絡すればよいですか?',
    a: '弊社へ直接ご連絡ください。03-6424-5947(平日9時～18時)、もしくはメールH.yamashita@hicompany.co.jpで承ります。納品から取付までを同じチームで担っているため、原因の切り分けも迅速です。',
  },
  {
    q: '撤去・回収する古いエアコンの処分はどうなりますか?',
    a: 'フロン回収業者(東京都:13104534、神奈川県:第1-2325、千葉県:12A132752、埼玉県:19130945)として、冷媒の適切な回収まで責任を持って行います。再生可能な機体は買い取りの対象になります。',
  },
]

function Accordion({ items, idPrefix }: { items: QA[]; idPrefix: string }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <ul className="flex flex-col">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <li key={i} className="border-t border-ink/15 last:border-b">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`${idPrefix}-${i}`}
              className="w-full text-left py-8 md:py-10 grid grid-cols-12 gap-4 md:gap-8 items-start motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
            >
              <span className="col-span-1 font-num text-[16px] md:text-[20px] text-ink/60 mt-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="col-span-10 font-serif text-[15px] md:text-[20px] text-ink leading-[1.7]">
                {it.q}
              </span>
              <span className="col-span-1 flex justify-end mt-1 text-ink/70">
                {isOpen ? <MinusIcon size={18} aria-hidden="true" /> : <PlusIcon size={18} aria-hidden="true" />}
              </span>
            </button>
            {isOpen && (
              <div id={`${idPrefix}-${i}`} className="grid grid-cols-12 gap-4 md:gap-8 pb-12">
                <span className="col-span-1" />
                <p className="col-span-10 text-[13px] md:text-[15px] text-ink/75 leading-[2.0]">{it.a}</p>
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}

const CATEGORIES = [
  { id: 'quality-faq', no: '01', label: '品質', en: 'quality' },
  { id: 'warranty-faq', no: '02', label: '保証', en: 'warranty' },
  { id: 'price-faq', no: '03', label: '価格', en: 'price' },
  { id: 'installation-faq', no: '04', label: '施工', en: 'installation' },
]

export default function FaqPage() {
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
          <p className="font-en text-[10px] md:text-[11px] tracking-[0.32em] text-ink/55">no.04 — faq</p>
          <span className="hairline w-12 mt-3 mb-8 block" />
          <h1 className="font-serif text-[34px] md:text-[58px] leading-[1.18] text-ink font-light">
            ためらいに、<br />言葉で答えます。
          </h1>
          <p className="mt-8 md:mt-10 text-[13px] md:text-[15px] text-ink/75 leading-[2.0] max-w-[460px]">
            中古業務用エアコンの品質・保証・価格・施工について、現場でよくいただく不安に正面からお答えします。
          </p>
        </div>
      </section>

      {/* CATEGORY NAV — left small labels editorial, NOT 4card grid */}
      <section data-section="category-nav" aria-labelledby="cat-h" className="py-[120px] md:py-[160px] scroll-mt-20">
        <div className="max-w-[820px] mx-auto px-6 md:px-12">
          <p className="font-en text-[11px] tracking-[0.32em] text-ash">— index</p>
          <span className="hairline w-12 mt-3 mb-10 block" />
          <h2 id="cat-h" className="font-serif text-[24px] md:text-[36px] leading-[1.4] text-ink mb-12">
            四つのカテゴリから
          </h2>
          <ul className="flex flex-col">
            {CATEGORIES.map(c => (
              <li key={c.id} className="border-t border-ink/15 last:border-b">
                <a
                  href={`#${c.id}`}
                  className="py-8 md:py-10 grid grid-cols-12 gap-4 md:gap-8 items-baseline group motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
                >
                  <span className="col-span-2 font-num text-[20px] md:text-[28px] text-ink/70">{c.no}</span>
                  <span className="col-span-7 font-serif text-[18px] md:text-[26px] text-ink">{c.label}</span>
                  <span className="col-span-3 font-en text-[11px] md:text-[12px] tracking-[0.22em] text-ash text-right">— {c.en}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* QUALITY */}
      <section data-section="quality-faq" aria-labelledby="q-h" id="quality-faq" className="py-[160px] md:py-[240px] scroll-mt-20">
        <div className="max-w-[820px] mx-auto px-6 md:px-12">
          <div className="flex items-baseline gap-6 mb-8">
            <span className="font-num text-[44px] md:text-[64px] text-ink leading-none">01</span>
            <span className="font-en text-[11px] tracking-[0.32em] text-ash">— quality</span>
          </div>
          <span className="hairline w-12 block mb-10" />
          <h2 id="q-h" className="font-serif text-[26px] md:text-[40px] leading-[1.4] text-ink mb-16">
            品質について
          </h2>
          <Accordion items={QUALITY} idPrefix="quality" />
        </div>
      </section>

      {/* WARRANTY */}
      <section data-section="warranty-faq" aria-labelledby="w-h" id="warranty-faq" className="py-[120px] md:py-[160px] bg-[#F4EFE3] scroll-mt-20">
        <div className="max-w-[820px] mx-auto px-6 md:px-12">
          <div className="flex items-baseline gap-6 mb-8">
            <span className="font-num text-[44px] md:text-[64px] text-ink leading-none">02</span>
            <span className="font-en text-[11px] tracking-[0.32em] text-ash">— warranty</span>
          </div>
          <span className="hairline w-12 block mb-10" />
          <h2 id="w-h" className="font-serif text-[26px] md:text-[40px] leading-[1.4] text-ink mb-16">
            保証について
          </h2>
          <Accordion items={WARRANTY} idPrefix="warranty" />
        </div>
      </section>

      {/* PRICE */}
      <section data-section="price-faq" aria-labelledby="p-h" id="price-faq" className="py-[160px] md:py-[240px] scroll-mt-20">
        <div className="max-w-[820px] mx-auto px-6 md:px-12">
          <div className="flex items-baseline gap-6 mb-8">
            <span className="font-num text-[44px] md:text-[64px] text-ink leading-none">03</span>
            <span className="font-en text-[11px] tracking-[0.32em] text-ash">— price</span>
          </div>
          <span className="hairline w-12 block mb-10" />
          <h2 id="p-h" className="font-serif text-[26px] md:text-[40px] leading-[1.4] text-ink mb-16">
            価格について
          </h2>
          <Accordion items={PRICE} idPrefix="price" />
        </div>
      </section>

      {/* INSTALLATION */}
      <section data-section="installation-faq" aria-labelledby="i-h" id="installation-faq" className="py-[120px] md:py-[160px] bg-ink text-paper scroll-mt-20">
        <div className="max-w-[820px] mx-auto px-6 md:px-12">
          <div className="flex items-baseline gap-6 mb-8">
            <span className="font-num text-[44px] md:text-[64px] text-paper leading-none">04</span>
            <span className="font-en text-[11px] tracking-[0.32em] text-paper/55">— installation</span>
          </div>
          <span className="block w-12 h-px bg-paper/30 mb-10" />
          <h2 id="i-h" className="font-serif text-[26px] md:text-[40px] leading-[1.4] mb-16">
            施工について
          </h2>
          <ul className="flex flex-col">
            {INSTALL.map((it, i) => (
              <li key={i} className="border-t border-paper/15 last:border-b py-10">
                <div className="grid grid-cols-12 gap-4 md:gap-8">
                  <span className="col-span-1 font-num text-[16px] md:text-[20px] text-paper/55">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="col-span-11">
                    <h3 className="font-serif text-[15px] md:text-[20px] leading-[1.7] mb-4">{it.q}</h3>
                    <p className="text-[13px] md:text-[15px] text-paper/75 leading-[2.0]">{it.a}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section data-section="cta" aria-labelledby="cta-h" className="py-[160px] md:py-[240px] scroll-mt-20">
        <div className="max-w-[680px] mx-auto px-6 md:px-12">
          <p className="font-en text-[11px] tracking-[0.32em] text-ash">— next step</p>
          <span className="hairline w-12 mt-3 mb-10 block" />
          <h2 id="cta-h" className="font-serif text-[26px] md:text-[40px] leading-[1.4] text-ink mb-10">
            答えが見つからない<br className="md:hidden" />ときは。
          </h2>
          <p className="text-[14px] md:text-[16px] text-ink/80 leading-[2.0] mb-12">
            ここに書ききれなかった疑問は、電話・メール・フォームから直接お尋ねください。見積り無料、現地調査前提でお伺いします。2日以内にご連絡します。
          </p>
          <span className="hairline w-full mb-10 block" />
          <div className="flex flex-col gap-6">
            <Link href="/contact" className="link-reveal font-serif text-[15px] md:text-[18px] text-ink">
              無料見積を依頼する(現地調査あり)
            </Link>
            <Link href="/contact#line" className="link-reveal font-serif text-[15px] md:text-[18px] text-ink">
              LINEで相談する(無料・準備中につきフォーム経由)
            </Link>
            <a href="tel:0364245947" className="link-reveal font-num text-[22px] md:text-[26px] text-ink">
              03-6424-5947
            </a>
            <span className="text-[12px] md:text-[13px] text-ash">平日9時～18時</span>
          </div>
        </div>
      </section>
    </>
  )
}