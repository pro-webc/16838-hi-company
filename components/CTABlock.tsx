import Link from "next/link";

type Props = { variant?: "default" | "dark" };
export default function CTABlock({ variant = "default" }: Props) {
  const dark = variant === "dark";
  return (
    <div
      className={
        dark
          ? "bg-ink text-paper px-6 md:px-16 py-[80px] md:py-[120px]"
          : "bg-paper text-ink px-6 md:px-16 py-[80px] md:py-[120px] border-y border-ink/15"
      }
    >
      <div className="max-w-screen-md">
        <span className={`font-en text-[11px] ${dark ? "text-paper/60" : "text-ash"}`}>
          first contact
        </span>
        <p className={`font-mincho text-[28px] md:text-[40px] mt-6 leading-[1.35] ${dark ? "text-paper" : "text-ink"}`}>
          見積を、相談する。
        </p>
        <p className={`text-[14px] md:text-[16px] mt-8 max-w-prose ${dark ? "text-paper/75" : "text-ink/75"}`}>
          現地調査を前提に、買取金額・販売価格・工事費用までを一通お見積りでご提示します。お問い合わせから2日以内に、担当者よりご連絡いたします。
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/20">
          <Link
            href="/contact"
            data-section="cta"
            className={`group block px-8 py-10 motion-safe:transition-colors motion-safe:duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
              dark
                ? "bg-ink hover:bg-ink/80 focus-visible:ring-paper text-paper"
                : "bg-paper hover:bg-smoke focus-visible:ring-ink text-ink"
            }`}
          >
            <span className={`font-en text-[11px] ${dark ? "text-paper/60" : "text-ash"}`}>01 / line</span>
            <span className={`block font-mincho text-[20px] md:text-[22px] mt-4 ${dark ? "text-paper" : "text-ink"}`}>
              LINEで無料相談を始める
            </span>
            <span className={`block h-px w-10 mt-6 ${dark ? "bg-paper/60" : "bg-ink/40"} motion-safe:transition-all motion-safe:duration-300 group-hover:w-20`} />
          </Link>

          <Link
            href="/contact"
            data-section="cta"
            className={`group block px-8 py-10 motion-safe:transition-colors motion-safe:duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
              dark
                ? "bg-ink hover:bg-ink/80 focus-visible:ring-paper text-paper"
                : "bg-paper hover:bg-smoke focus-visible:ring-ink text-ink"
            }`}
          >
            <span className={`font-en text-[11px] ${dark ? "text-paper/60" : "text-ash"}`}>02 / form</span>
            <span className={`block font-mincho text-[20px] md:text-[22px] mt-4 ${dark ? "text-paper" : "text-ink"}`}>
              無料見積りを依頼する
            </span>
            <span className={`block h-px w-10 mt-6 ${dark ? "bg-paper/60" : "bg-ink/40"} motion-safe:transition-all motion-safe:duration-300 group-hover:w-20`} />
          </Link>

          <a
            href="tel:0364245947"
            data-section="cta"
            className={`group block px-8 py-10 motion-safe:transition-colors motion-safe:duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
              dark
                ? "bg-ink hover:bg-ink/80 focus-visible:ring-paper text-paper"
                : "bg-paper hover:bg-smoke focus-visible:ring-ink text-ink"
            }`}
          >
            <span className={`font-en text-[11px] ${dark ? "text-paper/60" : "text-ash"}`}>03 / tel</span>
            <span className={`block font-num text-[24px] md:text-[26px] mt-4 ${dark ? "text-paper" : "text-ink"}`}>
              03-6424-5947
            </span>
            <span className={`block text-[12px] md:text-[13px] mt-2 ${dark ? "text-paper/60" : "text-ash"}`}>平日9時〜18時</span>
          </a>
        </div>
      </div>
    </div>
  );
}