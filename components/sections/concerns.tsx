import Image from "next/image"
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
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-8 text-balance">
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

        {/* スマホ最優先: 常に横並び（画像は右）。ブロック全体を中央配置し、文面は折り返しつつ text-center */}
        <div className="flex w-full justify-center">
          <div className="inline-flex max-w-full flex-row flex-nowrap items-end gap-2 sm:gap-3 md:gap-4">
            <div className="min-w-0 max-w-[calc(100vw-8.75rem)] space-y-1.5 text-center sm:max-w-[min(24rem,calc(100vw-8rem))] sm:space-y-2">
              <p className="font-serif text-lg font-medium leading-snug sm:text-xl md:text-2xl">
                {'その脂肪、'}
              </p>
              <p className="font-serif text-lg font-medium leading-snug sm:text-xl md:text-2xl">
                {'"努力不足"ではありません。'}
              </p>
            </div>
            <div className="relative w-20 shrink-0 sm:w-24 md:w-28 lg:w-32">
              <Image
                src="/images/irast.png"
                alt="vieruスタッフがお悩みに寄り添うイラスト"
                width={1790}
                height={2400}
                className="h-auto w-full object-contain"
                sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 128px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
