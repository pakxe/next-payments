import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/next-payments' : '',
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/next-payments' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
