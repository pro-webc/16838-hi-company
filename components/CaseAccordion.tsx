type CaseItem = {
  no: string
  client: string
  scope: string
  area: string
  year: string
  body: string
  spec: { label: string; value: string }[]
}

export default function CaseAccordion({ items }: { items: CaseItem[] }) {
  return (
    <ul className="border-t border-hairline">
      {items.map((it, i) => (
        <li key={i} className="border-b border-hairline">
          <details className="group">
            <summary className="grid grid-cols-12 gap-4 py-8 md:py-10 items-baseline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900 focus-visible:ring-offset-2 focus-visible:ring-offset-paper">
              <span className="col-span-2 md:col-span-1 font-num font-light text-[14px] md:text-[18px] text-ink-400 tabular-nums">{it.no}</span>
              <span className="col-span-7 md:col-span-7 font-serif text-[15px] md:text-[20px] text-ink-900 leading-[1.5]">{it.client}<br /><span className="font-sans text-[12px] md:text-[13px] text-ink-500 mt-1 inline-block">{it.scope}</span></span>
              <span className="hidden md:block md:col-span-3 font-num font-light text-[13px] text-ink-400 tabular-nums">{it.year}　{it.area}</span>
              <span className="col-span-3 md:col-span-1 justify-self-end font-serif text-[18px] text-ink-400 motion-safe:transition-transform group-open:rotate-45">＋</span>
            </summary>
            <div className="grid grid-cols-12 gap-6 md:gap-10 pb-10 md:pb-14">
              <div className="col-span-12 md:col-start-2 md:col-span-6">
                <p className="font-serif text-[13px] md:text-[16px] text-ink-700 leading-[2]">{it.body}</p>
              </div>
              <div className="col-span-12 md:col-span-4">
                <p className="font-num font-light text-[10px] tracking-[0.22em] text-ink-400 mb-4">Specification</p>
                <dl className="border-t border-hairline">
                  {it.spec.map((s, k) => (
                    <div key={k} className="grid grid-cols-12 gap-2 py-3 border-b border-hairline">
                      <dt className="col-span-5 font-sans text-[12px] md:text-[13px] text-ink-500">{s.label}</dt>
                      <dd className="col-span-7 font-serif text-[12px] md:text-[14px] text-ink-900">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </details>
        </li>
      ))}
    </ul>
  )
}