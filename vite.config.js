import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 2017,
    open: true,
  },
  //To avoid slow loading times add the code below for a better performance. 
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Splits dependencies into a separate chunk
          }
        },
      },
    },
  },
});
