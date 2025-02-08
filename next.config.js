/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/<repository-name>',
    images: {
      unoptimized: true,
    },
  }
  
  module.exports = nextConfig
