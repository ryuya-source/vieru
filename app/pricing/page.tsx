import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/sections/footer"
import { StickyFooter } from "@/components/sections/sticky-footer"

export const metadata: Metadata = {
  title: "全料金メニュー | vieru 脂肪冷却専門サロン",
  description:
    "vieru脂肪冷却専門サロンの全料金メニュー。初回お試し92%OFFキャンペーン実施中。2台〜4台同時使用プラン、オプション、回数券をご案内。",
}

const trialPlans = [
  {
    machines: "4台使用・8カップ施術",
    duration: "所要時間120分",
    originalPrice: "¥280,000",
    price: "¥19,920",
    examples: "上腹部/下腹部、背中/腰　ほか",
    popular: true,
  },
  {
    machines: "3台使用・6カップ施術",
    duration: "所要時間110分",
    originalPrice: "¥210,000",
    price: "¥14,940",
    examples: "下腹部/ウエスト/背中　ほか",
    popular: false,
  },
  {
    machines: "2台同時使用・4カップ施術",
    duration: "所要時間70分",
    originalPrice: "¥140,000",
    price: "¥9,960",
    examples: "下腹部/内もも、ウエスト/脹脛　ほか",
    popular: false,
  },
]

const regularPlans = [
  {
    machines: "4台使用・8カップ施術",
    duration: "所要時間120分",
    price: "¥39,800",
    examples: "上腹部/下腹部、背中/腰　ほか",
  },
  {
    machines: "3台使用・6カップ施術",
    duration: "所要時間110分",
    price: "¥29,800",
    examples: "下腹部/ウエスト/背中　ほか",
  },
  {
    machines: "2台同時使用・4カップ施術",
    duration: "所要時間70分",
    price: "¥19,800",
    examples: "下腹部/内もも、ウエスト/脹脛　ほか",
  },
]

const ticketPlans = [
  {
    label: "5回券",
    machines: "4台使用",
    price: "¥179,100",
    perSession: "¥35,820/回",
    discount: "10%OFF",
  },
  {
    label: "5回券",
    machines: "3台使用",
    price: "¥134,100",
    perSession: "¥26,820/回",
    discount: "10%OFF",
  },
  {
    label: "5回券",
    machines: "2台使用",
    price: "¥89,100",
    perSession: "¥17,820/回",
    discount: "10%OFF",
  },
  {
    label: "10回券",
    machines: "4台使用",
    price: "¥318,400",
    perSession: "¥31,840/回",
    discount: "20%OFF",
  },
  {
    label: "10回券",
    machines: "3台使用",
    price: "¥238,400",
    perSession: "¥23,840/回",
    discount: "20%OFF",
  },
  {
    label: "10回券",
    machines: "2台使用",
    price: "¥158,400",
    perSession: "¥15,840/回",
    discount: "20%OFF",
  },
]

const options = [
  { name: "ラジオ波（部位追加）", price: "¥3,300", note: "冷却後の仕上げに" },
  { name: "EMS（部位追加）", price: "¥3,300", note: "筋肉刺激で引き締め" },
  { name: "キャビテーション（部位追加）", price: "¥3,300", note: "脂肪の分解を促進" },
]

