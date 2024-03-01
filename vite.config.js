import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

module.exports = {
  // other configurations...
  build: {
    // other build options...
    chunkSizeWarningLimit: 1000000, // <- Increased limit to 1 MB
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
