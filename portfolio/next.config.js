/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove the leading slash for basePath and assetPrefix
  basePath: 'portfolio',
  assetPrefix: 'portfolio',
  trailingSlash: true,
}

module.exports = nextConfig
