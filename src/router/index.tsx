// 路由懒加载
import React, { lazy } from 'react'
import Home from "@/views/Home"
// import About from "@/views/About"
const About = lazy(() => import('@/views/About'))
// 报错是需要套一层<React.Suspense fallback={ <div>loading...</div> }> <About /> </React.Suspense>
// 可以包裹在路由组件里面  也可以直接包裹在 最外面 或者抽离出来
// const withLoadingComponents = (component:JSX.Element) => (
//     <React.Suspense fallback={ <div>loading...</div> }> 
//         {component}
//     </React.Suspense>
// )

import { Navigate } from 'react-router-dom'
const routes = [
    {
        path: '/',
        element: <Navigate to='/home' />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/about',
        element: <React.Suspense fallback={ <div>loading...</div> }> <About /> </React.Suspense>
    }
]

export default routes