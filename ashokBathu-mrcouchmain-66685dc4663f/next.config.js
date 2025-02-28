// const { i18n } = require("./next-i18next.config");

module.exports = {
  // i18n,
  devIndicators: {},
  publicRuntimeConfig: {
    // Available on both server and client
    theme: "DEFAULT",
    currency: "INR",
  },
  images: {
    formats:['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '3.0.78.116',
        port: '8080',
        pathname: '**',
      },
    ],
  },
};

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer({
//   i18n,
//   devIndicators: {},
//   publicRuntimeConfig: {
//     // Available on both server and client
//     theme: "DEFAULT",
//     currency: "USD",
//   },
// });
