import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import yaml from '@rollup/plugin-yaml'
import path from 'path'
import postcss from './postcss.config'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000, // 開発サーバーのポートを3000に設定
    host: true, // Docker環境でホストを有効化
    watch: {
      usePolling: true // Docker環境でのホットリロードを有効化
    }
  },
  plugins: [vue(), yaml(), vueJsx(), VueDevTools()],
  css: {
    postcss
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom'
  },
  optimizeDeps: {
    include: ['yaml']
  }
})
