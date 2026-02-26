export function FutureVision() {
  const outcomes = [
    "ウエスト \u22123\u301C5cm",
    "ぴったりしていた服がゆるくなる",
    "写真に映る自分が変わる",
    "鏡を見るのが嫌じゃなくなる",
  ]

  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
          After 3 Months
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12 text-balance">
          {'3ヶ月後のあなた'}
        </h2>

        <div className="space-y-4 mb-10">
          {outcomes.map((outcome) => (
            <div
              key={outcome}
              className="bg-background rounded-xl px-6 py-4 text-base md:text-lg"
            >
              {outcome}
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mb-8 leading-relaxed">
          {'一般的には約1\u301C4ヶ月かけて少しずつ脂肪細胞が老廃物に代わりデトックスされていきます。'}
          <br />
          {'※効果の現れ方や時期には個人差があります。'}
        </p>

        <div className="space-y-1">
          <p className="font-serif text-lg md:text-xl">{'変わるのは、体型だけではありません。'}</p>
          <p className="font-serif text-xl md:text-2xl font-semibold">
            {'「自信」が戻ってきます。'}
          </p>
        </div>
      </div>
    </section>
  )
}
