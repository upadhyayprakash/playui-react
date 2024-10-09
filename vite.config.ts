import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // Entry file for your library
      name: 'playui-react', // Global name of your library for UMD/IIFE builds
    },
    rollupOptions: {
      // Exclude dependencies from the bundle, such as react and react-dom
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    outDir: 'dist', // Output folder for build artifacts
  },
});
