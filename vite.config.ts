import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/TFC-Pay-Website/',
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Production Build Optimization
  build: {
    target: 'es2015',
    minify: 'esbuild',
    cssMinify: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code into separate chunks for better caching
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-animations': ['framer-motion'],
          'vendor-ui': ['@radix-ui/react-slot', 'class-variance-authority', 'clsx', 'tailwind-merge', 'lucide-react'],
        },
      },
    },
  },
}));
