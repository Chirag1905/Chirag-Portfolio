/** @type {import('next').NextConfig} */

import dotenv from 'dotenv';

const res = dotenv.config({
  path: "./.env",
});

const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  env: {
    SECRET_KEY: res.parsed.SECRET_KEY,
  },
};
export default nextConfig;
