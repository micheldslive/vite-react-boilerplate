import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { EsLinter, linterPlugin } from 'vite-plugin-linter'
import tsConfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    linterPlugin({
      include: ['./src/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    tsConfigPaths(),
    svgrPlugin(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: '.vitest//setup.ts',
    css: true,
  },
}))
