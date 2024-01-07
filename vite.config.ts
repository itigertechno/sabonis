import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import vitePluginSvgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [react(), vitePluginSvgr()],
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@pictures': path.resolve(__dirname, 'src/pictures'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@utils': path.resolve(__dirname, 'src/utils')
    },
  }
});
