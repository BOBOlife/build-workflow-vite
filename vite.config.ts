import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { presetUno, presetAttributify, presetIcons } from 'unocss';
import Unocss from './config/unocss';

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
    cssCodeSplit: true, // 编译的时候是否单独输出css
    rollupOptions,
    minify: false,
    lib: {
      entry: './src/entry.ts',
      name: 'HelloUI',
      fileName: 'hello-ui',
      // 导出的模块格式
      formats: ['es', 'umd', "iife"]
    }
  },
  plugins: [
    vue(),
    vueJsx({}),
    Unocss()
  ]
})


