/** @type {import('next').NextConfig} */

// Mendeteksi apakah sistem sedang di-build oleh GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  // Hanya gunakan mode export dan basePath jika sedang di-build di GitHub
  output: isGithubActions ? 'export' : undefined,
  basePath: isGithubActions ? '/internal-portal' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;