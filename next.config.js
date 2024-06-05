/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  distDir: 'out',
  assetPrefix: './',
  images: {
    unoptimized: true,
  },
};
