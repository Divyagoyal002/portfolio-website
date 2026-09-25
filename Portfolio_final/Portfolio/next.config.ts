import type { NextConfig } from "next";

// The site is now a single page; old routes redirect to their sections.
const sections = ["about", "experience", "projects", "contact"];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return sections.map((s) => ({
      source: `/${s}`,
      destination: `/#${s === "experience" ? "work" : s}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
