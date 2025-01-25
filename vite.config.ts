/// <reference types="vitest" />
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { coverageConfigDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
        'src/*.ts?(s)x',
        'src/{router,styles,tests,types}/**',
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
});
