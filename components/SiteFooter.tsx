import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 mt-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="font-en text-[13px] tracking-[0.22em] text-ink">Hi&nbsp;·&nbsp;company</p>
            <span className="hairline w-12 mt-4" />
            <p className="mt-8 text-[13px] md:text-[14px] text-ink/70 leading-[2.0]">
              業務用エアコンを専門に扱う、買取・販売・取付・メンテナンスの会社です。整備済み2年〜3年保証付きの再販品を、品質と施工の信頼を担保したうえで提供します。
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="font-en text-[11px] tracking-[0.25em] text-ash">contact</p>
            <span className="hairline w-8 mt-3" />
            <p className="mt-6">
              <a href="tel:0364245947" className="font-num text-[20px] md:text-[22px] text-ink link-reveal">
                03-6424-5947
              </a>
            </p>
            <p className="mt-2 text-[12px] md:text-[13px] text-ash">平日9時〜18時</p>
            <p className="mt-5 text-[13px] md:text-[14px]">
              <a href="mailto:H.yamashita@hicompany.co.jp" className="link-reveal text-ink/80 break-all">
                H.yamashita@hicompany.co.jp
              </a>
            </p>
          </div>
          <div className="md:col-span-4">
            <p className="font-en text-[11px] tracking-[0.25em] text-ash">office</p>
            <span className="hairline w-8 mt-3" />
            <p className="mt-6 text-[13px] md:text-[14px] text-ink/80 leading-[2.0]">
              株式会社Hi・company<br />
              〒144-0052<br />
              東京都大田区蒲田1-4-19 クロスビルB1
            </p>
          </div>
        </div>

        <span className="hairline w-full mt-20" />

        <nav aria-label="フッターナビゲーション" className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          {[
            ['/', 'top'],
            ['/service', 'service'],
            ['/about', 'about'],
            ['/blog', 'journal'],
            ['/faq', 'faq'],
            ['/contact', 'contact'],
          ].map(([h, l]) => (
            <Link key={h} href={h} className="font-en text-[12px] tracking-[0.18em] text-ink/60 link-reveal motion-safe:transition-colors">
              {l}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col md:flex-row md:justify-between gap-3 mt-12 font-en text-[11px] tracking-[0.18em] text-ash">
          <p>© 2026 株式会社Hi · company. all rights reserved.</p>
          <p>since 2009</p>
        </div>
      </div>
    </footer>
  )
}