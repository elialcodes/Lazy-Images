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

// module.exports = nextConfig;

// // next.config.js
// const isProd = process.env.NODE_ENV === 'production';

// module.exports = {
//   reactStrictMode: true,
//   swcMinify: true,
//   output: 'export',
//   distDir: 'out',
//   assetPrefix: isProd ? './' : '',
//   images: {
//     unoptimized: true,
//   },
//   trailingSlash: true, // Esto ayuda a manejar rutas y archivos correctamente en GitHub Pages
// };
