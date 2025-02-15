import { NextResponse } from "next/server"

export async function GET() {
  // 3秒の遅延を追加
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return NextResponse.json({
    message: "データの取得に成功しました",
  })
}

