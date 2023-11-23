/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '',

      }
    ]
  }
}

module.exports = nextConfig
