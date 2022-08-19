import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { presetUno, presetAttributify, presetIcons } from 'unocss';
import Unocss from 'unocss/vite';

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
      formats: ['es', 'umd', "iife"]
    }
  },
  plugins: [
    vue(),
    vueJsx({}),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()]
    })
  ]
})


