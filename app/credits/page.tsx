import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CreditsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#c2a633] text-center tracking-tight">Credits</h1>
      <div className="max-w-3xl mx-auto">
        <Card className="mb-8 hover-card bg-white/50 border-[#c2a633]/20">
          <CardHeader>
            <CardTitle className="text-[#c2a633] font-medium">Contributors</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>John Doe - Lead Developer</li>
              <li>Jane Smith - UI/UX Designer</li>
              <li>Satoshi Nakamoto - Blockchain Consultant</li>
              <li>The entire Dogecoin community for their support and enthusiasm</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8 hover-card bg-white/50 border-[#c2a633]/20">
          <CardHeader>
            <CardTitle className="text-[#c2a633] font-medium">Technologies Used</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Next.js - React framework for building the web application</li>
              <li>Tailwind CSS - Utility-first CSS framework for styling</li>
              <li>shadcn/ui - UI component library</li>
              <li>Vercel - Hosting and deployment platform</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover-card bg-white/50 border-[#c2a633]/20">
          <CardHeader>
            <CardTitle className="text-[#c2a633] font-medium">Special Thanks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              We would like to express our gratitude to the creators and maintainers of Dogecoin, whose vision and
              dedication have made this project possible.
            </p>
            <p>
              To learn more about Dogecoin, visit the{" "}
              <Link
                href="https://dogecoin.com"
                className="text-[#c2a633] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                official Dogecoin website
              </Link>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

