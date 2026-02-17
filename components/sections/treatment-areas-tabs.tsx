"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export type TreatmentArea = {
  name: string
  size: string
  description: string
}

type TreatmentAreasTabsProps = {
  frontAreas: TreatmentArea[]
  backAreas: TreatmentArea[]
}

function AreaCard({
  area,
}: {
  area: TreatmentArea
}) {
  return (
    <div
      key={`${area.name}-${area.size}`}
      className="flex items-start gap-3 bg-card rounded-xl p-4"
    >
      <span className="shrink-0 mt-0.5 text-[10px] font-bold bg-muted text-muted-foreground w-6 h-6 rounded-full flex items-center justify-center">
        {area.size}
      </span>
      <div>
        <p className="text-sm font-medium">{area.name}</p>
        <p className="text-xs text-muted-foreground mt-0.5">
          {area.description}
        </p>
      </div>
    </div>
  )
}

export function TreatmentAreasTabs({ frontAreas, backAreas }: TreatmentAreasTabsProps) {
  return (
    <Tabs defaultValue="front" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-6 h-11 rounded-lg bg-muted p-1">
        <TabsTrigger value="front" className="rounded-md">
          前面
        </TabsTrigger>
        <TabsTrigger value="back" className="rounded-md">
          背面
        </TabsTrigger>
      </TabsList>
      <TabsContent value="front" className="mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {frontAreas.map((area) => (
            <AreaCard key={`${area.name}-${area.size}`} area={area} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="back" className="mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {backAreas.map((area) => (
            <AreaCard key={`${area.name}-${area.size}`} area={area} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
