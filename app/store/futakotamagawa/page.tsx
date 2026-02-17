import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, MapPin, Phone, Clock, Navigation, Car } from "lucide-react"
import { Footer } from "@/components/sections/footer"
import { StickyFooter } from "@/components/sections/sticky-footer"

export const metadata: Metadata = {
  title: "二子玉川店 | vieru 脂肪冷却専門サロン",
  description:
    "vieru二子玉川店。二子玉川駅 徒歩3分。東京都世田谷区玉川3-12-11 Swich204。",
}

const hours = [
  { label: "平日", time: "10:30〜21:00（最終受付20:00）" },
  { label: "土・祝日", time: "10:30〜20:00（最終受付19:00）" },
  { label: "日", time: "11:00〜20:00（最終受付19:00）" },
  { label: "定休日", time: "不定休" },
]

const staffNotes = [
  "※男性スタッフ在籍（指名不可）",
  "女性スタッフ終日担当：火・水・金・土・日",
  "男性スタッフ終日担当：月・木",
]

const directions = [
  "西口を出て右折",
  "信号を渡り高島屋通りへ",
  "SoftBankショップを左折し石畳路地へ",
  "3本目のT字（当店ビル）を右折",
  "204号室",
]

const parkingLots = [
  { number: "1", name: "リピートパーク二子玉川第１" },
  { number: "2", name: "パークジャパン 玉川第２" },
  { number: "3", name: "玉川高島屋ショッピングセンタータワーパーキング" },
  { number: "4", name: "ライズ駐車場" },
]

export default function FutakotamagawaStorePage() {
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
                Futakotamagawa
              </p>
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-balance">
                {'二子玉川店'}
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
              <div className="mt-5 pt-5 border-t border-border space-y-1.5">
                {staffNotes.map((note) => (
                  <p key={note} className="text-xs text-muted-foreground">{note}</p>
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
                    {'東京都世田谷区玉川3-12-11 Swich204'}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{'アクセス'}</p>
                  <p className="text-sm leading-relaxed">
                    {'二子玉川駅 徒歩3分'}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{'電話番号'}</p>
                  <a
                    href="tel:080-7050-0703"
                    className="inline-flex items-center gap-2 text-sm hover:underline underline-offset-4"
                  >
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    {'080-7050-0703'}
                  </a>
                </div>
              </div>
            </section>

            {/* Directions */}
            <section className="bg-card rounded-2xl p-6 md:p-8 mb-4">
              <div className="flex items-center gap-3 mb-6">
                <Navigation className="w-5 h-5 text-muted-foreground" />
                <h2 className="font-serif text-lg font-semibold">
                  {'二子玉川駅からの道順'}
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

            {/* Parking */}
            <section className="bg-card rounded-2xl p-6 md:p-8 mb-4">
              <div className="flex items-center gap-3 mb-6">
                <Car className="w-5 h-5 text-muted-foreground" />
                <h2 className="font-serif text-lg font-semibold">{'最寄り駐車場案内'}</h2>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                {'※専用駐車場はございません。最寄りの駐車場をご利用ください。'}
              </p>
              <div className="space-y-3">
                {parkingLots.map((lot) => (
                  <div key={lot.number} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-muted text-xs font-semibold text-muted-foreground shrink-0">
                      {lot.number}
                    </span>
                    <span className="text-sm leading-relaxed">{lot.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-5 pt-5 border-t border-border">
                {'土日祝は余裕を持って来店されることをおすすめいたします。'}
              </p>
            </section>

            {/* Google Maps embed */}
            <section className="rounded-2xl overflow-hidden mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.2!2d139.6262!3d35.6114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5LqM5a2Q546J5bed!5e0!3m2!1sja!2sjp!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="二子玉川店の地図"
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
