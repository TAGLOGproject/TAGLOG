/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  experimental: {
    appDir: true,
    esmExternals: 'loose',
    serverComponentsExternalPackages: ['mongoose'],
  },
  future: {
    webpack5: false, // 또는 false
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
