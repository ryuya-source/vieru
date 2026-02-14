"use client"

import { Star } from "lucide-react"
import { useState } from "react"

const reviews = [
  {
    name: "N.S さん",
    age: "40代・女性・会社員",
    rating: 5,
    text: "初めての脂肪冷却でしたが、痛みもほぼなく、リラックスして施術を受けられました。スタッフの方の丁寧なカウンセリングにも安心感がありました。2ヶ月経ってウエストが明らかにスッキリし、周りからも気づかれるようになりました。",
    date: "2025.12",
    coupon: true,
  },
  {
    name: "A.T さん",
    age: "30代・女性・主婦",
    rating: 5,
    text: "ジムに通っても落ちなかった下腹部の脂肪が気になっていました。3回の施術で-4cmの変化があり、本当に嬉しいです。完全個室なのでプライバシーも守られ、通いやすいです。",
    date: "2025.11",
    coupon: true,
  },
  {
    name: "K.M さん",
    age: "50代・男性・自営業",
    rating: 5,
    text: "男性でも気軽に通えるのが良いですね。コース勧誘が一切ないのも信頼できます。都度払いなので、自分のペースで通えるのが最大の魅力です。お腹周りがすっきりしてきました。",
    date: "2026.01",
    coupon: false,
  },
]

export function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="reviews" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-balance">
            {'お客様の声'}
          </h2>

          {/* Rating summary */}
          <div className="inline-flex items-center gap-2 bg-card rounded-full px-5 py-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
              ))}
            </div>
            <span className="text-sm font-medium">{'5.00'}</span>
            <span className="text-xs text-muted-foreground">{'(21件の口コミ)'}</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="space-y-4 mb-8">
          {reviews.map((review, index) => (
            <button
              key={review.name}
              onClick={() => setActiveIndex(index)}
              className={`w-full text-left rounded-2xl p-6 md:p-8 transition-all ${
                activeIndex === index
                  ? "bg-card ring-1 ring-border"
                  : "bg-card/50 opacity-70 hover:opacity-100"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="font-medium text-sm">{review.name}</span>
                  <span className="text-xs text-muted-foreground ml-2">{review.age}</span>
                </div>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {review.text}
              </p>
              {review.coupon && (
                <span className="inline-block mt-3 text-xs bg-secondary rounded-full px-3 py-1 text-muted-foreground">
                  {'クーポン利用'}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
          >
            {'口コミ一覧を見る'}
          </a>
        </div>
      </div>
    </section>
  )
}
