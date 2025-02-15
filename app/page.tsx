import { Search, DollarSign, ArrowRightLeft, CuboidIcon as Cube } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { StatsCard } from "@/components/stats-card"
import { LiveDataFeed } from "@/components/live-data-feed"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { GlobalAdoptionMap } from "@/components/global-adoption-map"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-[#c2a633]/20 bg-white/50 sticky top-0 z-10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Logo />
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-[#c2a633] font-medium hover:text-[#c2a633]/80">
                  Home
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-[#c2a633]/80">
                  About
                </Link>
                <Link href="/credits" className="text-gray-600 hover:text-[#c2a633]/80">
                  Credits
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto mb-12 animate-in">
          <div className="flex flex-col items-center mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#c2a633] tracking-tight">DogeScan</h1>
            <form action="/search" className="w-full max-w-2xl flex gap-2" aria-label="Search blockchain">
              <div className="relative flex-1">
                <Input
                  name="q"
                  placeholder="Search by Address / Txn Hash / Block"
                  className="w-full bg-white/80 border-[#c2a633]/20 pl-4 pr-10 h-12 font-mono placeholder:font-sans"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <Button type="submit" className="bg-[#c2a633] hover:bg-[#c2a633]/90 text-white h-12 px-8 font-medium">
                Search
              </Button>
            </form>
          </div>
        </section>

        <LiveDataFeed />

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 animate-in"
          style={{ animationDelay: "0.1s" }}
        >
          <Link href="/price-chart" className="block">
            <StatsCard
              title="DOGE PRICE"
              value="$0.081"
              trend={{ value: "(+2.54%)", isPositive: true }}
              icon={DollarSign}
            />
          </Link>
          <Link href="/transactions" className="block">
            <StatsCard title="TRANSACTIONS (24H)" value="20.27 M" subValue="(33.8 TPS)" icon={ArrowRightLeft} />
          </Link>
          <Link href="/blocks" className="block">
            <StatsCard title="LAST BLOCK" value="4859910" subValue="12 secs ago" icon={Cube} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in" style={{ animationDelay: "0.2s" }}>
          <Card className="hover-card bg-white/50 border-[#c2a633]/20">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-[#c2a633] font-medium">Latest Blocks</CardTitle>
              <Button
                variant="outline"
                size="sm"
                className="border-[#c2a633] text-[#c2a633] hover:bg-[#c2a633] hover:text-white font-medium"
              >
                <Link href="/blocks">View All</Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4" aria-label="Latest blocks">
                {[1, 2, 3].map((block) => (
                  <div
                    key={block}
                    className="flex items-center justify-between py-2 border-b border-[#c2a633]/20 hover:bg-[#c2a633]/5 transition-colors rounded px-2"
                  >
                    <div>
                      <Link
                        href={`/block/${4859910 - block}`}
                        className="font-medium text-gray-800 font-mono hover:text-[#c2a633]"
                      >
                        Block #{4859910 - block}
                      </Link>
                      <div className="text-sm text-gray-600">{block * 12} secs ago</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Miner</div>
                      <Link
                        href={`/address/DPxyz...abc`}
                        className="text-[#c2a633] hover:underline cursor-pointer font-mono"
                      >
                        DPxyz...abc
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover-card bg-white/50 border-[#c2a633]/20">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-[#c2a633] font-medium">Latest Transactions</CardTitle>
              <Button
                variant="outline"
                size="sm"
                className="border-[#c2a633] text-[#c2a633] hover:bg-[#c2a633] hover:text-white font-medium"
              >
                <Link href="/transactions">View All</Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4" aria-label="Latest transactions">
                {[1, 2, 3].map((tx) => (
                  <div
                    key={tx}
                    className="flex items-center justify-between py-2 border-b border-[#c2a633]/20 hover:bg-[#c2a633]/5 transition-colors rounded px-2"
                  >
                    <div>
                      <Link
                        href={`/transaction/DG83d9f54e...68`}
                        className="font-medium text-[#c2a633] hover:underline cursor-pointer font-mono"
                      >
                        DG83d9f54e...68
                      </Link>
                      <div className="text-sm text-gray-600">{tx * 12} secs ago</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-800 font-mono">420.69 DOGE</div>
                      <div className="text-xs text-gray-600">≈ $34.07</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 animate-in" style={{ animationDelay: "0.3s" }}>
          <GlobalAdoptionMap />
        </div>
      </main>

      <footer className="mt-12 border-t border-[#c2a633]/20 py-8 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Logo />
            </div>
            <div className="text-gray-600 text-sm text-center md:text-right">
              <p className="font-medium">Powered by the Dogecoin community 🚀</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

