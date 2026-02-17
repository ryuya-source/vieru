"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ArrowLeft } from "lucide-react"
import { faqs } from "@/lib/faq-data"

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {'トップに戻る'}
          </Link>
        </div>
      </header>

      <main className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              FAQ
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-balance">
              {'よくあるご質問'}
            </h1>
            <p className="text-sm text-muted-foreground mt-4">
              {`全${faqs.length}件`}
            </p>
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
                    <span className="text-muted-foreground mr-3">
                      {`Q${index + 1}.`}
                    </span>
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

          <p className="text-center text-sm text-muted-foreground mt-12">
            {'その他ご不明点などお気軽にご相談ください'}
          </p>

          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
              {'トップページに戻る'}
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
