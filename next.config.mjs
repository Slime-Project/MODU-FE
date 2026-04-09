/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['shopping-phinf.pstatic.net', 'searchad-phinf.pstatic.net']
  },
  typescript: {
    tsconfigPath: './tsconfig.build.json'
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }]
    });

    return config;
  }
};

export default nextConfig;
