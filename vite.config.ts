import { defineConfig, loadEnv, type Plugin } from 'vite'
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

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const supabaseUrl = env.VITE_SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL || env.SUPABASE_URL
  const supabaseAnonKey =
    env.VITE_SUPABASE_ANON_KEY ||
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    env.SUPABASE_ANON_KEY ||
    env.SUPABASE_PUBLISHABLE_KEY

  return {
  plugins: [react(), ocrAssets()],
  define: {
    'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(supabaseUrl),
    'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(supabaseAnonKey),
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
  }
})
