// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import bun from "@hedystia/astro-bun";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  adapter: bun(),
  site: 'https://www.grapkend.dev', // TODO: Add domain
  // base: '/graphkend',
  // trailingSlash: "always",
});