import Link from "next/link"
import { ArrowRight } from "lucide-react"

const plans = [
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

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-4">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Campaign
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-3 text-balance">
            {'初回お試し'}
            <span className="inline-block bg-foreground text-background px-3 py-1 rounded-lg text-2xl md:text-3xl ml-2">
              {'92%OFF'}
            </span>
          </h2>
        </div>

        <div className="space-y-4 mt-12">
          {plans.map((plan) => (
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

        <p className="text-sm text-muted-foreground text-center mt-6 leading-relaxed">
          {'上記以外の組み合わせも可能。悩み・要望に合わせて施術メニュー提案いたします。'}
        </p>

        {/* Conditions */}
        <div className="bg-card rounded-2xl p-6 mt-8 text-center">
          <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
            {'条件'}
          </p>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>{'対象者：2026年2月末までに予約確定'}</p>
            <p>{'来店日は3月以降でも割引適用'}</p>
            <p>{'男女利用可'}</p>
          </div>
        </div>

        {/* Full pricing menu link */}
        <div className="text-center mt-10">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            {'全料金メニューを見る'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
