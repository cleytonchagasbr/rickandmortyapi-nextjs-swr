/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const images = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'rickandmortyapi.com',
      pathname: '/api/character/avatar/**',
    },
  ],
}

module.exports = {
  nextConfig,
  images,
}
