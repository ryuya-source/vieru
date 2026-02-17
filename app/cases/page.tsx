import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/sections/footer"
import { StickyFooter } from "@/components/sections/sticky-footer"

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

const treatedAreas = [
  { name: "上腹部", description: "みぞおち下〜おへそ上の脂肪" },
  { name: "下腹部", description: "おへそ下〜恥骨上のポッコリ脂肪" },
  { name: "ウエスト（左右）", description: "くびれ部分の横腹の脂肪" },
  { name: "背中", description: "肩甲骨下〜腰上の広範囲" },
  { name: "腰まわり", description: "腰の後ろ側の脂肪" },
  { name: "二の腕", description: "腕の裏側のたるみ部分" },
  { name: "太もも（前面）", description: "膝上〜太もも前側" },
  { name: "太もも（内側）", description: "内もものすき間を作りたい部分" },
  { name: "太もも（外側）", description: "張り出した外もも" },
  { name: "ふくらはぎ", description: "脚の太さが気になる部分" },
  { name: "膝上", description: "膝にのった脂肪" },
  { name: "顎下", description: "二重顎・フェイスライン" },
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
                {'症例・施術箇所一覧'}
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {'実際にご来店いただいたお客様の施術結果をご紹介します。'}
              </p>
            </div>

            {/* Cases */}
            <section className="mb-16">
              <h2 className="font-serif text-xl font-semibold mb-6">{'症例紹介'}</h2>
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
              <h2 className="font-serif text-xl font-semibold mb-3">{'施術可能な部位'}</h2>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {'以下の部位に脂肪冷却の施術が可能です。複数部位の同時施術もお選びいただけます。'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {treatedAreas.map((area) => (
                  <div
                    key={area.name}
                    className="flex items-start gap-3 bg-card rounded-xl p-4"
                  >
                    <span className="w-2 h-2 rounded-full bg-foreground shrink-0 mt-1.5" />
                    <div>
                      <p className="text-sm font-medium">{area.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
