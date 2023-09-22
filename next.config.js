/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  experimental: {
    appDir: true,
    esmExternals: 'loose',
    serverComponentsExternalPackages: ['mongoose'],
  },
  images: {
    domains: [
      'taglog-image-uploader.s3.ap-northeast-2.amazonaws.com',
      'taglog-image-uploader.s3.amazonaws.com',
    ],
  },
  webpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.experiments = { ...config.experiments, topLevelAwait: true };
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
