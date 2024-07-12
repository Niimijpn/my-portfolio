/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    domains: ["scrapbox.io"],
    loader: "default",
    path: "/_next/image",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scrapbox.io",
        port: "",
        pathname: "/scrapbox.io/**",
      },
    ],
  },
};

export default nextConfig;
