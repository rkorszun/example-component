import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'


const manualChanks = (id: string | string[]) => {

  if (id.includes('@mui')) {
    return 'vendor_mui'
  }
  if (id.includes('node_modules')) {
    return 'vendor'
  }
}
// https://vite.dev/config/
export default defineConfig({
  
  plugins: [preact()],
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      input: {
        main: './src/main.tsx',
        'v1/main': './src/main-script.tsx',
      },
      output: {
        manualChunks: manualChanks,
        chunkFileNames: 'v1/[name]-[hash].chunk.js',
        entryFileNames: '[name].min.js',
        assetFileNames: 'v1/[name].[ext]',
      }
    }
  }
})
