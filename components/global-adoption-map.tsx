import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe } from "lucide-react"
import { DogeSilhouetteIcon } from "./doge-silhouette-icon"

export function GlobalAdoptionMap() {
  return (
    <Card className="hover-card bg-white/50 dark:bg-gray-800/50 border-[#c2a633]/20 dark:border-[#f4d67a]/20">
      <CardHeader>
        <CardTitle className="text-[#c2a633] dark:text-[#f4d67a] font-medium flex items-center">
          <DogeSilhouetteIcon className="w-6 h-6 mr-2" />
          Global Dogecoin Adoption
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center h-[300px]">
        <Globe className="w-24 h-24 text-[#c2a633] dark:text-[#f4d67a] opacity-50" />
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-center">Global adoption data coming soon!</p>
      </CardContent>
    </Card>
  )
}

