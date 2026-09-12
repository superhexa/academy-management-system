import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { copyOcrAssets } from './scripts/copy-ocr-assets.mjs'

// The text-recognition assets are copied out of node_modules rather than
// committed, so something has to put them in public/ before a build. Doing it
// here rather than only in a prebuild script means it happens however the
// build is invoked — including a deployment configured to run `vite build`
// directly, which would otherwise ship without them and leave the SPA rewrite
// answering index.html to Tesseract's fetches.
function ocrAssets(): Plugin {
  return {
    name: 'maktab-ocr-assets',
    async buildStart() {
      await copyOcrAssets()
    },
  }
}

export default defineConfig({
  plugins: [react(), ocrAssets()],
  // Vite only exposes VITE_* variables through import.meta.env. Map the
  // project's existing Supabase variables so hosted builds can authenticate.
  define: {
    'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(
      process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL,
    ),
    'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(
      process.env.VITE_SUPABASE_ANON_KEY ||
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    ),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true,
    port: Number(process.env.PORT) || 5173,
    allowedHosts: true,
  },
})
