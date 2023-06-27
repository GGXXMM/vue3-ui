/// <reference types="vitest" />
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({})],
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    environment: "happy-dom",
    // support tsx
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
})
