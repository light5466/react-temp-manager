import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//缺少声明   需安装  npm i -D @types/node
// 如果还报红  加断言   import * as path from 'path' 
import path from 'path' 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // 路径别名配置
    alias: {
      '@':path.resolve(__dirname, './src')
    }
  }
})
