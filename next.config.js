/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      output: 'export',
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'cdn2.thecatapi.com',
            port: '',
            pathname: '/images/**',
         },
      ],
   },
};

module.exports = nextConfig;
