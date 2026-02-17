import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Concerns } from "@/components/sections/concerns"
import { AboutCryotherapy } from "@/components/sections/about-cryotherapy"
import { Benefits } from "@/components/sections/benefits"
import { FutureVision } from "@/components/sections/future-vision"
import { Reviews } from "@/components/sections/reviews"
import { BeforeAfter } from "@/components/sections/before-after"
import { Reasons } from "@/components/sections/reasons"
import { TreatmentFlow } from "@/components/sections/treatment-flow"
import { Pricing } from "@/components/sections/pricing"
import { FAQ } from "@/components/sections/faq"

import { Contraindications } from "@/components/sections/contraindications"
import { StoreInfo } from "@/components/sections/store-info"
import { Footer } from "@/components/sections/footer"
import { StickyFooter } from "@/components/sections/sticky-footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Concerns />
        <AboutCryotherapy />
        <Benefits />
        <FutureVision />
        <Reviews />
        <BeforeAfter />
        <Reasons />
        <TreatmentFlow />
        <Pricing />
        <FAQ />
        <Contraindications />
        <StoreInfo />
      </main>
      <Footer />
      <StickyFooter />
    </>
  )
}
