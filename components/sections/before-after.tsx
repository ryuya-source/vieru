import Image from "next/image"

const cases = [
  {
    area: "腹部",
    sessions: "3回",
    period: "2ヶ月",
    result: "ウエスト \u22124.5cm",
    beforeLabel: "施術前",
    afterLabel: "施術後",
    beforeImg: "/images/abb_.beforejpeg.jpeg",
    afterImg: "/images/abb_after.jpeg",
    beforeAlt: "腹部の施術前写真",
    afterAlt: "腹部の施術後写真 - ウエスト-4.5cm",
  },
  {
    area: "二の腕",
    sessions: "2回",
    period: "1.5ヶ月",
    result: "\u22123.2cm",
    beforeLabel: "施術前",
    afterLabel: "施術後",
    beforeImg: "/placeholder.svg?height=400&width=500",
    afterImg: "/placeholder.svg?height=400&width=500",
    beforeAlt: "二の腕の施術前写真",
    afterAlt: "二の腕の施術後写真 - -3.2cm",
  },
]

export function BeforeAfter() {
  return (
    <section id="cases" className="py-24 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-balance">
            {"実際の症例"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div
              key={c.area}
              className="bg-background rounded-2xl overflow-hidden"
            >
              {/* Before / After images */}
              <div className="grid grid-cols-2 gap-px bg-border">
                <div className="relative aspect-[4/3] bg-muted">
                  <Image
                    src={c.beforeImg}
                    alt={c.beforeAlt}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-2 left-2 text-[10px] font-semibold tracking-wider uppercase bg-foreground/70 text-background px-2 py-0.5 rounded">
                    {c.beforeLabel}
                  </span>
                </div>
                <div className="relative aspect-[4/3] bg-muted/50">
                  <Image
                    src={c.afterImg}
                    alt={c.afterAlt}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-2 left-2 text-[10px] font-semibold tracking-wider uppercase bg-foreground/70 text-background px-2 py-0.5 rounded">
                    {c.afterLabel}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-serif text-lg font-semibold mb-3">
                  {"【"}
                  {c.area}
                  {"】"}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>{"施術回数"}</span>
                    <span className="font-medium text-foreground">
                      {c.sessions}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>{"期間"}</span>
                    <span className="font-medium text-foreground">
                      {c.period}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>{"変化"}</span>
                    <span className="font-semibold text-foreground text-base">
                      {c.result}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-center text-muted-foreground mt-8">
          {"※効果には個人差があります"}
        </p>

        <p className="text-center font-serif text-lg md:text-xl mt-8">
          {"数字で変化が確認できるから、"}
          <br />
          {"安心して継続できます。"}
        </p>
      </div>
    </section>
  )
}
