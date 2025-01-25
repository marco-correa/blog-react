/// <reference types="vitest" />
import path from 'path';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { coverageConfigDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ include: '**/*.svg' })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    clearMocks: true,
    coverage: {
      exclude: [
        'commitlint.config.ts',
        'src/{App,main,vite-env.d}.ts?(s)x',
        'src/{assets,router,styles,tests,types}/**',
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
});
