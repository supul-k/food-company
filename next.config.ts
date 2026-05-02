/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sustenancelanka.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'food-company-seven.vercel.app',
          },
        ],
        destination: 'https://sustenancelanka.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;