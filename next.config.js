/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimisation images
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 jours
  },

  // Performance
  reactStrictMode: true,
  poweredByHeader: false,

  // Compression
  compress: true,

  // Prêt pour i18n (multilingue futur)
  // i18n: {
  //   locales: ["fr", "en"],
  //   defaultLocale: "fr",
  // },

  // Headers sécurité
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
