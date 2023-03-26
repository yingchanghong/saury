import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: './',
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  plugins: [
    vue(),
    // createSvgIconsPlugin({
    //   iconDirs: [path.resolve(process.cwd(), 'src/assets/icon/svg')],
    //   symbolId: 'icon-[dir]-[name]',
    // }),
  ],
})
