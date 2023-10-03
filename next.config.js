/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        logging: 'verbose',
      },
      images:{
        domains: ["cdn.sanity.io"]
      }
}

module.exports = nextConfig
