/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mtraor3.github.io' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/mtraor3.github.io' : '',
}

export default nextConfig
