import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'vue'
    }
  }
}

export default defineConfig({
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: './src/entry.ts',
      name: 'SmartyUI',
      fileName: 'smarty-ui',
      // 导出的模块格式
      formats: ['esm', 'umd', "iife"]
    }
  },
  plugins: [
    vue(),
    vueJsx({})
  ]
})


