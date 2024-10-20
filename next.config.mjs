import { withPayload } from '@payloadcms/next/withPayload'
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: false
  }
}

export default withPayload(nextConfig)
