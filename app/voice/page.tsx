import Link from 'next/link'
import CaseAccordion from '@/components/CaseAccordion'

export default function VoicePage() {
  return (
    <>
      {/* hero */}
      <section aria-labelledby="voice-hero" data-section="hero" className="relative bg-paper min-h-[550px] md:min-h-[750px] overflow-hidden">
        <img src="/images/hero-voice.svg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
          <div className="col-span-12 md:col-span-6 row-start-7 row-span-6 md:row-start-7 md:row-span-6 px-6 md:pl-16 lg:pl-24 flex flex-col justify-end pb-12 md:pb-20">
            <div className="h-px bg-hairline w-20 mb-8" />
            <p className="font-num font-light text-[11px] md:text-[13px] tracking-[0.22em] text-ink-500 mb-6">Cases — installation records</p>
            <h1 id="voice-hero" className="font-serif font-light text-[44px] md:text-[96px] leading-[0.95] tracking-tight text-ink-900">納入の輪</h1>
            <div className="h-px bg-hairline w-full mt-10 mb-6" />
            <p className="font-serif text-[13px] md:text-[16px] text-ink-700 leading-[1.95] max-w-xl">
              病院・自治体・大手企業の空調設備、飲食店の厨房空調、オフィスの隠蔽配管更新まで——業務用エアコンの買取・販売・設置の現場記録です。
            </p>
          </div>
        </div>
      </section>

      {/* clients */}
      <section aria-labelledby="clients-h2" data-section="clients" className="bg-paper pt-[64px] pb-[96px]">
        <div className="max-w-[1480px] mx-auto px-6 md:px-12 grid grid-cols-12 gap-6 md:gap-12">
          <div className="col-span-12 md:col-span-4">
            <p className="font-num font-light text-[11px] tracking-[0.22em] text-ink-400 mb-4">01 — Clients</p>
            <h2 id="clients-h2" className="font-serif font-light text-[28px] md:text-[44px] leading-[1.25] text-ink-900 border-l border-ink-900 pl-5">
              納入先の<br />内訳
            </h2>
            <p className="font-serif text-[13px] md:text-[16px] text-ink-700 leading-[2] mt-8">
              病院・自治体・大手企業から、個人経営の店舗まで。業界や規模を問わず、業務用エアコンの買取・販売・施工の実績を積み重ねています。
            </p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ul className="border-t border-hairline">
              {[
                { en: 'Hospital', jp: '医療機関', d: '病棟・外来・手術室・薬剤庫の空調更新／温湿度管理が必要な区画への業務用パッケージ導入' },
                { en: 'Public', jp: '自治体・公共施設', d: '区民センター・庁舎・教育施設での空調機器入替および撤去回収' },
                { en: 'Enterprise', jp: '大手企業', d: '本社オフィス・支店・研修施設・データセンター付帯室の空調更新と保守契約' },
                { en: 'Restaurant', jp: '飲食店・厨房', d: '客席・厨房を別系統で設計する飲食店の新規開業／改装／緊急修理対応' },
                { en: 'Office', jp: 'オフィス・テナント', d: '区画変更に伴う隠蔽配管の引き直し、移設、増設工事' },
                { en: 'Retail', jp: '小売・物販店舗', d: '路面店からモール内テナントまで、開業時の取付・閉店時の買取' },
              ].map((c) => (
                <li key={c.en} className="grid grid-cols-12 gap-4 py-7 border-b border-hairline">
                  <div className="col-span-12 md:col-span-3">
                    <p className="font-num font-light text-[11px] tracking-[0.22em] text-ink-400">{c.en}</p>
                    <p className="font-serif text-[16px] md:text-[20px] text-ink-900 mt-1">{c.jp}</p>
                  </div>
                  <p className="col-span-12 md:col-span-9 font-serif text-[13px] md:text-[15px] text-ink-700 leading-[1.95]">{c.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* case-list */}
      <section aria-labelledby="cases-h2" data-section="case-list" className="bg-paper py-[120px] border-t border-hairline">
        <div className="max-w-[1480px] mx-auto px-6 md:px-12 grid grid-cols-12 gap-6 md:gap-12 mb-12">
          <div className="col-span-12 md:col-span-4">
            <p className="font-num font-light text-[11px] tracking-[0.22em] text-ink-400 mb-4">02 — Case List</p>
            <h2 id="cases-h2" className="font-serif font-light text-[28px] md:text-[44px] leading-[1.25] text-ink-900 border-l border-ink-900 pl-5">
              施工事例
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 self-end">
            <p className="font-serif text-[13px] md:text-[16px] text-ink-700 leading-[2]">
              機器の用途・規模・工期・特記事項を、案件ごとに記録しています。各項目を開くと詳細仕様をご覧いただけます。
            </p>
          </div>
        </div>

        <div className="max-w-[1480px] mx-auto px-6 md:px-12">
          <CaseAccordion
            items={[
              {
                no: '01',
                client: '東京都大田区／総合病院',
                scope: '病棟空調 14 台一斉更新（整備済み再生品）',
                area: '東京23区',
                year: '2025',
                body: '築 25 年の病棟で、老朽化した天井カセット形 4 方向 14 台を整備済み再生品に一斉更新した案件です。診療を止めずに進めるため、夜間搬入と系統切替を四夜に分け、各夜の試運転まで完了させました。冷媒は全機 R32 に統一し、フロン回収業者登録の手順に則って旧機の冷媒を回収しています。',
                spec: [
                  { label: '機種', value: '天井カセット 4方向 4馬力相当' },
                  { label: '台数', value: '14 台' },
                  { label: '工期', value: '4 夜（各 22:00–05:00）' },
                  { label: '冷媒', value: 'R32 統一' },
                  { label: '保証', value: '3 年' },
                ],
              },
              {
                no: '02',
                client: '東京都内／自治体運営施設',
                scope: '区民センターのホール空調 2 系統入替',
                area: '東京23区',
                year: '2024',
                body: '区民ホール付帯の空調 2 系統を、既存配管を流用しつつ新品に入替。天井裏の隠蔽配管経路の確認、ドレン勾配の取り直し、気密試験までを行い、休館期間内に試運転完了まで持ち込みました。',
                spec: [
                  { label: '機種', value: '天吊形 6馬力 ×2 系統' },
                  { label: '工期', value: '休館 6 日間' },
                  { label: '冷媒', value: 'R410A → R32 移行' },
                  { label: '保証', value: 'メーカー保証' },
                ],
              },
              {
                no: '03',
                client: '神奈川県川崎市／大手企業支店',
                scope: '本社支店オフィスの分散型空調更新と保守契約',
                area: '神奈川県川崎市',
                year: '2024',
                body: 'フロア全体を 8 系統に分割し、業務用エアコンを整備済み再生品で更新。更新後は年 2 回の定期点検契約を締結し、フィルタ・熱交換器洗浄・冷媒漏えい点検を継続しています。',
                spec: [
                  { label: '機種', value: '天井カセット 2方向 3馬力 ×8 台' },
                  { label: '工期', value: '土日 3 週分割' },
                  { label: '保守', value: '年 2 回／契約継続中' },
                  { label: '保証', value: '2 年' },
                ],
              },
              {
                no: '04',
                client: '横浜市港北区／飲食店リフォーム',
                scope: '居抜き物件の客席・厨房空調を別系統で再設計',
                area: '横浜市港北区',
                year: '2025',
                body: '居抜き物件のリフォームで、客席と厨房を別系統に分けて再設計。厨房側は油煙を吸い込みづらい高静圧型を選定し、客席側はインバーター制御で省エネを優先しました。整備済み再生品 2 台と新品 1 台のハイブリッド構成で、初期コストを大幅に抑えています。',
                spec: [
                  { label: '機種', value: '天吊形 4馬力（厨房）／天井カセット 3馬力 ×2（客席）' },
                  { label: '工期', value: '7 日間' },
                  { label: '保証', value: '2〜3 年' },
                ],
              },
            ]}
          />
        </div>
      </section>

      {/* case-detail — single deep case */}
      <section aria-labelledby="detail-h2" data-section="case-detail" className="bg-ink-900 text-paper py-[96px]">
        <div className="max-w-[1480px] mx-auto px-6 md:px-12 grid grid-cols-12 gap-6 md:gap-12">
          <div className="col-span-12 md:col-span-4">
            <p className="font-num font-light text-[11px] tracking-[0.22em] text-paper/40 mb-4">03 — Case in Depth</p>
            <h2 id="detail-h2" className="font-serif font-light text-[28px] md:text-[44px] leading-[1.25] border-l border-paper pl-5">
              一夜ごとに<br />積み重ねた更新
            </h2>
            <dl className="mt-12 border-t border-paper/15">
              {[
                ['Client', '東京都大田区／総合病院'],
                ['Scope', '病棟空調 14 台 一斉更新'],
                ['Year', '2025'],
                ['Method', '整備済み再生品（自社整備）'],
                ['Warranty', '3 年'],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-12 py-4 border-b border-paper/15">
                  <dt className="col-span-5 font-num font-light text-[11px] tracking-[0.18em] text-paper/40 uppercase">{k}</dt>
                  <dd className="col-span-7 font-serif text-[14px] md:text-[17px] text-paper">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-serif font-light text-[20px] md:text-[32px] text-paper leading-[1.55]">
              「整備済み再生品で<span className="font-num font-normal">14</span>台を一斉更新。新品の半額前後で、稼働してから一度も止まっていません。」
            </p>
            <p className="font-sans text-[12px] md:text-[14px] text-paper/50 mt-6">— 都内総合病院／管財担当（2025年導入）</p>

            <div className="h-px bg-paper/15 mt-12 mb-12" />

            <div className="space-y-10">
              <div>
                <p className="font-num font-light text-[11px] tracking-[0.22em] text-paper/40 mb-3">— Background</p>
                <p className="font-serif text-[13px] md:text-[16px] text-paper/80 leading-[2]">
                  築 25 年の病棟で、天井カセット形 4 方向の業務用エアコン 14 台が老朽化。新品で全機更新する見積りはおよそ 2 倍の費用がかかる中、診療を止められないという制約も重なっていました。
                </p>
              </div>
              <div>
                <p className="font-num font-light text-[11px] tracking-[0.22em] text-paper/40 mb-3">— Plan</p>
                <p className="font-serif text-[13px] md:text-[16px] text-paper/80 leading-[2]">
                  自社で分解整備した再生品 14 台を選定し、夜間 22 時から翌朝 5 時までの作業時間を四夜に分割。1 夜あたり 3〜4 台ずつ、病棟ごとに系統を切り替えながら更新する計画を立てました。冷媒は旧機の R410A をフロン回収業者登録に基づき全量回収し、R32 へ統一しています。
                </p>
              </div>
              <div>
                <p className="font-num font-light text-[11px] tracking-[0.22em] text-paper/40 mb-3">— Execution</p>
                <p className="font-serif text-[13px] md:text-[16px] text-paper/80 leading-[2]">
                  夜間搬入はエレベーター 1 基のみ使用許可、養生範囲も決められた条件下で実施。気密試験・真空引き・冷媒充填・試運転までを各夜で完結させ、翌朝の朝礼までに現状復旧を完了させました。すべての工程で記録写真と気密試験ログを残し、保守用に納品しています。
                </p>
              </div>
              <div>
                <p className="font-num font-light text-[11px] tracking-[0.22em] text-paper/40 mb-3">— Result</p>
                <p className="font-serif text-[13px] md:text-[16px] text-paper/80 leading-[2]">
                  更新から 1 年経過した時点で 14 台すべてが安定稼働。費用は新品更新時の試算に対しておよそ半額に収まり、保証は 3 年で締結しています。継続点検の契約を結び、年 2 回の巡回を開始しました。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* quality */}
      <section aria-labelledby="quality-h2" data-section="quality" className="bg-paper py-[120px]">
        <div className="max-w-[1480px] mx-auto px-6 md:px-12 grid grid-cols-12 gap-6 md:gap-12">
          <div className="col-span-12 md:col-span-4">
            <p className="font-num font-light text-[11px] tracking-[0.22em] text-ink-400 mb-4">04 — Quality</p>
            <h2 id="quality-h2" className="font-serif font-light text-[28px] md:text-[44px] leading-[1.25] text-ink-900 border-l border-ink-900 pl-5">
              整備済み再生品が<br />新品同等になるまで
            </h2>
            <p className="font-serif text-[13px] md:text-[16px] text-ink-700 leading-[2] mt-8">
              買い取った機械を分解し、洗浄し、部品を交換し、冷凍サイクルを整え、試運転を経て出荷する。八つの工程を一台ずつ通過した機械だけが、保証つきで次の現場へ向かいます。
            </p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ol className="border-t border-hairline">
              {[
                ['Disassembly', '分解', '外装・送風機・基板・熱交換器を外し、内部状態を一台ずつ目視で確認します。'],
                ['Cleaning', '洗浄', 'フィン洗浄剤と高圧洗浄で熱交換器・ドレンパン・送風ファンを徹底的に清掃します。'],
                ['Inspection', '点検', 'コンプレッサ・基板・センサ・電動弁・電源回路を計測機器で点検し、劣化を判定します。'],
                ['Replacement', '部品交換', '消耗・劣化していた部品はすべて新品に交換。基板・電動弁・センサも対象です。'],
                ['Refrigerant', '冷凍サイクル整備', '真空引きから冷媒充填まで、新品と同じ基準で冷凍サイクルを整えます。'],
                ['Test Run', '試運転', '冷房・暖房両モードで運転し、冷媒圧力・電流値・吹出温度を記録します。'],
                ['Inspection 2', '最終検品', '外装の塗装直し・ラベル貼付・付属品揃えまでを行い、最終チェックリストで確認します。'],
                ['Shipment', '出荷・保証発行', '保証書を発行し、現場への配送・取付工程に引き渡します。'],
              ].map(([en, jp, d], i) => (
                <li key={en} className="grid grid-cols-12 gap-4 py-6 md:py-8 border-b border-hairline">
                  <span className="col-span-2 md:col-span-1 font-num font-light text-[14px] md:text-[18px] text-ink-400 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  <div className="col-span-10 md:col-span-3">
                    <p className="font-num font-light text-[10px] tracking-[0.22em] text-ink-400">{en}</p>
                    <p className="font-serif text-[16px] md:text-[20px] text-ink-900 mt-1">{jp}</p>
                  </div>
                  <p className="col-span-12 md:col-span-8 font-serif text-[13px] md:text-[15px] text-ink-700 leading-[1.95]">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* cta */}
      <section aria-labelledby="voice-cta" data-section="cta" className="bg-paper border-t border-hairline pt-[96px] pb-[120px]">
        <div className="max-w-[1480px] mx-auto px-6 md:px-12 grid grid-cols-12 gap-6 md:gap-12">
          <div className="col-span-12 md:col-span-7">
            <p className="font-num font-light text-[11px] tracking-[0.22em] text-ink-400 mb-4">05 — Contact</p>
            <h2 id="voice-cta" className="font-serif font-light text-[28px] md:text-[56px] leading-[1.2] text-ink-900 border-l border-ink-900 pl-5 md:pl-8">
              次の一台も、<br />静かに整えて届けます。
            </h2>
            <p className="font-serif text-[13px] md:text-[16px] text-ink-700 leading-[2] mt-10 max-w-xl">
              買取・販売・取付・メンテナンス、いずれのご相談も現地調査と見積りは無料です。
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
            <ul className="border-t border-hairline">
              <li className="border-b border-hairline py-6">
                <Link href="/contact" className="font-serif text-[15px] md:text-[17px] text-ink-900 border-b border-ink-900 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900 focus-visible:ring-offset-2 focus-visible:ring-offset-paper">無料で現地見積りを依頼する</Link>
              </li>
              <li className="border-b border-hairline py-6">
                <a href="tel:0364245947" className="font-num font-light text-[28px] md:text-[36px] text-ink-900 tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900 focus-visible:ring-offset-2 focus-visible:ring-offset-paper">03-6424-5947</a>
                <p className="font-sans text-[12px] text-ink-500 mt-2">電話で空き状況を確認する／平日9時〜18時</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}