import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    basePath: process.env.ENV === 'dev' ? '' : '/AF-site',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
