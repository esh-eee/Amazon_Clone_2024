import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


  // other configurations...
  


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {chunkSizeWarningLimit: 2000000}
   
    , 

})
