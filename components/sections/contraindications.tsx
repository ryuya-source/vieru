"use client"

import { useState } from "react"
import { AlertTriangle, ChevronDown } from "lucide-react"

const items = [
  "20歳未満、60歳以上のお客様",
  "心臓疾患のある方",
  "アレルギー体質の方",
  "皮膚疾患のある方",
  "体調の優れない方",
  "妊娠中の方、または妊娠の可能性のある方",
  "授乳中の方",
  "心臓疾患（ペースメーカーをご利用の方）",
  "飲酒をされている方",
  "最近外科手術を受けた方",
  "リンパ浮腫の方",
  "疾病（癌、糖尿病、高血圧症、冠動脈症、腎不全など）にかかっている方",
  "病気等で通院をされている方",
  "お薬を処方されている方",
  "血管に疾病をお持ちの方（静脈瘤など）",
  "アトピー性皮膚炎の方",
  "ヘルニアの方",
  "重度の糖尿病の方",
  "1年以内に手術を受けられた部位への施術",
  "体内に金属（チタンなど）が入ってる部位への施術",
  "皮膚の感覚が正常に機能しない箇所への施術",
]

const PREVIEW_COUNT = 5

export function Contraindications() {
  const [isExpanded, setIsExpanded] = useState(false)

  const visibleItems = isExpanded ? items : items.slice(0, PREVIEW_COUNT)

  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Contraindications
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-balance">
            {"禁忌事項"}
          </h2>
        </div>

        <div className="bg-card rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-3 mb-6">
            <AlertTriangle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              {"下記に該当するお客様・部位への施術はお断りしております。予めご了承ください。"}
            </p>
          </div>

          <ul className="space-y-3">
            {visibleItems.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground shrink-0 mt-1.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {!isExpanded && (
            <div className="relative -mt-4 pt-10 bg-gradient-to-t from-card via-card to-transparent">
              <div className="text-center">
                <button
                  onClick={() => setIsExpanded(true)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
                >
                  {"全文はこちら"}
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {isExpanded && (
            <div className="text-center mt-6">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:opacity-70 transition-opacity"
              >
                {"閉じる"}
                <ChevronDown className="w-4 h-4 rotate-180" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
