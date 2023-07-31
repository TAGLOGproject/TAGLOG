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
  images: {
    domains: ['velog.velcdn.com'], // 이미지 호스트 이름 추가
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
