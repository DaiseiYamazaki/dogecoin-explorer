import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CuboidIcon as Cube } from "lucide-react"
import Link from "next/link"

// モックデータ - 実際の実装では外部APIからデータを取得する
const getBlockData = (id: string) => ({
  id: Number.parseInt(id),
  hash: `0x${Math.random().toString(16).substr(2, 64)}`,
  previousHash: `0x${Math.random().toString(16).substr(2, 64)}`,
  timestamp: new Date().toISOString(),
  transactions: Math.floor(Math.random() * 1000) + 1,
  miner: `D${Math.random().toString(36).substr(2, 9)}`,
  size: Math.floor(Math.random() * 1000000) + 100000,
  difficulty: Math.floor(Math.random() * 1000000000) + 1000000000,
})

export default function BlockPage({ params }: { params: { id: string } }) {
  const block = getBlockData(params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#c2a633]">Block Details</h1>
      <Card className="hover-card bg-white/50 border-[#c2a633]/20">
        <CardHeader>
          <CardTitle className="text-[#c2a633] font-medium flex items-center">
            <Cube className="mr-2 h-4 w-4" />
            Block #{block.id}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Block Hash</h3>
              <p className="font-mono break-all">{block.hash}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Previous Block Hash</h3>
              <Link href={`/block/${block.id - 1}`} className="font-mono text-[#c2a633] hover:underline break-all">
                {block.previousHash}
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Timestamp</h3>
                <p>{new Date(block.timestamp).toLocaleString()}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Transactions</h3>
                <p>{block.transactions}</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Miner</h3>
              <Link href={`/address/${block.miner}`} className="text-[#c2a633] hover:underline">
                {block.miner}
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Size</h3>
                <p>{block.size.toLocaleString()} bytes</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Difficulty</h3>
                <p>{block.difficulty.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

