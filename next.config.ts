import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/AF-site',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
