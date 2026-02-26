"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=1200&width=1920"
          alt="vieru サロンの洗練された内観"
          fill
          className="object-cover"
          priority
        />
        {/* Warm overlay for text readability */}
        <div className="absolute inset-0 bg-[#FAF9F7]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F7]/40 via-transparent to-[#FAF9F7]/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center">
        {/* Brand name */}
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8">
          Fat Freezing Salon
        </p>

        {/* Main headline */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-balance mb-8 text-foreground">
          {"落ちない脂肪に、終止符を。"}
        </h1>

        {/* Sub copy */}
        <div className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6 space-y-1">
          <p>{"医療は怖い。でも、自己流では変わらない。"}</p>
          <p className="mt-2">{"そんなあなたのための、"}</p>
          <p className="font-medium text-foreground">
            {'"安心して結果を出す"脂肪冷却サロン。'}
          </p>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs md:text-sm text-muted-foreground mb-10">
          <span className="border border-border bg-background/60 backdrop-blur-sm rounded-full px-3 py-1">
            {"施術2万件以上の実績"}
          </span>
          <span className="border border-border bg-background/60 backdrop-blur-sm rounded-full px-3 py-1">
            {"完全個室"}
          </span>
          <span className="border border-border bg-background/60 backdrop-blur-sm rounded-full px-3 py-1">
            {"都度払い制"}
          </span>
          <span className="border border-border bg-background/60 backdrop-blur-sm rounded-full px-3 py-1">
            {"コース勧誘なし"}
          </span>
          <span className="border border-border bg-background/60 backdrop-blur-sm rounded-full px-3 py-1">
            {"男女利用可"}
          </span>
        </div>

        {/* CTA */}
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
        >
          {"初回92%OFFキャンペーンを見る"}
        </a>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() =>
          document
            .getElementById("concerns")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground z-10"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  )
}
