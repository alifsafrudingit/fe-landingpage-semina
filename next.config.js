/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/pages/page",
      },
      {
        source: "/index",
        destination: "/_index",
      },
    ];
  },
};

module.exports = nextConfig;
