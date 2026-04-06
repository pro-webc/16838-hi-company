import Image from 'next/image'
import Reveal from '@/components/Reveal'

export default function ContactPage() {
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
          <p className="font-en text-[10px] md:text-[11px] tracking-[0.32em] text-ink/55">no.06 — contact</p>
          <span className="hairline w-12 mt-3 mb-8 block" />
          <h1 className="font-serif text-[34px] md:text-[58px] leading-[1.18] text-ink font-light">
            まず、現地を<br />見させてください。
          </h1>
          <p className="mt-8 md:mt-10 text-[13px] md:text-[15px] text-ink/75 leading-[2.0] max-w-[460px]">
            業務用エアコンの買取・販売・取付・メンテナンスのご依頼は、すべて現地調査前提でお伺いします。見積り無料、平日9時～18時。
          </p>
        </div>
      </section>

      {/* METHODS */}
      <section data-section="methods" aria-labelledby="m-h" id="line" className="py-[120px] md:py-[160px] scroll-mt-20">
        <div className="max-w-[820px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="font-en text-[11px] tracking-[0.32em] text-ash">— how to reach us</p>
            <span className="hairline w-12 mt-3 mb-10 block" />
            <h2 id="m-h" className="font-serif text-[26px] md:text-[40px] leading-[1.4] text-ink mb-16">
              三つの連絡手段
            </h2>
          </Reveal>

          <ul className="flex flex-col">
            <li className="py-12 border-t border-ink/15 grid grid-cols-12 gap-4 md:gap-8">
              <div className="col-span-12 md:col-span-3">
                <span className="font-num text-[20px] text-ink/70">01</span>
                <p className="font-en text-[11px] tracking-[0.22em] text-ash mt-2">— line</p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-serif text-[18px] md:text-[22px] text-ink leading-[1.5]">LINEで相談する</h3>
                <p className="mt-4 text-[13px] md:text-[15px] text-ink/75 leading-[2.0]">
                  LINE公式アカウントは現在準備中です。当面はお問い合わせフォームより同等のご相談を承ります。準備が整い次第、本ページから登録動線を公開します。
                </p>
              </div>
            </li>
            <li className="py-12 border-t border-ink/15 grid grid-cols-12 gap-4 md:gap-8">
              <div className="col-span-12 md:col-span-3">
                <span className="font-num text-[20px] text-ink/70">02</span>
                <p className="font-en text-[11px] tracking-[0.22em] text-ash mt-2">— phone</p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-serif text-[18px] md:text-[22px] text-ink leading-[1.5]">電話で話す</h3>
                <p className="mt-6">
                  <a href="tel:0364245947" className="font-num text-[28px] md:text-[36px] text-ink link-reveal">
                    03-6424-5947
                  </a>
                </p>
                <p className="mt-3 text-[12px] md:text-[14px] text-ash">平日9時～18時</p>
              </div>
            </li>
            <li className="py-12 border-t border-ink/15 border-b grid grid-cols-12 gap-4 md:gap-8">
              <div className="col-span-12 md:col-span-3">
                <span className="font-num text-[20px] text-ink/70">03</span>
                <p className="font-en text-[11px] tracking-[0.22em] text-ash mt-2">— mail</p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-serif text-[18px] md:text-[22px] text-ink leading-[1.5]">メールで送る</h3>
                <p className="mt-6">
                  <a href="mailto:H.yamashita@hicompany.co.jp" className="link-reveal text-[15px] md:text-[18px] text-ink break-all">
                    H.yamashita@hicompany.co.jp
                  </a>
                </p>
                <p className="mt-3 text-[12px] md:text-[14px] text-ash">直接送信もしくは下記フォームをご利用ください</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* FORM */}
      <section data-section="form" aria-labelledby="form-h" className="py-[160px] md:py-[240px] bg-[#F4EFE3] scroll-mt-20">
        <div className="max-w-[680px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="font-en text-[11px] tracking-[0.32em] text-ash">— form</p>
            <span className="hairline w-12 mt-3 mb-10 block" />
            <h2 id="form-h" className="font-serif text-[26px] md:text-[40px] leading-[1.4] text-ink mb-10">
              お問い合わせフォーム
            </h2>
            <p className="text-[13px] md:text-[15px] text-ink/75 leading-[2.0] mb-4">
              2日以内に登録メールアドレス宛にご連絡させていただきます。
            </p>
            <p className="text-[12px] md:text-[14px] text-ash leading-[1.9] mb-12">
              個人情報は本お問い合わせへの返信およびお見積りのご連絡以外の目的では利用しません。第三者への提供も行いません。
            </p>
          </Reveal>

          <form action="#" method="post" className="flex flex-col gap-10">
            <div>
              <label htmlFor="purpose" className="font-en text-[11px] tracking-[0.22em] text-ash block mb-3">— purpose / 対象サービス</label>
              <select
                id="purpose"
                name="purpose"
                required
                className="w-full bg-transparent border-b border-ink/30 py-3 text-[14px] md:text-[16px] text-ink focus:outline-none focus:border-ink focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4EFE3] motion-safe:transition-colors"
              >
                <option value="">選択してください</option>
                <option value="buyback">業務用エアコン買取</option>
                <option value="sales">業務用エアコン販売</option>
                <option value="install">エアコン取付工事</option>
                <option value="maintenance">空調設備メンテナンス</option>
                <option value="other">その他</option>
              </select>
            </div>
            <div>
              <label htmlFor="name" className="font-en text-[11px] tracking-[0.22em] text-ash block mb-3">— name / お名前</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="山田 太郎"
                className="w-full bg-transparent border-b border-ink/30 py-3 text-[14px] md:text-[16px] text-ink placeholder:text-ash/50 focus:outline-none focus:border-ink focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4EFE3] motion-safe:transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-en text-[11px] tracking-[0.22em] text-ash block mb-3">— email / メールアドレス</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="example@example.com"
                className="w-full bg-transparent border-b border-ink/30 py-3 text-[14px] md:text-[16px] text-ink placeholder:text-ash/50 focus:outline-none focus:border-ink focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4EFE3] motion-safe:transition-colors"
              />
            </div>
            <div>
              <label htmlFor="tel" className="font-en text-[11px] tracking-[0.22em] text-ash block mb-3">— phone / 電話(任意)</label>
              <input
                id="tel"
                name="tel"
                type="tel"
                placeholder="03-1234-5678"
                className="w-full bg-transparent border-b border-ink/30 py-3 text-[14px] md:text-[16px] text-ink placeholder:text-ash/50 focus:outline-none focus:border-ink focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4EFE3] motion-safe:transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-en text-[11px] tracking-[0.22em] text-ash block mb-3">— message / お問い合わせ内容(任意)</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="現場の所在地、機体台数、設置年数、お困りの内容など"
                className="w-full bg-transparent border-b border-ink/30 py-3 text-[14px] md:text-[16px] text-ink placeholder:text-ash/50 focus:outline-none focus:border-ink focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4EFE3] motion-safe:transition-colors resize-none"
              />
            </div>
            <div className="pt-6">
              <span className="hairline w-full block mb-10" />
              <button
                type="submit"
                className="link-reveal font-serif text-[16px] md:text-[18px] text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-[#F4EFE3]"
              >
                無料見積を依頼する(現地調査あり)
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ACCESS */}
      <section data-section="access" aria-labelledby="acc-h" className="py-[120px] md:py-[160px] scroll-mt-20">
        <div className="max-w-screen-lg mx-auto px-6 md:px-12">
          <Reveal>
            <p className="font-en text-[11px] tracking-[0.32em] text-ash">— access</p>
            <span className="hairline w-12 mt-3 mb-10 block" />
            <h2 id="acc-h" className="font-serif text-[26px] md:text-[40px] leading-[1.4] text-ink mb-12">
              所在地
            </h2>
            <p className="text-[14px] md:text-[16px] text-ink/80 leading-[2.0]">
              株式会社Hi・company<br />
              〒144-0052 東京都大田区蒲田1-4-19 クロスビルB1
            </p>
            <div className="hairline w-full mt-12" />
            <div className="mt-12 aspect-[16/9] w-full overflow-hidden border border-ink/15">
              <iframe
                title="株式会社Hi・company 所在地マップ"
                src="https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%A4%A7%E7%94%B0%E5%8C%BA%E8%92%B2%E7%94%B01-4-19&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}