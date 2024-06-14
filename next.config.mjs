/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.freepik.com", "upload.wikimedia.org"],
  },
  env: {
    API_SECRET: process.env.API_SECRET,
    API_KEY_FIREBASE: process.env.API_KEY_FIREBASE,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN_FIREBASE,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
  },
};

export default nextConfig;
