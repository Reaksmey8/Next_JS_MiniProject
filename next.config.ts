/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.bing.net', // This covers tse4.mm.bing.net and other subdomains
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;