import { MessageCircle, ExternalLink } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Get Started
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-balance">
          {'まずは初回体験から'}
        </h2>

        <p className="font-serif text-lg md:text-xl mb-2">
          {'落ちない脂肪に、終止符を。'}
        </p>
        <p className="text-sm text-muted-foreground mb-10">
          {'安心して始められる92%OFFキャンペーン。'}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#06C755] text-[#FFFFFF] px-8 py-4 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-5 h-5" />
            {'LINEで予約する'}
          </a>
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <ExternalLink className="w-4 h-4" />
            {'ホットペッパーで予約する'}
          </a>
        </div>
      </div>
    </section>
  )
}
