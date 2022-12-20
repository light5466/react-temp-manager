// import { useState } from 'react'
import { useRoutes } from 'react-router-dom'

import router from './router'

// 引入路由占位符
// import { Outlet, Link } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)
  const outlet = useRoutes(router)
  return (
    <div className="App">
      
      {/* <div>
        <Link to='/Home'>Home</Link>  ||
        <Link to='/About'>About</Link>
      </div> */}
      { outlet }
      {/* <Outlet></Outlet> */}
    </div>
  )
}

export default App
