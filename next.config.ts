/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sustenancelanka.com',  // Your specific domain
        port: '',
        pathname: '/**',
      },
      // Add other domains you use, for example:
      // {
      //   protocol: 'https',
      //   hostname: 'images.unsplash.com',
      // },
    ],
  },
};

module.exports = nextConfig;