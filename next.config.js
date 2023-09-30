/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["tsx", "md"],
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.jameslittle.me",
      },
    ],
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
