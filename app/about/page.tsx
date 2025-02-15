import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Twitter } from "lucide-react"
import Link from "next/link"
import { HumanSilhouetteIcon } from "@/components/human-silhouette-icon"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#c2a633] dark:text-[#f4d67a] text-center tracking-tight">
        About the Developer
      </h1>
      <div className="max-w-3xl mx-auto">
        <Card className="hover-card bg-white/50 dark:bg-gray-800/50 border-[#c2a633]/20 dark:border-[#f4d67a]/20">
          <CardHeader>
            <div className="flex items-center space-x-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#c2a633] dark:border-[#f4d67a] bg-[#c2a633]/10 dark:bg-[#f4d67a]/10 flex items-center justify-center">
                <HumanSilhouetteIcon className="w-16 h-16 text-[#c2a633] dark:text-[#f4d67a]" />
              </div>
              <div>
                <CardTitle className="text-2xl text-[#c2a633] dark:text-[#f4d67a]">Daisei Yamazaki</CardTitle>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Blockchain Developer & Dogecoin Enthusiast</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-[#c2a633] dark:text-[#f4d67a] mb-2">About Me</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate blockchain developer with a special interest in cryptocurrencies, particularly
                Dogecoin. Currently learning Python, Java, and JavaScript to expand my development skills. I believe in
                the power of community-driven development and am actively looking to collaborate on Dogecoin-related
                projects.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#c2a633] dark:text-[#f4d67a] mb-2">Projects</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">DogeScan</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    A modern blockchain explorer for Dogecoin, making it easier for everyone to explore and understand
                    the Dogecoin blockchain.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#c2a633] dark:text-[#f4d67a] mb-2">Connect with Me</h2>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/DaiseiYamazaki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#c2a633] dark:text-gray-300 dark:hover:text-[#f4d67a] transition-colors"
                >
                  <Github className="w-6 h-6" />
                  <span className="sr-only">GitHub Profile</span>
                </Link>
                <Link
                  href="https://x.com/dgyamazaki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#c2a633] dark:text-gray-300 dark:hover:text-[#f4d67a] transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                  <span className="sr-only">Twitter Profile</span>
                </Link>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#c2a633]/20 dark:border-[#f4d67a]/20">
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                Want to collaborate on Dogecoin projects? Feel free to reach out through GitHub or Twitter!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

