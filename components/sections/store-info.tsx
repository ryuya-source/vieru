import { MapPin, Phone, Clock } from "lucide-react"

const stores = [
  {
    name: "二子玉川店",
    address: "東京都世田谷区玉川3-12-11 Swich204",
    access: "二子玉川駅 徒歩3分",
    phone: "080-7050-0703",
  },
  {
    name: "自由が丘店",
    address: "東京都世田谷区奥沢 5-27-15 自由が丘ソレイユビル503",
    access: "自由が丘駅 南口 徒歩1分",
    phone: "090-4677-6298",
  },
]

export function StoreInfo() {
  return (
    <section id="stores" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Locations
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-balance">
            {'店舗案内'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stores.map((store) => (
            <div key={store.name} className="bg-card rounded-2xl p-6 md:p-8">
              <h3 className="font-serif text-xl font-semibold mb-5">{store.name}</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm leading-relaxed">{store.address}</p>
                    <p className="text-xs text-muted-foreground mt-1">{store.access}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                  <a
                    href={`tel:${store.phone}`}
                    className="text-sm hover:underline underline-offset-4"
                  >
                    {store.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
