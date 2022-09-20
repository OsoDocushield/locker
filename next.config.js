/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
  env: {
    NETWORK_ID: process.env.NETWORK_ID,
  },
}

module.exports = nextConfig
