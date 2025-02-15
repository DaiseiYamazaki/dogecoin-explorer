import { NextResponse } from "next/server"

export async function GET() {
  // ここで実際のAPIからデータを取得します
  // この例ではダミーデータを返しています
  const blocks = [
    { height: 4321000, hash: "0x...", timestamp: new Date().toISOString() },
    { height: 4320999, hash: "0x...", timestamp: new Date().toISOString() },
    // ... more blocks
  ]

  return NextResponse.json(blocks)
}