export default function PricingPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
          <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {'トップに戻る'}
            </Link>
            <span className="font-serif text-sm font-semibold">vieru</span>
          </div>
        </header>

        <main className="py-16 px-6 pb-24">
          <div className="max-w-2xl mx-auto">
            {/* Page title */}
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Price List
              </p>
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-balance">
                {'全料金メニュー'}
              </h1>
            </div>

            {/* Trial Campaign */}
            <section className="mb-16">
              <div className="text-center mb-8">
                <span className="inline-block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                  Campaign
                </span>
                <h2 className="font-serif text-2xl font-semibold">
                  {'初回お試し'}
                  <span className="inline-block bg-foreground text-background px-2.5 py-0.5 rounded-lg text-xl ml-2">
                    {'92%OFF'}
                  </span>
                </h2>
              </div>

              <div className="space-y-4">
                {trialPlans.map((plan) => (
                  <div
                    key={plan.machines}
                    className={`rounded-2xl p-6 md:p-8 relative ${
                      plan.popular
                        ? "bg-foreground text-background"
                        : "bg-card"
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute top-4 right-4 text-xs bg-background text-foreground px-3 py-1 rounded-full font-medium">
                        {'人気No.1'}
                      </span>
                    )}
                    <h3 className={`font-medium text-base mb-1 ${plan.popular ? "text-background" : "text-foreground"}`}>
                      {plan.machines}
                    </h3>
                    <p className={`text-xs mb-4 ${plan.popular ? "text-background/70" : "text-muted-foreground"}`}>
                      {plan.duration}
                    </p>
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className={`text-sm line-through ${plan.popular ? "text-background/50" : "text-muted-foreground"}`}>
                        {plan.originalPrice}
                      </span>
                      <span className={`font-serif text-3xl md:text-4xl font-bold ${plan.popular ? "text-background" : "text-foreground"}`}>
                        {plan.price}
                      </span>
                    </div>
                    <p className={`text-xs ${plan.popular ? "text-background/70" : "text-muted-foreground"}`}>
                      {'事例：'}{plan.examples}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-card rounded-2xl p-6 mt-4 text-center">
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                  {'条件'}
                </p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>{'対象者：2026年2月末までに予約確定'}</p>
                  <p>{'来店日は3月以降でも割引適用'}</p>
                  <p>{'男女利用可'}</p>
                </div>
              </div>
            </section>

            {/* Regular pricing */}
            <section className="mb-16">
              <div className="text-center mb-8">
                <span className="inline-block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                  Regular
                </span>
                <h2 className="font-serif text-2xl font-semibold">
                  {'通常料金'}
                </h2>
              </div>

              <div className="space-y-4">
                {regularPlans.map((plan) => (
                  <div
                    key={plan.machines}
                    className="rounded-2xl bg-card p-6 md:p-8"
                  >
                    <h3 className="font-medium text-base mb-1">{plan.machines}</h3>
                    <p className="text-xs text-muted-foreground mb-4">{plan.duration}</p>
                    <span className="font-serif text-3xl md:text-4xl font-bold">
                      {plan.price}
                    </span>
                    <p className="text-xs text-muted-foreground mt-3">
                      {'事例：'}{plan.examples}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Ticket plans */}
            <section className="mb-16">
              <div className="text-center mb-8">
                <span className="inline-block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                  Ticket
                </span>
                <h2 className="font-serif text-2xl font-semibold">
                  {'回数券'}
                </h2>
                <p className="text-sm text-muted-foreground mt-2">
                  {'まとめてお得に。都度払いよりさらにお得な回数券プラン。'}
                </p>
              </div>

              <div className="space-y-4">
                {ticketPlans.map((plan, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-card p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full font-medium">
                          {plan.label}
                        </span>
                        <span className="text-xs bg-foreground text-background px-2 py-0.5 rounded-full font-medium">
                          {plan.discount}
                        </span>
                      </div>
                      <h3 className="font-medium text-base mt-2">{plan.machines}</h3>
                    </div>
                    <div className="sm:text-right">
                      <span className="font-serif text-2xl font-bold">{plan.price}</span>
                      <p className="text-xs text-muted-foreground mt-1">{plan.perSession}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Options */}
            <section className="mb-16">
              <div className="text-center mb-8">
                <span className="inline-block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                  Option
                </span>
                <h2 className="font-serif text-2xl font-semibold">
                  {'オプション'}
                </h2>
              </div>

              <div className="space-y-4">
                {options.map((opt) => (
                  <div
                    key={opt.name}
                    className="rounded-2xl bg-card p-6 flex items-center justify-between gap-4"
                  >
                    <div>
                      <h3 className="font-medium text-sm">{opt.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{opt.note}</p>
                    </div>
                    <span className="font-serif text-xl font-bold shrink-0">{opt.price}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Note */}
            <div className="bg-card rounded-2xl p-6 text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {'上記以外の組み合わせも可能です。悩み・要望に合わせて施術メニューをご提案いたします。お気軽にご相談ください。'}
              </p>
            </div>

            {/* Back link */}
            <div className="text-center mt-12">
              <Link
                href="/#pricing"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
              >
                <ArrowLeft className="w-4 h-4" />
                {'トップに戻る'}
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
