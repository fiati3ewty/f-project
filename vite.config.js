import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(), // ใส่ปลั๊กอินตัวนี้เข้าไป
  ],
  base: 'f-project',
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, '/contact/index.html'),
        lab3: resolve(__dirname, '/lab3/index.html'),
      },
    },
  },
});
