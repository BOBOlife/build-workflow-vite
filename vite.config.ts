/**  reference 下面这行是增加的类型定义声明   */
/// <reference types="vitest" />  

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
  test: {
    // enable jest-like global test API
    globals: true,
    // simulate DOM with happy-dom
    // (requires install happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持 tsx 组件 
    transformMode: {
     web: [/.[tj]sx$/]
    }
  }, // 报错是因为 这个选项是vitest的的扩展属性 vite原生中并没有这个属性
  plugins: [
    vue(),
    vueJsx({}),
    Unocss()
  ]
})


