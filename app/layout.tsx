import type { Metadata } from 'next'
import './globals.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: '株式会社Hi・company | 業務用エアコンの買取・販売・取付・メンテナンス',
  description: '業務用エアコンを専門に扱う株式会社Hi・company。整備済み2年〜3年保証付きで、店舗・施設の空調更新を支えます。東京23区・川崎・横浜エリア対応。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-paper text-ink">
        <SiteHeader />
        <main className="pt-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}