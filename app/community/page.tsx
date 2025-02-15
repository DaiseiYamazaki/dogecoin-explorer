import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#c2a633] text-center tracking-tight">Community</h1>
        <Card className="max-w-2xl mx-auto hover-card bg-white/50 border-[#c2a633]/20">
          <CardHeader>
            <CardTitle className="text-[#c2a633]">Coming Soon</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              We're building a space for the Dogecoin community. Check back soon for updates!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

