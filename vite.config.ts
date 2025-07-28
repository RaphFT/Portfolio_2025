import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Compression Gzip pour améliorer les performances
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024, // Compresser les fichiers > 1KB
    }),
    // Compression Brotli pour encore plus d'économies
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
    }),
  ],
  css: {
    postcss: './postcss.config.cjs',
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Séparer React et React-DOM
          'react-vendor': ['react', 'react-dom'],
          // Séparer Framer Motion
          'framer-motion': ['framer-motion'],
          // Séparer Three.js et React Three Fiber
          'three-vendor': ['three', '@react-three/fiber'],
          // Séparer les icônes Heroicons
          'heroicons': ['@heroicons/react'],
          // Séparer Vercel Analytics
          'analytics': ['@vercel/analytics/react'],
        },
        // Optimiser la taille des chunks
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Augmenter la limite d'avertissement si nécessaire
    chunkSizeWarningLimit: 1000,
    // Optimisations supplémentaires
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
    },
    // Optimisations CSS
    cssCodeSplit: true,
    // Optimisations de source maps
    sourcemap: false,
  },
  // Optimisations de développement
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'three', '@react-three/fiber'],
  },
  // Optimisations du serveur de développement
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
  // Optimisations de préchargement
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
})
