import { resolve } from 'path';
import { defineConfig } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { optimizeCssModules } from 'vite-plugin-optimize-css-modules';

export default defineConfig({
  build: {
    target: 'esnext',
    minify: 'terser',
    rollupOptions: {
      input: {
        file1: resolve(__dirname, 'index.html'),
      },
    },
  },

  plugins: [ViteMinifyPlugin({}), optimizeCssModules()],
});
