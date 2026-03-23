import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "ご予約",
    description: "LINE・ホットペッパーから事前予約",
    image: "/placeholder.svg?height=200&width=320",
    imageAlt: "LINEやホットペッパーからの予約画面イメージ",
  },
  {
    number: "02",
    title: "カウンセリング",
    description: "初回は注意事項の説明・ヒアリング（10分程度）",
    image: "/placeholder.svg?height=200&width=320",
    imageAlt: "完全個室でのカウンセリング風景",
  },
  {
    number: "03",
    title: "施術",
    description:
      "皮下脂肪厚み採寸 → 専用シート → 施術\n※施術時間は40分〜60分（皮下脂肪の厚みにより個人差あり）",
    image: "/placeholder.svg?height=200&width=320",
    imageAlt: "脂肪冷却マシンによる施術の様子",
  },
  {
    number: "04",
    title: "アフターケア",
    description: "施術後ケア方法・アドバイスをお伝えします",
    image: "/placeholder.svg?height=200&width=320",
    imageAlt: "施術後のアフターケア説明の様子",
  },
]

export function TreatmentFlow() {
  return (
    <section id="flow" className="py-24 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-balance">
            {"施術の流れ"}
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px bg-border"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-6">
                {/* Number circle */}
                <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-semibold">
                  {step.number}
                </div>

                {/* Content */}
                <div
                  className={`flex-1 ${index === steps.length - 1 ? "pb-0" : "pb-2"}`}
                >
                  <h3 className="font-serif text-lg font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line mb-4">
                    {step.description}
                  </p>

                  {/* Step photo */}
                  <div className="relative w-full max-w-xs aspect-[16/10] rounded-xl overflow-hidden bg-muted">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
