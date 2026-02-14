import { RotateCcw, Target, Heart, Smile, Clock, CalendarCheck, Coins } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Benefit {
  icon: LucideIcon
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    icon: RotateCcw,
    title: "リバウンドしにくい",
    description: "脂肪細胞個数が減りボディキープしやすい",
  },
  {
    icon: Target,
    title: "気になる部位にピンポイント",
    description: "ウエスト・下腹部等の理想ボディメイク",
  },
  {
    icon: Heart,
    title: "お肌に優しい",
    description: "切開不要で傷つけない／赤みは時間とともに引く",
  },
  {
    icon: Smile,
    title: "痛みが少ない",
    description: "-5\u00B0Cで痛みほぼなし／読書・映画・PC作業も可能",
  },
  {
    icon: Clock,
    title: "施術時間が短い",
    description: "カウンセリング後すぐ施術、1時間程度",
  },
  {
    icon: CalendarCheck,
    title: "ダウンタイムが短い",
    description: "切開なし／普段通り生活可",
  },
  {
    icon: Coins,
    title: "手頃な価格",
    description: "脂肪吸引の半分程度の価格帯",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            7 Benefits
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-balance">
            {'7つの効果・メリット'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className={`bg-card rounded-2xl p-6 ${
                  index === 6 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-medium text-base mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
