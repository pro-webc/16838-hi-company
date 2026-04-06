import Link from 'next/link'

type Props = { href: string; children: React.ReactNode; en?: string }
export function QuietCta({ href, children, en }: Props) {
  return (
    <Link
      href={href}
      className="link-hairline font-serif font-light text-[16px] md:text-[20px] tracking-[0.05em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
    >
      {children}
      {en && <span className="ml-4 font-outfit text-[12px] md:text-[14px] text-mute tracking-[0.3em] align-middle">— {en}</span>}
    </Link>
  )
}