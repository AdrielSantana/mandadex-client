/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "desafio-estagiarios-pokemon-api-production.up.railway.app",
      },
    ],
  },
};
