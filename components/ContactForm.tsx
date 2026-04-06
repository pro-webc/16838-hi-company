export default function ContactForm() {
  return (
    <form action="/contact" method="post" className="grid grid-cols-1 gap-7" aria-label="お問い合わせフォーム">
      <p className="font-serif text-[13px] md:text-[15px] text-ink-700 leading-[1.95] border-l border-ink-900 pl-5">
        2日以内に登録メールアドレス宛にご連絡させていただきます。現地確認を前提とした見積もりのため、設置場所・台数・型番が分かる写真を添えて送信いただくと、概算金額の提示までが早まります。
      </p>

      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="topic" className="font-num font-light text-[11px] tracking-[0.22em] text-ink-400">SUBJECT — ご相談内容（必須）</label>
        <select id="topic" name="topic" required className="bg-transparent border-b border-hairline py-3 font-serif text-[15px] md:text-[17px] text-ink-900 focus-visible:outline-none focus-visible:border-ink-900">
          <option value="">選択してください</option>
          <option value="buy">業務用エアコンの買取見積り</option>
          <option value="sell">業務用エアコンの販売・選定相談</option>
          <option value="install">取付工事の依頼</option>
          <option value="maintenance">空調設備メンテナンス</option>
          <option value="reform">飲食店リフォームに伴う空調工事</option>
          <option value="other">その他のご相談</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="name" className="font-num font-light text-[11px] tracking-[0.22em] text-ink-400">NAME — お名前（必須）</label>
        <input id="name" name="name" type="text" required placeholder="山田 太郎" className="bg-transparent border-b border-hairline py-3 font-serif text-[15px] md:text-[17px] text-ink-900 placeholder:text-ink-300 focus-visible:outline-none focus-visible:border-ink-900" />
      </div>

      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="company" className="font-num font-light text-[11px] tracking-[0.22em] text-ink-400">COMPANY — 会社名・屋号（任意）</label>
        <input id="company" name="company" type="text" placeholder="株式会社○○" className="bg-transparent border-b border-hairline py-3 font-serif text-[15px] md:text-[17px] text-ink-900 placeholder:text-ink-300 focus-visible:outline-none focus-visible:border-ink-900" />
      </div>

      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="email" className="font-num font-light text-[11px] tracking-[0.22em] text-ink-400">EMAIL — メールアドレス（必須）</label>
        <input id="email" name="email" type="email" required placeholder="example@example.com" className="bg-transparent border-b border-hairline py-3 font-serif text-[15px] md:text-[17px] text-ink-900 placeholder:text-ink-300 focus-visible:outline-none focus-visible:border-ink-900" />
      </div>

      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="tel" className="font-num font-light text-[11px] tracking-[0.22em] text-ink-400">TEL — 電話番号（任意）</label>
        <input id="tel" name="tel" type="tel" placeholder="03-1234-5678" className="bg-transparent border-b border-hairline py-3 font-serif text-[15px] md:text-[17px] text-ink-900 placeholder:text-ink-300 focus-visible:outline-none focus-visible:border-ink-900" />
      </div>

      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="area" className="font-num font-light text-[11px] tracking-[0.22em] text-ink-400">AREA — 設置・撤去場所（任意）</label>
        <input id="area" name="area" type="text" placeholder="東京都大田区蒲田" className="bg-transparent border-b border-hairline py-3 font-serif text-[15px] md:text-[17px] text-ink-900 placeholder:text-ink-300 focus-visible:outline-none focus-visible:border-ink-900" />
      </div>

      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="message" className="font-num font-light text-[11px] tracking-[0.22em] text-ink-400">MESSAGE — ご相談内容（任意）</label>
        <textarea id="message" name="message" rows={6} placeholder="型番・台数・設置環境・希望時期などをご記入ください" className="bg-transparent border border-hairline p-4 font-serif text-[15px] md:text-[17px] text-ink-900 placeholder:text-ink-300 focus-visible:outline-none focus-visible:border-ink-900" />
      </div>

      <p className="font-sans text-[12px] md:text-[13px] text-ink-500 leading-[1.9]">
        送信前に <a href="#privacy" className="border-b border-ink-500 hover:text-ink-900 hover:border-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900 focus-visible:ring-offset-2 focus-visible:ring-offset-paper">プライバシーポリシー</a> をご確認ください。入力された個人情報は、お問い合わせへの回答および現地調査の調整以外の目的では一切使用しません。
      </p>

      <button type="submit" className="mt-2 inline-flex items-center justify-between px-8 py-5 bg-ink-900 text-paper border border-ink-900 motion-safe:transition-colors hover:bg-paper hover:text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900 focus-visible:ring-offset-2 focus-visible:ring-offset-paper">
        <span className="font-serif text-[15px] md:text-[17px]">無料で現地見積りを依頼する</span>
        <span className="font-num font-light text-[12px] tracking-[0.2em]">SEND →</span>
      </button>
    </form>
  )
}