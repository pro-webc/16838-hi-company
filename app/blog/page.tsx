import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import MidCta from '@/components/MidCta'

const POSTS = [
  {
    no: '01',
    cat: 'maintenance',
    date: '2026.03.18',
    title: '業務用エアコンの寿命を倍にする、年一回の点検項目',
    excerpt: '熱交換器の汚れ、ドレン詰まり、冷媒圧力。現場で必ず確認している基本五項目を、写真ではなく言葉で残しておきます。',
  },
  {
    no: '02',
    cat: 'restoration',
    date: '2026.02.27',
    title: '中古ではなく整備済み、と呼ぶ理由',
    excerpt: '入荷から出荷までの工程をどこまで踏むかで、再生品の質は別物になります。弊社が分解整備にかける工数の話。',
  },
  {
    no: '03',
    cat: 'restaurant',
    date: '2026.02.04',
    title: '飲食店リフォームで空調を後回しにしてはいけない',
    excerpt: '内装を先に決めてから配管経路に泣く事例が後を絶ちません。設計初期に空調屋を呼ぶべき三つの理由。',
  },
  {
    no: '04',
    cat: 'cost',
    date: '2026.01.21',
    title: '新品か再生品か、初期費用と五年コストで比較する',
    excerpt: '機種・台数・設置条件を仮定したうえで、五年間の総保有コストを並べると見えてくる、再生品の本当の経済性。',
  },
  {
    no: '05',
    cat: 'pitfall',
    date: '2025.12.16',
    title: '激安業者の見積りに潜む、保証なしというリスク',
    excerpt: '安かろう悪かろうの業者が見積書に書かないこと。保証期間・施工責任・冷媒回収の三点を必ず確認してください。',
  },
] as const

export default function BlogPage() {
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
          <p className="font-en text-[10px] md:text-[11px] tracking-[0.32em] text-ink/55">no.05 — journal</p>
          <span className="hairline w-12 mt-3 mb-8 block" />
          <h1 className="font-serif text-[34px] md:text-[58px] leading-[1.18] text-ink font-light">
            現場で、<br />書き留めたこと。
          </h1>
          <p className="mt-8 md:mt-10 text-[13px] md:text-[15px] text-ink/75 leading-[2.0] max-w-[460px]">
            業務用エアコンの整備、施工、選び方、よくある落とし穴。現場で得た知見を、ひとつずつ言葉にしていきます。
          </p>
        </div>
      </section>

      {/* INDEX */}
      <section data-section="index" aria-labelledby="ix-h" className="py-[160px] md:py-[240px] scroll-mt-20">
        <div className="max-w-[820px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="font-en text-[11px] tracking-[0.32em] text-ash">— recent entries</p>
            <span className="hairline w-12 mt-3 mb-10 block" />
            <h2 id="ix-h" className="font-serif text-[26px] md:text-[40px] leading-[1.4] text-ink mb-16">
              最近の記事
            </h2>
          </Reveal>
          <ol className="flex flex-col">
            {POSTS.map((p, i) => (
              <li key={p.no}>
                <Reveal delay={i * 50}>
                  <article className="py-14 md:py-16 border-t border-ink/15 last:border-b grid grid-cols-12 gap-4 md:gap-10 group">
                    <div className="col-span-12 md:col-span-3">
                      <p className="font-num text-[20px] md:text-[24px] text-ink/70">{p.no}</p>
                      <p className="font-en text-[11px] tracking-[0.22em] text-ash mt-3">— {p.cat}</p>
                      <p className="font-num text-[12px] tracking-wide text-ash mt-2">{p.date}</p>
                    </div>
                    <div className="col-span-12 md:col-span-9">
                      <h3 className="font-serif text-[18px] md:text-[24px] text-ink leading-[1.5]">{p.title}</h3>
                      <p className="mt-6 text-[13px] md:text-[15px] text-ink/75 leading-[2.0]">{p.excerpt}</p>
                      <Link
                        href="/blog"
                        className="link-reveal mt-8 inline-block font-en text-[12px] tracking-[0.22em] text-ink"
                      >
                        read on
                      </Link>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <MidCta />
    </>
  )
}