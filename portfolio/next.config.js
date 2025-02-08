/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  images: {
    unoptimized: true
  },
  trailingSlash: true, // Ensure trailing slashes for all paths
}

export default nextConfig
