import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Uncoss from '../config/unocss'

export default defineConfig({
  plugins: [
    vueJsx(),
    Uncoss()
  ]
})



