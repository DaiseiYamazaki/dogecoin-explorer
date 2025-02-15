"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          <Link href="/" onClick={() => setOpen(false)} className="block py-2 text-lg font-medium">
            Home
          </Link>
          <Link href="/credits" onClick={() => setOpen(false)} className="block py-2 text-lg">
            Credits
          </Link>
          <Link href="/rich-list" onClick={() => setOpen(false)} className="block py-2 text-lg">
            Rich List
          </Link>
          <Link href="/charts" onClick={() => setOpen(false)} className="block py-2 text-lg">
            Charts
          </Link>
          <Link href="/news" onClick={() => setOpen(false)} className="block py-2 text-lg">
            News
          </Link>
          <Link href="/community" onClick={() => setOpen(false)} className="block py-2 text-lg">
            Community
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

