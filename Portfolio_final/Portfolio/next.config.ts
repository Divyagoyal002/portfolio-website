
        import type { NextConfig } from "next";

        const nextConfig: NextConfig = {
           images: {
           dangerouslyAllowSVG: true,
           domains: ['https://placehold.co/','placehold.co', 'https://unsplash.com/','https://images.unsplash.com/','images.unsplash.com'],
           },
          eslint: {
            ignoreDuringBuilds: true,
          },

         };

          export default nextConfig;
            