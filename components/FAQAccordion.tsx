"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FaqItem = { q: string; a: string };

export default function FAQAccordion({ items, startIndex = 1 }: { items: FaqItem[]; startIndex?: number }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-ink/15 border-y border-ink/15">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full text-left py-8 md:py-10 flex items-start gap-6 md:gap-10 motion-safe:transition-colors motion-safe:duration-300 hover:bg-smoke/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 px-1"
            >
              <span className="font-num text-[14px] text-ash pt-1 shrink-0">
                {String(startIndex + i).padStart(2, "0")}
              </span>
              <span className="font-mincho text-[16px] md:text-[20px] text-ink flex-1 leading-[1.6]">
                {item.q}
              </span>
              <span className="shrink-0 pt-1 text-ink" aria-hidden="true">
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            <div
              className={`grid motion-safe:transition-all motion-safe:duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-10" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="text-[14px] md:text-[16px] text-ink/80 leading-[1.95] pl-12 md:pl-20 pr-4 max-w-prose">
                  {item.a}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}