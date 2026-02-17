import Link from "next/link"
import { ArrowRight } from "lucide-react"

const cases = [
  {
    area: "腹部",
    sessions: "3回",
    period: "2ヶ月",
    result: "ウエスト \u22124.5cm",
    beforeLabel: "Before",
    afterLabel: "After",
  },
  {
    area: "二の腕",
    sessions: "2回",
    period: "1.5ヶ月",
    result: "\u22123.2cm",
    beforeLabel: "Before",
    afterLabel: "After",
  },
]

export function BeforeAfter() {
  return (
    <section id="cases" className="py-24 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Case Studies
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-balance">
            {'実際の症例'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div key={c.area} className="bg-background rounded-2xl overflow-hidden">
              {/* Visual area */}
              <div className="grid grid-cols-2 gap-px bg-border">
                <div className="bg-muted aspect-[4/3] flex flex-col items-center justify-center relative">
                  <div className="w-16 h-16 rounded-full bg-secondary/60 mb-2" />
                  <span className="text-xs font-medium text-muted-foreground tracking-wide">
                    {c.beforeLabel}
                  </span>
                </div>
                <div className="bg-muted/50 aspect-[4/3] flex flex-col items-center justify-center relative">
                  <div className="w-12 h-12 rounded-full bg-secondary/40 mb-2" />
                  <span className="text-xs font-medium text-muted-foreground tracking-wide">
                    {c.afterLabel}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-serif text-lg font-semibold mb-3">
                  {'【'}{c.area}{'】'}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>{'施術回数'}</span>
                    <span className="font-medium text-foreground">{c.sessions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{'期間'}</span>
                    <span className="font-medium text-foreground">{c.period}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{'変化'}</span>
                    <span className="font-semibold text-foreground text-base">{c.result}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-center text-muted-foreground mt-8">
          {'※効果には個人差があります'}
        </p>

        <p className="text-center font-serif text-lg md:text-xl mt-8">
          {'数字で変化が確認できるから、'}
          <br />
          {'安心して継続できます。'}
        </p>

        <div className="text-center mt-10">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            {'詳細な症例・施術箇所を見る'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
