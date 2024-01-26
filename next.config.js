const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    scrollRestoration: true,
  },
  async redirects() {
    return [
      {
        source: "/index.php/:path*",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/new/:path*",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/default/:path*",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
