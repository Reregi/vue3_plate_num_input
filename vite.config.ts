import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join } from 'path';

function resolve(dir) {
  return join(__dirname, dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  css: {
    //公共scss引入
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/common.scss";`,
      },
    },
  },
});
