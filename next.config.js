const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [path.resolve(__dirname, 'svg-to-component-loader.js')],
    });

    // Ensure path aliases work
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/public': path.resolve(__dirname, 'public'),
    };

    return config;
  },
  turbopack: {
    root: __dirname,
    resolveAlias: {
      '@/public': './public',
    },
    rules: {
      '*.svg': {
        loaders: ['./svg-to-component-loader.js'],
        as: '*.js',
      },
    },
  },
  staticPageGenerationTimeout: 300,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};
