/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Since the repo is at mtraor3.github.io/portfolio
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  // Ensure trailing slashes are handled
  trailingSlash: true,
}

module.exports = nextConfig
