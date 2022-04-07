import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false
  },
  // css: {
  //   globalModulePaths: ['./src/_global.css']
  // },
  assetsInclude: ['**/*.fnt'],
  server: {
    port: 8052
  }
})
