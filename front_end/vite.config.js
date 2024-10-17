import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {

  //     "/api": {
  //         target:"https://e-commerce-6-in4t.onrender.com",
  //         changeOrigin:true,
  //     },
  //     "/uploads": {
  //         target:"https://e-commerce-6-in4t.onrender.com",
  //         changeOrigin:true,
  //     }
    
  //   },

  // }
})
