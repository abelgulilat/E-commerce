import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    "proxy": {
      "/api/v1/": "https://e-commerce-6-in4t.onrender.com",
      // "/uploads/": "https://e-commerce-6-in4t.onrender.com",

      "/uploads": {
        target: "https://e-commerce-6-in4t.onrender.com",
        changeOrigin: true,
        secure: false, // Set true if the certificate is valid and secure
      },

    },
  },
})
