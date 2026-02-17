"use client"

import { useState, useEffect } from "react"
import { MessageCircle, ExternalLink } from "lucide-react"

export function StickyFooter() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <a
            href="#"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-[#06C755] text-[#FFFFFF] px-4 py-2.5 rounded-full text-xs font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" />
            <span>LINE</span>
          </a>
          <a
            href="#"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-foreground text-background px-4 py-2.5 rounded-full text-xs font-semibold hover:opacity-90 transition-opacity"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>{'ホットペッパー'}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
