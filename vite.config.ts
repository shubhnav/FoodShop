import react from "@vitejs/plugin-react"
import * as path from "node:path"
import { defineConfig } from "vitest/config"
import packageJson from "./package.json" with { type: "json" }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/FoodShop/',
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'https://fakerestaurantapi.runasp.net',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    }
  },


  test: {
    root: import.meta.dirname,
    name: packageJson.name,
    environment: "jsdom",

    typecheck: {
      enabled: true,
      tsconfig: path.join(import.meta.dirname, "tsconfig.json"),
    },

    globals: true,
    watch: false,
    setupFiles: ["./src/setupTests.ts"],
  },
})
