import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.dreammill.fi',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
