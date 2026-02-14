"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "施術中に痛みは感じますか？",
    answer:
      "施術中はほとんど痛みを感じません。施術部位にアプリケータを装着すると皮膚が吸引されるため、多少の違和感を感じることもありますが、数分で慣れるお客様が大半です。冷却を行う段階になるとほとんど痛みはございません。",
  },
  {
    question: "1回の施術で効果が得られますか？",
    answer:
      "初回施術から効果を実感頂いているお客様もおりますが、ご希望のボディラインに近づけるためには複数回の施術を推奨しております。再度同じ部位を施術する場合は最低4週間あける必要がございます。",
  },
  {
    question: "リバウンドしますか？",
    answer:
      "脂肪細胞の数自体が減少するため、施術部位のリバウンドの事例は少ないです。ただし、食べすぎや運動不足などによって施術効果が低くなることがあります。",
  },
  {
    question: "施術後に腫れや痛みは残りませんか？",
    answer:
      "施術直後は皮膚に赤みが残る場合がございますが、1週間〜10日ほどで徐々に引いていきます。",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            FAQ
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-balance">
            {'よくあるご質問'}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="bg-card rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm md:text-base font-medium pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          {'その他ご不明点などお気軽にご相談ください'}
        </p>
      </div>
    </section>
  )
}
