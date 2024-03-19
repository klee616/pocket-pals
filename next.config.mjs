/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n :{
    locales: ["en", "zh"],
    defaultLocale: "en",
    localeDetection:false
  }
};

export default nextConfig;
