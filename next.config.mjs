/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

const nextConfig = {
    ...withPWA({
        dest: "public",
        register: true,
        skipWating: true,
    }),
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
                pathname: "**"
            },
        ],
    },
};

export default nextConfig;