/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.jameslittle.me"
      }
    ],
    unoptimized: true
  }
};

module.exports = nextConfig;
