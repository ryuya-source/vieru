import type { Metadata, Viewport } from 'next'
import { Noto_Serif_JP, Noto_Sans_JP } from 'next/font/google'

import './globals.css'

const notoSerif = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
})

const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'vieru | 脂肪冷却専門サロン - 落ちない脂肪に、終止符を。',
  description:
    '施術2万件以上の実績。完全個室・都度払い制・コース勧誘なし。脂肪冷却の専門サロンvieru（ヴィエル）。二子玉川・自由が丘。初回92%OFFキャンペーン実施中。',
}

export const viewport: Viewport = {
  themeColor: '#FAF9F7',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${notoSerif.variable} ${notoSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
