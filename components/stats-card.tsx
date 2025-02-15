import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string
  subValue?: string
  trend?: {
    value: string
    isPositive: boolean
  }
  icon?: LucideIcon
  className?: string
}

export function StatsCard({ title, value, subValue, trend, icon: Icon, className }: StatsCardProps) {
  return (
    <Card className={cn("hover-card bg-white border-[#c2a633]/20 transition-all duration-300", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
        {Icon && (
          <div className="p-2 bg-[#c2a633]/10 rounded-full border border-[#c2a633]/20">
            <Icon className="h-5 w-5 text-[#c2a633]" aria-hidden="true" />
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-xl font-bold text-[#c2a633] font-mono" aria-label={`${title}: ${value}`}>
          {value}
        </div>
        {trend && (
          <div className={cn("text-sm", trend.isPositive ? "text-green-600" : "text-red-600")}>{trend.value}</div>
        )}
        {subValue && <div className="text-gray-600 text-sm">{subValue}</div>}
      </CardContent>
    </Card>
  )
}

