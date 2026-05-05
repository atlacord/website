/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Replace 'atla-community' with your actual GitHub repo name
  basePath: '',
}

module.exports = nextConfig;