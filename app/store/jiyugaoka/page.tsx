import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, MapPin, Phone, Clock, Navigation } from "lucide-react"
import { Footer } from "@/components/sections/footer"
import { StickyFooter } from "@/components/sections/sticky-footer"

export const metadata: Metadata = {
  title: "自由が丘店 | vieru 脂肪冷却専門サロン",
  description:
    "vieru自由が丘店。自由が丘駅 南口 徒歩1分。東京都世田谷区奥沢 5-27-15 自由が丘ソレイユビル503。",
}

const hours = [
  { label: "平日", time: "10:00〜17:00（最終受付15:50）" },
  { label: "土", time: "10:00〜17:00（最終受付15:50）" },
  { label: "日", time: "12:00〜21:00（最終受付19:50）" },
  { label: "定休日", time: "月曜日" },
]

const directions = [
  "南口改札を右折",
  "線路下の手前で左折",
  "並木通りを右折",
  "お花屋さん向かいのビル（ソレイユビル）が当店",
  "右手入口から入り503号室へ",
]

export default function JiyugaokaStorePage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
          <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/#stores"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {'店舗案内に戻る'}
            </Link>
            <span className="font-serif text-sm font-semibold">vieru</span>
          </div>
        </header>

        <main className="py-16 px-6 pb-24">
          <div className="max-w-2xl mx-auto">
            {/* Store name */}
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Jiyugaoka
              </p>
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-balance">
                {'自由が丘店'}
              </h1>
            </div>

            {/* Business Hours */}
            <section className="bg-card rounded-2xl p-6 md:p-8 mb-4">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <h2 className="font-serif text-lg font-semibold">{'営業時間'}</h2>
              </div>
              <div className="space-y-3">
                {hours.map((item) => (
                  <div key={item.label} className="flex items-baseline gap-4">
                    <span className="text-sm font-medium w-16 shrink-0">{item.label}</span>
                    <span className="text-sm text-muted-foreground">{item.time}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Access */}
            <section className="bg-card rounded-2xl p-6 md:p-8 mb-4">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <h2 className="font-serif text-lg font-semibold">{'アクセス'}</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{'住所'}</p>
                  <p className="text-sm leading-relaxed">
                    {'東京都世田谷区奥沢 5-27-15 自由が丘ソレイユビル503'}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{'アクセス'}</p>
                  <p className="text-sm leading-relaxed">
                    {'自由が丘駅 南口 徒歩1分（東横線・大井町線）'}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {'自由が丘駅から95m'}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{'電話番号'}</p>
                  <a
                    href="tel:090-4677-6298"
                    className="inline-flex items-center gap-2 text-sm hover:underline underline-offset-4"
                  >
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    {'090-4677-6298'}
                  </a>
                </div>
              </div>
            </section>

            {/* Directions */}
            <section className="bg-card rounded-2xl p-6 md:p-8 mb-4">
              <div className="flex items-center gap-3 mb-6">
                <Navigation className="w-5 h-5 text-muted-foreground" />
                <h2 className="font-serif text-lg font-semibold">
                  {'自由が丘駅南口からの道順'}
                </h2>
              </div>
              <ol className="space-y-3">
                {directions.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-muted text-xs font-semibold text-muted-foreground shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Google Maps embed */}
            <section className="rounded-2xl overflow-hidden mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.85!2d139.6689!3d35.607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z6Ieq55Sx44GM5LiY!5e0!3m2!1sja!2sjp!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="自由が丘店の地図"
                className="w-full"
              />
            </section>

            {/* Back link */}
            <div className="text-center mt-12">
              <Link
                href="/#stores"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
              >
                <ArrowLeft className="w-4 h-4" />
                {'店舗案内に戻る'}
              </Link>
            </div>
          </div>
        </main>

        <Footer />
        <StickyFooter />
      </div>
    </>
  )
}
