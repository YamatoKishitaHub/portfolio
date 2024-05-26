/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qsvaekstozdrvtdswyeh.supabase.co',
        port: '',
      },
    ],
  },
};

export default nextConfig;
