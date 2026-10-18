/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  poweredByHeader: false, // don't advertise the framework in response headers
  experimental: {
    // The project lives in a OneDrive-synced folder, where the on-by-default dev cache
    // served stale CSS after edits. Dev starts a little slower without it.
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
