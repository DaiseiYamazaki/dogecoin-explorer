"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CuboidIcon as Cube, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

// モックデータ - 実際の実装では外部APIからデータを取得する
const blocks = Array.from({ length: 100 }, (_, i) => ({
  id: 4859910 - i,
  transactions: Math.floor(Math.random() * 1000) + 1,
  miner: `D${Math.random().toString(36).substr(2, 9)}`,
  timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
}))

export default function BlocksPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const blocksPerPage = 10
  const totalPages = Math.ceil(blocks.length / blocksPerPage)

  const getCurrentPageBlocks = () => {
    const startIndex = (currentPage - 1) * blocksPerPage
    return blocks.slice(startIndex, startIndex + blocksPerPage)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#c2a633]">Latest Blocks</h1>
      <Card className="hover-card bg-white/50 border-[#c2a633]/20">
        <CardHeader>
          <CardTitle className="text-[#c2a633] font-medium flex items-center">
            <Cube className="mr-2 h-4 w-4" />
            Blocks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {getCurrentPageBlocks().map((block) => (
              <div
                key={block.id}
                className="flex items-center justify-between py-2 border-b border-[#c2a633]/20 hover:bg-[#c2a633]/5 transition-colors rounded px-2"
              >
                <div>
                  <Link href={`/block/${block.id}`} className="font-medium text-[#c2a633] hover:underline">
                    Block #{block.id}
                  </Link>
                  <div className="text-sm text-gray-600">{block.transactions} transactions</div>
                </div>
                <div className="text-right">
                  <div className="text-sm">
                    Miner: {block.miner.slice(0, 6)}...{block.miner.slice(-4)}
                  </div>
                  <div className="text-xs text-gray-600">{new Date(block.timestamp).toLocaleString()}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-4">
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="bg-[#c2a633] hover:bg-[#c2a633]/90 text-white"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <span className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="bg-[#c2a633] hover:bg-[#c2a633]/90 text-white"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

