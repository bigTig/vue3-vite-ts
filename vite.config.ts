import path from 'path';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 9527
  },
  // 别名
  resolve: {
    alias: {
      // 设置别名
      '@': path.resolve(__dirname, './src')
    }
  }
});
