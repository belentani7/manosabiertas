import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NEXT_OUTPUT_MODE === "netlify" ? undefined : "standalone",
  /* config options here */
  reactStrictMode: true,
  typescript: {
    // ignoreBuildErrors was previously `true`, which hides type errors and can ship
    // runtime bugs. Kept `false` to enforce type safety; fix any reported TS errors
    // instead of re-enabling this flag.
    ignoreBuildErrors: false,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // next/dynamic (ssr:false) + JSON-LD inject inline scripts;
              // framer-motion / next-themes use inline styles.
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              // All API calls (/api/chat, /api/cv/* ...) are same-origin.
              "connect-src 'self'",
              // Self-hosted next/font + app icons.
              "font-src 'self'",
              "img-src 'self' data: blob:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "worker-src 'self'",
              "manifest-src 'self'",
            ].join("; "),
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
