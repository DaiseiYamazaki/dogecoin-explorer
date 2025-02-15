import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
      <div className="w-8 h-8 rounded-full bg-[#c2a633] flex items-center justify-center" aria-hidden="true">
        <span className="text-white font-bold text-lg">D</span>
      </div>
      <span className="font-display text-xl font-bold tracking-tight text-[#c2a633]" aria-label="DogeScan">
        DogeScan
      </span>
    </Link>
  )
}

