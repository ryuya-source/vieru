import { Check } from "lucide-react"

const concerns = [
  "お腹だけどうしても落ちない",
  "二の腕だけ残ってしまう",
  "食事制限はもう限界",
  "ジムは続かなかった",
  "医療痩身は少し怖い",
  "リバウンドが不安",
]

export function Concerns() {
  return (
    <section id="concerns" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Concerns</p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12 text-balance">
          {'こんなお悩みありませんか？'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 text-left">
          {concerns.map((concern) => (
            <div
              key={concern}
              className="flex items-center gap-3 bg-card rounded-lg px-5 py-4"
            >
              <Check className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm md:text-base">{concern}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <p className="font-serif text-xl md:text-2xl font-medium">
            {'その脂肪、'}
          </p>
          <p className="font-serif text-xl md:text-2xl font-medium">
            {'"努力不足"ではありません。'}
          </p>
        </div>
      </div>
    </section>
  )
}
