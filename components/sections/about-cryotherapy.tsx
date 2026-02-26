import Image from "next/image"
import { Snowflake } from "lucide-react"

export function AboutCryotherapy() {
  return (
    <section id="about" className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            What is Fat Freezing
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-balance">
            {"脂肪細胞そのものに"}
            <br />
            {"アプローチする方法"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Mechanism illustration / device photo */}
          <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
            <Image
              src="/placeholder.svg?height=600&width=480"
              alt="脂肪冷却のメカニズム図解 - 脂肪細胞を冷却し自然に代謝・排出させる仕組み"
              fill
              className="object-cover"
            />
          </div>

          {/* Text content */}
          <div className="bg-background rounded-2xl p-8 md:p-10">
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-6">
              {"脂肪には、「落ちやすい脂肪」と「落ちにくい脂肪」があります。"}
            </p>
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-8">
              {"脂肪を4\u00B0Cに冷却し凍らせることで、脂肪細胞を減少させる痩身方法です。冷却された脂肪細胞は老廃物となり、自然に代謝、排泄されることで、痩身効果を得るだけでなく、リバウンドし難いという特徴もあります。"}
            </p>

            <div className="flex items-start gap-4 bg-muted/50 rounded-xl p-6">
              <Snowflake className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm mb-1">{"脂肪冷却とは"}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {"脂肪を冷却して新陳代謝を促し痩せる、アメリカ発祥の痩身法。FDAに認められ注目されています。"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
