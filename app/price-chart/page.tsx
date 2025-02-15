"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { KabosIcon } from "@/components/kabos-icon"
import { motion } from "framer-motion"

// モックデータ - 実際の実装では外部APIからデータを取得する
const generateData = (days: number) => {
  const data = []
  let price = 0.08
  for (let i = days; i > 0; i--) {
    price += (Math.random() - 0.5) * 0.005
    data.push({
      date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      price: Number.parseFloat(price.toFixed(4)),
    })
  }
  return data
}

const timeRanges = [
  { label: "1D", days: 1 },
  { label: "1W", days: 7 },
  { label: "1M", days: 30 },
  { label: "3M", days: 90 },
  { label: "1Y", days: 365 },
  { label: "ALL", days: 1825 },
]

export default function PriceChartPage() {
  const [activeRange, setActiveRange] = useState("1W")
  const [data, setData] = useState(generateData(7))
  const [currentPrice, setCurrentPrice] = useState(data[data.length - 1].price)
  const [priceChange, setPriceChange] = useState({ value: 0, percentage: 0 })

  useEffect(() => {
    const range = timeRanges.find((r) => r.label === activeRange)
    const newData = generateData(range?.days || 7)
    setData(newData)
    setCurrentPrice(newData[newData.length - 1].price)
    const change = newData[newData.length - 1].price - newData[0].price
    const percentage = (change / newData[0].price) * 100
    setPriceChange({ value: change, percentage: percentage })
  }, [activeRange])

  const formatPrice = (price: number) => `$${price.toFixed(4)}`

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#c2a633]">DOGE Price Chart</h1>
      <Card className="hover-card bg-white/50 border-[#c2a633]/20">
        <CardHeader>
          <CardTitle className="text-[#c2a633] font-medium flex items-center">
            <KabosIcon className="w-6 h-6 mr-2" />
            DOGE/USD
          </CardTitle>
          <div className="flex space-x-2 mb-4">
            {timeRanges.map((range) => (
              <Button
                key={range.label}
                variant={activeRange === range.label ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveRange(range.label)}
                className={
                  activeRange === range.label
                    ? "bg-[#c2a633] hover:bg-[#c2a633]/90 text-white"
                    : "border-[#c2a633] text-[#c2a633] hover:bg-[#c2a633]/10"
                }
              >
                {range.label}
              </Button>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <motion.div
              key={currentPrice}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-[#c2a633]"
            >
              {formatPrice(currentPrice)}
            </motion.div>
            <div className={`text-sm ${priceChange.value >= 0 ? "text-green-600" : "text-red-600"}`}>
              {priceChange.value >= 0 ? "▲" : "▼"} {formatPrice(Math.abs(priceChange.value))} (
              {priceChange.percentage.toFixed(2)}%)
            </div>
          </div>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis
                  dataKey="date"
                  stroke="#718096"
                  tick={{ fill: "#718096" }}
                  tickFormatter={(value) => {
                    const date = new Date(value)
                    return `${date.getMonth() + 1}/${date.getDate()}`
                  }}
                />
                <YAxis
                  stroke="#718096"
                  tick={{ fill: "#718096" }}
                  tickFormatter={(value) => `$${value.toFixed(4)}`}
                  domain={["dataMin", "dataMax"]}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: "8px" }}
                  labelStyle={{ color: "#4a5568" }}
                  formatter={(value: number) => [`$${value.toFixed(4)}`, "Price"]}
                  labelFormatter={(label) => new Date(label).toLocaleDateString()}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#c2a633"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

