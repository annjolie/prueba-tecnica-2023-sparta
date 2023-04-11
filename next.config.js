const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const imageLoader = require('./scripts/webpack/imageLoader.js');
const svgLoader = require('./scripts/webpack/svgLoader.js');

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  fileExtensions: ['jpg', 'jpeg', 'png', 'webp'],
  webpack(config) {
    svgLoader(config);
    imageLoader(config);

    return config;
  },
  images: {
    // This avoids having issues with img tag src parameter expected types
    disableStaticImages: true
  },
  eslint: {
    // We don't lint during the build because GitHub actions performs its own lint step
    ignoreDuringBuilds: true
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
});

module.exports = nextConfig;
