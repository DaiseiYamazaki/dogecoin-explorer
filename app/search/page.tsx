import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, CuboidIcon as Cube, LinkIcon as ChainLink } from "lucide-react"
import { SittingDogeIcon } from "@/components/sitting-doge-icon"

// Mock search function (replace with actual API call in production)
const searchBlockchain = (query: string) => {
  // Mock data
  const results = [
    { type: "address", id: "DG83d9f54e68", balance: "1000.00 DOGE" },
    {
      type: "transaction",
      id: "0x83d9f54e68",
      amount: "50.00 DOGE",
      block: "4859910",
      timestamp: "2023-05-01 12:34:56",
    },
    { type: "block", id: "4859910", transactions: 150, timestamp: "2023-05-01 12:34:56" },
  ]
  return results.filter(
    (item) =>
      item.id.toLowerCase().includes(query.toLowerCase()) || item.type.toLowerCase().includes(query.toLowerCase()),
  )
}

export default function SearchPage({ searchParams }: { searchParams: { q: string } }) {
  const query = searchParams.q || ""
  const results = searchBlockchain(query)

  const renderResultCard = (result: any) => {
    switch (result.type) {
      case "address":
        return (
          <Card className="hover-card bg-white/50 border-[#c2a633]/20 p-4">
            <CardContent className="flex items-center space-x-4 p-0">
              <div className="bg-[#c2a633]/10 p-3 rounded-full border border-[#c2a633]/20">
                <SittingDogeIcon className="w-8 h-8 text-[#c2a633]" />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Address</div>
                <p className="font-mono text-gray-900">{result.id}</p>
                <p className="font-bold mt-1 text-[#c2a633]">{result.balance}</p>
              </div>
            </CardContent>
          </Card>
        )
      case "transaction":
        return (
          <Card className="hover-card bg-white/50 border-[#c2a633]/20 p-4">
            <CardContent className="flex items-center space-x-4 p-0">
              <div className="bg-[#c2a633]/10 p-3 rounded-full border border-[#c2a633]/20">
                <Cube className="w-8 h-8 text-[#c2a633]" />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Transaction</div>
                <p className="font-mono text-gray-900">{result.id}</p>
                <p className="font-bold mt-1 text-[#c2a633]">{result.amount}</p>
                <p className="text-xs text-gray-500">
                  Block: {result.block} | {result.timestamp}
                </p>
              </div>
            </CardContent>
          </Card>
        )
      case "block":
        return (
          <Card className="hover-card bg-white/50 border-[#c2a633]/20 p-4">
            <CardContent className="flex items-center space-x-4 p-0">
              <div className="bg-[#c2a633]/10 p-3 rounded-full border border-[#c2a633]/20">
                <ChainLink className="w-8 h-8 text-[#c2a633]" />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Block</div>
                <p className="font-mono text-gray-900">#{result.id}</p>
                <p className="font-bold mt-1 text-[#c2a633]">{result.transactions} transactions</p>
                <p className="text-xs text-gray-500">{result.timestamp}</p>
              </div>
            </CardContent>
          </Card>
        )
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#c2a633]">Search Results</h1>

      <div className="mb-8">
        <form className="flex gap-2">
          <Input
            type="text"
            placeholder="Search by Address / Txn Hash / Block"
            className="flex-grow bg-white/80 border-[#c2a633]/20"
            defaultValue={query}
            name="q"
          />
          <Button type="submit" className="bg-[#c2a633] hover:bg-[#c2a633]/90 text-white">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </form>
      </div>

      {results.length > 0 ? (
        <div className="space-y-4">
          {results.map((result, index) => (
            <div key={index}>{renderResultCard(result)}</div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-600">No results found for "{query}"</p>
        </div>
      )}
    </div>
  )
}

