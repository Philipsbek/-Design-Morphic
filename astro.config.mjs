import { defineConfig } from 'astro/config';

export default defineConfig({
  server: { port: 4333, host: true },
  image: {
    domains: ['picsum.photos'],
    remotePatterns: [{ protocol: 'https' }],
  },
});
