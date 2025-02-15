import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wallet, BarChart2, Newspaper, Users } from "lucide-react"
import Link from "next/link"

export function QuickAccessMenu() {
  const menuItems = [
    { icon: Wallet, label: "Rich List", href: "/rich-list" },
    { icon: BarChart2, label: "Charts", href: "/charts" },
    { icon: Newspaper, label: "News", href: "/news" },
    { icon: Users, label: "Community", href: "/community" },
  ]

  return (
    <Card className="mb-8 bg-white/50 dark:bg-gray-800/50 border-[#c2a633]/20 dark:border-[#f4d67a]/20">
      <CardContent className="p-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href} passHref>
              <Button
                variant="outline"
                className="w-full h-full flex flex-col items-center justify-center py-4 border-[#c2a633] text-[#c2a633] hover:bg-[#c2a633] hover:text-white dark:border-[#f4d67a] dark:text-[#f4d67a] dark:hover:bg-[#f4d67a] dark:hover:text-gray-900"
              >
                <item.icon className="h-6 w-6 mb-2" />
                <span>{item.label}</span>
              </Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

