import { withPayload } from '@payloadcms/next/withPayload'
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: false
  },
  // async redirects() {
  //   return [
  //     {
  //       // Redirect only from `/` when `re-product-id` query parameter is present
  //       source: '/',
  //       has: [
  //         {
  //           type: 'query',
  //           key: 're-product-id',
  //         },
  //       ],
  //       destination: '/booking?re-product-id=:re-product-id',
  //       permanent: true, // Temporary redirect (302)
  //     }
  //   ];
  // },
}

export default withPayload(nextConfig)
