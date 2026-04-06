type Item = { q: string; a: string }

export default function Faq({ items }: { items: Item[] }) {
  return (
    <ul className="border-t border-hairline">
      {items.map((it, i) => (
        <li key={i} className="border-b border-hairline">
          <details className="group">
            <summary className="grid grid-cols-12 gap-4 py-7 md:py-9 items-baseline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900 focus-visible:ring-offset-2 focus-visible:ring-offset-paper">
              <span className="col-span-2 md:col-span-1 font-num font-light text-[14px] md:text-[16px] text-ink-400 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              <span className="col-span-9 md:col-span-10 font-serif text-[15px] md:text-[19px] text-ink-900 leading-[1.6]">{it.q}</span>
              <span className="col-span-1 justify-self-end font-serif text-[18px] text-ink-400 motion-safe:transition-transform group-open:rotate-45">＋</span>
            </summary>
            <div className="grid grid-cols-12 gap-4 pb-9">
              <div className="col-start-3 md:col-start-2 col-span-10 md:col-span-10">
                <p className="font-serif text-[13px] md:text-[16px] text-ink-700 leading-[1.95]">{it.a}</p>
              </div>
            </div>
          </details>
        </li>
      ))}
    </ul>
  )
}