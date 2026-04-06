import Link from "next/link";

export default function Footer() {
  const nav = [
    { href: "/", label: "home" },
    { href: "/service", label: "service" },
    { href: "/about", label: "about" },
    { href: "/blog", label: "journal" },
    { href: "/faq", label: "faq" },
    { href: "/contact", label: "contact" },
  ];
  return (
    <footer className="bg-paper border-t border-ink/15">
      <div className="px-6 md:px-12 py-[80px] md:py-[140px] max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="font-mincho text-[22px] md:text-[26px] text-ink leading-[1.5]">
              空気を、あつらえる。
            </p>
            <p className="font-en text-[13px] text-ash mt-6">since 2009 &mdash; tokyo</p>
            <div className="h-px bg-ink/30 w-24 mt-10" />
            <p className="text-[14px] md:text-[16px] text-ink/80 mt-8 leading-[1.95]">
              業務用エアコンの買取・販売・設置工事・空調設備メンテナンスを、東京・神奈川を中心に承っております。
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-7">
            <p className="font-en text-[12px] text-ash mb-6">contact</p>
            <dl className="space-y-5 text-[14px] md:text-[16px]">
              <div>
                <dt className="font-en text-[11px] text-ash mb-1">tel</dt>
                <dd>
                  <a
                    href="tel:0364245947"
                    className="font-num text-[20px] md:text-[22px] text-ink motion-safe:transition-opacity motion-safe:duration-300 hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
                  >
                    03-6424-5947
                  </a>
                </dd>
                <dd className="text-[13px] text-ash mt-1">平日9時〜18時</dd>
              </div>
              <div>
                <dt className="font-en text-[11px] text-ash mb-1">mail</dt>
                <dd>
                  <a
                    href="mailto:H.yamashita@hicompany.co.jp"
                    className="text-ink motion-safe:transition-opacity motion-safe:duration-300 hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 break-all"
                  >
                    H.yamashita@hicompany.co.jp
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-en text-[11px] text-ash mb-1">address</dt>
                <dd className="text-ink">
                  〒144-0052<br />
                  東京都大田区蒲田1-4-19 クロスビルB1
                </dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-3 md:col-start-11">
            <p className="font-en text-[12px] text-ash mb-6">sitemap</p>
            <ul className="space-y-3 font-en text-[13px]">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-ink motion-safe:transition-opacity motion-safe:duration-300 hover:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-ink/15 mt-20" />
        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-en text-[11px] text-ash">© 2026 Hi&middot;company inc. all rights reserved.</p>
          <p className="font-en text-[11px] text-ash">commercial air-conditioning specialist</p>
        </div>
      </div>
    </footer>
  );
}