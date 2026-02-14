import { Snowflake } from "lucide-react"

export function AboutCryotherapy() {
  return (
    <section id="about" className="py-24 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            What is Fat Freezing
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-balance">
            {'脂肪細胞そのものに'}
            <br />
            {'アプローチする方法'}
          </h2>
        </div>

        <div className="bg-background rounded-2xl p-8 md:p-10">
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-6">
            {'脂肪には、「落ちやすい脂肪」と「落ちにくい脂肪」があります。'}
          </p>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-8">
            {'脂肪を4\u00B0Cに冷却し凍らせることで、脂肪細胞を減少させる痩身方法です。冷却された脂肪細胞は老廃物となり、自然に代謝、排泄されることで、痩身効果を得るだけでなく、リバウンドし難いという特徴もあります。'}
          </p>

          <div className="flex items-start gap-4 bg-muted/50 rounded-xl p-6">
            <Snowflake className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-sm mb-1">{'脂肪冷却とは'}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {'脂肪を冷却して新陳代謝を促し痩せる、アメリカ発祥の痩身法。FDAに認められ注目されています。'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
