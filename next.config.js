/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en-US', 'ko', 'zh-cn', 'vi'],
    defaultLocale: 'ko', 
  },
  images: {
    domains: ["uploadthing.com", "lh3.googleusercontent.com"],

  },
  experimental: {
    appDir: true,
  },
  transpilePackages: [
    "react-syntax-highlighter",
    "swagger-client",
    "swagger-ui-react",
  ],
};

module.exports = nextConfig;
