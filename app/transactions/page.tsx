"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRightLeft, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

// モックデータ - 実際の実装では外部APIからデータを取得する
const transactions = Array.from({ length: 100 }, (_, i) => ({
  id: `0x${Math.random().toString(16).substr(2, 8)}`,
  from: `D${Math.random().toString(36).substr(2, 9)}`,
  to: `D${Math.random().toString(36).substr(2, 9)}`,
  amount: (Math.random() * 1000).toFixed(2),
  timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
}))

export default function TransactionsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const transactionsPerPage = 10
  const totalPages = Math.ceil(transactions.length / transactionsPerPage)

  const getCurrentPageTransactions = () => {
    const startIndex = (currentPage - 1) * transactionsPerPage
    return transactions.slice(startIndex, startIndex + transactionsPerPage)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#c2a633]">Latest Transactions</h1>
      <Card className="hover-card bg-white/50 border-[#c2a633]/20">
        <CardHeader>
          <CardTitle className="text-[#c2a633] font-medium flex items-center">
            <ArrowRightLeft className="mr-2 h-4 w-4" />
            Transactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {getCurrentPageTransactions().map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between py-2 border-b border-[#c2a633]/20 hover:bg-[#c2a633]/5 transition-colors rounded px-2"
              >
                <div>
                  <Link href={`/transaction/${tx.id}`} className="font-medium text-[#c2a633] hover:underline">
                    {tx.id}
                  </Link>
                  <div className="text-sm text-gray-600">
                    From: {tx.from.slice(0, 6)}...{tx.from.slice(-4)} To: {tx.to.slice(0, 6)}...{tx.to.slice(-4)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{tx.amount} DOGE</div>
                  <div className="text-xs text-gray-600">{new Date(tx.timestamp).toLocaleString()}</div>
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

