/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/patientflow-automation',
  assetPrefix: '/patientflow-automation/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Disable static optimization for dynamic routes
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig
