// /** @type {import('next').NextConfig} */
// const nextConfig = {};

export default {
    swcMinify: true, // Use SWC for minification
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.cache = false; // Disable webpack caching
      }
      config.ignoreWarnings = [/typescript/];
      return config;
    },
  };
  