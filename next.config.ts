import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jqqmozweetttsnmpovgf.supabase.co', // Domain Supabase kamu
        port: '',
        pathname: '/**', // Izinkan semua path
      },
    ],
  },
};

export default nextConfig;
