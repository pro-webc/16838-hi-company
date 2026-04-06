'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react'

const NAV = [
  { href: '/', label: 'top' },
  { href: '/service', label: 'service' },
  { href: '/about', label: 'about' },
  { href: '/blog', label: 'journal' },
  { href: '/faq', label: 'faq' },
  { href: '/contact', label: 'contact' },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/85 backdrop-blur-sm">
      <div className="border-b border-ink/10">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-en text-[13px] md:text-[14px] tracking-[0.22em] text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
          >
            Hi&nbsp;·&nbsp;company
          </Link>
          <nav aria-label="グローバルナビゲーション" className="hidden md:flex items-center gap-10">
            {NAV.map(n => (
              <Link
                key={n.href}
                href={n.href}
                className="link-reveal font-en text-[13px] tracking-[0.18em] text-ink/75 hover:text-ink motion-safe:transition-colors motion-safe:duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="md:hidden min-h-12 min-w-12 flex items-center justify-center text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink"
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={open}
          >
            {open ? <CloseIcon size={20} aria-hidden="true" /> : <MenuIcon size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-b border-ink/10 bg-paper">
          <nav aria-label="モバイルナビゲーション" className="flex flex-col px-6 py-8 gap-6">
            {NAV.map(n => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-en text-[13px] tracking-[0.18em] text-ink/80 motion-safe:transition-colors"
              >
                {n.label}
              </Link>
            ))}
            <span className="hairline w-full" />
            <a href="tel:0364245947" className="font-num text-[18px] text-ink">03-6424-5947</a>
            <span className="text-[12px] text-ash">平日9時〜18時</span>
          </nav>
        </div>
      )}
    </header>
  )
}