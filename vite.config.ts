import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import { resolve } from 'path'

const projectRoot = process.env.PROJECT_ROOT || import.meta.dirname

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
    // Visualiseur de bundle (activé uniquement en mode analyze)
    mode === 'analyze' && visualizer({
      open: true,
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': resolve(projectRoot, 'src')
    }
  },
  build: {
    // Optimisation du code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendors React séparés
          'react-vendor': [
            'react',
            'react-dom',
            'react-error-boundary'
          ],
          
          // Radix UI groupés par fonctionnalité
          'radix-base': [
            '@radix-ui/react-slot',
            '@radix-ui/react-label',
            '@radix-ui/react-separator',
          ],
          'radix-forms': [
            '@radix-ui/react-checkbox',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-select',
            '@radix-ui/react-slider',
            '@radix-ui/react-switch',
          ],
          'radix-overlays': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-popover',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-context-menu',
            '@radix-ui/react-menubar',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-hover-card',
          ],
          'radix-layout': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-collapsible',
            '@radix-ui/react-tabs',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-navigation-menu',
          ],
          
          // Form management
          'forms': [
            'react-hook-form',
            '@hookform/resolvers',
            'zod',
          ],
          
          // Charts et visualisation
          'charts': [
            'recharts',
            'd3',
          ],
          
          // Utilitaires de date
          'date-utils': [
            'date-fns',
            'react-day-picker',
          ],
          
          // Animations et interactions
          'animations': [
            'framer-motion',
            'embla-carousel-react',
          ],
          
          // Icônes
          'icons': [
            'lucide-react',
            '@heroicons/react',
          ],
          
          // Utilitaires divers
          'utils': [
            'clsx',
            'tailwind-merge',
            'class-variance-authority',
          ],
          
          // Autres libraries lourdes
          'heavy-libs': [
            'three',
            'browser-image-compression',
          ],
        },
        // Nommage optimisé des chunks
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/').pop()
            : 'chunk';
          return `assets/js/[name]-[hash].js`;
        },
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.');
          const ext = info?.[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|webp|avif)$/i.test(assetInfo.name || '')) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/\.(woff2?|ttf|eot)$/i.test(assetInfo.name || '')) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return `assets/[ext]/[name]-[hash][extname]`;
        },
      },
    },
    // Augmenter la limite d'avertissement de taille de chunk
    chunkSizeWarningLimit: 600,
    // Minification optimale
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,  // Conserver les console.log pour le debugging
        drop_debugger: true,
      },
    },
    // Source maps pour debugging (désactivable en prod)
    sourcemap: false,
  },
  // Optimisation des dépendances
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-hook-form',
      '@hookform/resolvers',
      'zod',
    ],
  },
}));
