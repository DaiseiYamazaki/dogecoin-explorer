/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["example.com"], // 必要に応じて画像ドメインを追加
  },
  // その他の設定をここに追加
}

module.exports = nextConfig

