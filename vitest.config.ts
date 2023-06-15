/// <reference types="vitest" />

import { defineConfig } from 'vite'
import { reactSvgr } from './reactSvgr'

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  plugins: [reactSvgr()],
})
