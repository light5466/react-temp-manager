import React from 'react'
import ReactDOM from 'react-dom/client'
// 样式的顺序
// 1.初始化样式   2.ui库的样式   3.组件的样式
import 'reset-css'
import '@/assets/css/global.scss'

import App from './App'
// import Nav from './components/Nav/nav'

// 导入路由组件
// import Router from './router'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App />
    <Nav /> */}
    {/* <Router></Router> */}
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
    
  </React.StrictMode>
)
