const withMarkdoc = require("@markdoc/next.js");

/** @type {import('next').NextConfig} */
const nextConfig = withMarkdoc({ mode: "static" })({
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["tsx", "md"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.jameslittle.me"
      }
    ],
    unoptimized: true
  }
});

module.exports = nextConfig;
