/**  reference 下面这行是增加的类型定义声明   */
/// <reference types="vitest" />
/// <reference types="terser"/>
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";

const rollupOptions = {
  external: ["vue"], // 作用是将该模块保留在 bundle 之外，比如在数组中添加了 vue ，就是为了不让 vue 打包到组件库中；
  output: {  // 这个配置用于 umd/iffe 包中，意思是全局中的某个模块在组件库中叫什么名字
    globals: {
      vue: "vue",
    },
  },
};

export default defineConfig({
  build: {
    cssCodeSplit: true, // 编译的时候是否单独输出css
    rollupOptions,
    minify: "terser", // boolean | 'terser' |  'esbuild'  是混淆的意思，这里面有两个混淆工具可以选择，即 terser 和 esbuild。 terser 是老牌的压缩工具 和 rollup 搭档时间比较长
    sourcemap: true, // 输出单独的 source 文件
    // brotliSize: true,  // 生成压缩大小报告
    lib: {
      entry: "./src/entry.ts",
      name: "HelloUI",
      fileName: "hello-ui",
      // 导出的模块格式
      formats: ["es", "umd", "iife"],
    },
  },
  test: {
    // enable jest-like global test API
    globals: true,
    // simulate DOM with happy-dom
    // (requires install happy-dom as a peer dependency)
    environment: "happy-dom",
    // 支持 tsx 组件
    transformMode: {
      web: [/.[tj]sx$/],
    },
  }, // 报错是因为 这个选项是vitest的的扩展属性 vite原生中并没有这个属性
  plugins: [vue(), vueJsx({}), Unocss()],
})


