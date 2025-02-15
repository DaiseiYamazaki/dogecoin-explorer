"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRightLeft, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { KabosIcon } from "@/components/kabos-icon"

// モックデータ - 実際の実装では外部APIからデータを取得する
const getAddressData = (id: string) => ({
  id,
  balance: (Math.random() * 1000000).toFixed(2),
  totalReceived: (Math.random() * 2000000).toFixed(2),
  totalSent: (Math.random() * 1000000).toFixed(2),
  transactions: Array.from({ length: 50 }, (_, i) => ({
    id: `0x${Math.random().toString(16).substr(2, 8)}`,
    type: Math.random() > 0.5 ? "received" : "sent",
    amount: (Math.random() * 1000).toFixed(2),
    timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
  })),
})

export default function AddressPage({ params }: { params: { id: string } }) {
  const address = getAddressData(params.id)
  const [currentPage, setCurrentPage] = useState(1)
  const transactionsPerPage = 10
  const totalPages = Math.ceil(address.transactions.length / transactionsPerPage)

  const getCurrentPageTransactions = () => {
    const startIndex = (currentPage - 1) * transactionsPerPage
    return address.transactions.slice(startIndex, startIndex + transactionsPerPage)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#c2a633]">Address Details</h1>
      <Card className="hover-card bg-white/50 border-[#c2a633]/20 mb-8">
        <CardHeader>
          <CardTitle className="text-[#c2a633] font-medium flex items-center">
            <KabosIcon className="mr-2 h-6 w-6 text-[#c2a633]" />
            Address {address.id}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Balance</h3>
              <p className="font-mono text-lg">{address.balance} DOGE</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Total Received</h3>
              <p className="font-mono text-lg">{address.totalReceived} DOGE</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Total Sent</h3>
              <p className="font-mono text-lg">{address.totalSent} DOGE</p>
            </div>
          </div>
        </CardContent>
      </Card>

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
                  <div className="text-sm text-gray-600">{tx.type === "received" ? "Received" : "Sent"}</div>
                </div>
                <div className="text-right">
                  <div className={`font-medium ${tx.type === "received" ? "text-green-600" : "text-red-600"}`}>
                    {tx.type === "received" ? "+" : "-"}
                    {tx.amount} DOGE
                  </div>
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

