"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "/", label: "home" },
  { href: "/service", label: "service" },
  { href: "/about", label: "about" },
  { href: "/blog", label: "journal" },
  { href: "/faq", label: "faq" },
  { href: "/contact", label: "contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-sm">
      <div className="px-6 md:px-12 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-mincho text-[15px] md:text-[16px] tracking-[0.18em] text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
        >
          Hi&middot;company
        </Link>
        <nav aria-label="グローバルナビゲーション" className="hidden md:flex gap-10 font-en text-[13px] text-ink">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="relative motion-safe:transition-opacity motion-safe:duration-300 hover:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden min-h-12 min-w-12 flex items-center justify-center text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
      <div className="h-px bg-ink/15" />
      {open && (
        <div className="md:hidden bg-paper">
          <nav aria-label="モバイルナビゲーション" className="flex flex-col px-6 py-2">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-4 font-en text-[13px] text-ink min-h-12 flex items-center motion-safe:transition-opacity motion-safe:duration-300 hover:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
              >
                <span className="font-num text-[12px] mr-6 text-ash">{String(nav.indexOf(n) + 1).padStart(2, "0")}</span>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="h-px bg-ink/15" />
        </div>
      )}
    </header>
  );
}