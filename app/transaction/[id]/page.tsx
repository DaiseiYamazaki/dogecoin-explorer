import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRightLeft } from "lucide-react"
import Link from "next/link"

// モックデータ - 実際の実装では外部APIからデータを取得する
const getTransactionData = (id: string) => ({
  id,
  from: `D${Math.random().toString(36).substr(2, 9)}`,
  to: `D${Math.random().toString(36).substr(2, 9)}`,
  amount: (Math.random() * 1000).toFixed(2),
  fee: (Math.random() * 0.1).toFixed(4),
  timestamp: new Date().toISOString(),
  blockNumber: Math.floor(Math.random() * 1000000) + 4000000,
  confirmations: Math.floor(Math.random() * 100) + 1,
})

export default function TransactionPage({ params }: { params: { id: string } }) {
  const transaction = getTransactionData(params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#c2a633]">Transaction Details</h1>
      <Card className="hover-card bg-white/50 border-[#c2a633]/20">
        <CardHeader>
          <CardTitle className="text-[#c2a633] font-medium flex items-center">
            <ArrowRightLeft className="mr-2 h-4 w-4" />
            Transaction {transaction.id}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">From</h3>
                <Link href={`/address/${transaction.from}`} className="text-[#c2a633] hover:underline">
                  {transaction.from}
                </Link>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">To</h3>
                <Link href={`/address/${transaction.to}`} className="text-[#c2a633] hover:underline">
                  {transaction.to}
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Amount</h3>
                <p className="font-mono">{transaction.amount} DOGE</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Fee</h3>
                <p className="font-mono">{transaction.fee} DOGE</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Timestamp</h3>
              <p>{new Date(transaction.timestamp).toLocaleString()}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Block</h3>
                <Link href={`/block/${transaction.blockNumber}`} className="text-[#c2a633] hover:underline">
                  {transaction.blockNumber}
                </Link>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Confirmations</h3>
                <p>{transaction.confirmations}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

