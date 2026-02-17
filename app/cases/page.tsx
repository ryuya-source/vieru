import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/sections/footer"
import { StickyFooter } from "@/components/sections/sticky-footer"
import { TreatmentAreasTabs } from "@/components/sections/treatment-areas-tabs"

export const metadata: Metadata = {
  title: "症例一覧 | vieru 脂肪冷却専門サロン",
  description:
    "vieruの脂肪冷却施術の詳細な症例・施術箇所をご紹介。腹部、二の腕、太もも、背中など部位別の症例をご確認いただけます。",
}

const cases = [
  {
    area: "上腹部・下腹部",
    sessions: "3回",
    period: "2ヶ月",
    result: "ウエスト −4.5cm",
    machines: "4台使用・8カップ",
    description:
      "上腹部と下腹部を同時に施術。冷却により脂肪層が薄くなり、ウエストラインがすっきりとした印象に。",
  },
  {
    area: "二の腕",
    sessions: "2回",
    period: "1.5ヶ月",
    result: "−3.2cm",
    machines: "2台使用・4カップ",
    description:
      "両腕同時に施術。腕を上げた際のたるみが目に見えて改善し、ノースリーブに自信が持てるように。",
  },
  {
    area: "内もも",
    sessions: "3回",
    period: "2.5ヶ月",
    result: "太もも周り −3.8cm",
    machines: "2台使用・4カップ",
    description:
      "内ももの脂肪を重点的に冷却。太もも間にすき間ができ、スキニーパンツのシルエットが改善。",
  },
  {
    area: "背中・腰まわり",
    sessions: "3回",
    period: "2ヶ月",
    result: "−4.0cm",
    machines: "4台使用・8カップ",
    description:
      "背中から腰にかけての広範囲を施術。ブラジャーラインの段差やはみ出しが軽減し、後ろ姿の印象が大きく変化。",
  },
  {
    area: "ウエスト（くびれ）",
    sessions: "2回",
    period: "1.5ヶ月",
    result: "−3.5cm",
    machines: "2台使用・4カップ",
    description:
      "左右のウエストラインに集中施術。くびれが明確になり、メリハリのあるボディラインへ。",
  },
  {
    area: "下腹部",
    sessions: "2回",
    period: "1ヶ月",
    result: "−2.8cm",
    machines: "2台使用・4カップ",
    description:
      "下腹部のポッコリお腹に集中アプローチ。衣服の上からも分かるほどのサイズ変化を実感。",
  },
  {
    area: "ふくらはぎ",
    sessions: "2回",
    period: "1.5ヶ月",
    result: "−2.0cm",
    machines: "2台使用・4カップ",
    description:
      "ふくらはぎの外側・内側を冷却。脚全体のラインがすっきりし、ブーツの着脱がスムーズに。",
  },

  {
    area: "顎下・フェイスライン",
    sessions: "2回",
    period: "1ヶ月",
    result: "二重顎が軽減",
    machines: "小型カップ使用",
    description:
      "顎下の脂肪を小型カップで丁寧に冷却。フェイスラインがシャープになり、横顔の印象が改善。",
  },

]

const frontAreas = [
  { name: "上腹部（じょうふくぶ）", size: "M", description: "胃のあたり" },
  { name: "下腹部（かふくぶ）", size: "M", description: "下腹" },
  { name: "脇腹（わきばら）", size: "M", description: "ウエストサイド" },
  { name: "前内もも（まえうちもも）", size: "M", description: "太ももの前面・内側" },
  { name: "上腹部", size: "L", description: "中央の広範囲（上）" },
  { name: "下腹部", size: "L", description: "中央の広範囲（下）" },
]

const backAreas = [
  { name: "背中（せなか）", size: "M", description: "肩甲骨付近" },
  { name: "二の腕（にのうで）", size: "M", description: "上腕" },
  { name: "腰（こし）", size: "M", description: "ウエスト背面" },
  { name: "ヒップ下", size: "M", description: "お尻の下ライン" },
  { name: "後ろ内もも（うしろうちもも）", size: "M", description: "太ももの裏面・内側" },
  { name: "ふくらはぎ", size: "M", description: "ふくらはぎ" },
]

export default function CasesPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
          <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/#cases"
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
            {/* Page heading */}
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Case Studies
              </p>
              <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-balance">
                {'症例・施術箇所'}
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {'実際にご来店いただいたお客様の施術結果をご紹介します。'}
              </p>
            </div>

            {/* Cases */}
            <section className="mb-16">
              <h2 className="font-serif text-xl font-semibold mb-6">{'症例'}</h2>
              <div className="space-y-4">
                {cases.map((c, index) => (
                  <div key={c.area} className="bg-card rounded-2xl p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-xs text-muted-foreground">
                          {'Case '}
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-serif text-lg font-semibold mt-1">
                          {'【'}{c.area}{'】'}
                        </h3>
                      </div>
                      <span className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
                        {c.machines}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {c.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 bg-muted/50 rounded-xl p-4">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground mb-1">{'施術回数'}</p>
                        <p className="text-sm font-semibold">{c.sessions}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground mb-1">{'期間'}</p>
                        <p className="text-sm font-semibold">{c.period}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground mb-1">{'変化'}</p>
                        <p className="text-sm font-bold">{c.result}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-center text-muted-foreground mt-6">
                {'※効果には個人差があります。施術結果を保証するものではありません。'}
              </p>
            </section>

            {/* Treated areas */}
            <section className="mb-16">
              <h2 className="font-serif text-xl font-semibold mb-3">{'施術箇所'}</h2>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                {'全12部位からお選び頂けます。'}
              </p>

              <TreatmentAreasTabs frontAreas={frontAreas} backAreas={backAreas} />

              <p className="text-xs text-center text-muted-foreground mt-6">
                {'※M = Mサイズカップ、L = Lサイズカップ'}
              </p>
            </section>

            {/* Back link */}
            <div className="text-center">
              <Link
                href="/#cases"
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
