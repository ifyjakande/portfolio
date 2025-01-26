/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  optimizeFonts: true,
  async redirects() {
    return [
      // Redirect URLs with trailing slashes
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
      // Redirect www to non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.ifeakande.com',
          },
        ],
        destination: 'https://ifeakande.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 