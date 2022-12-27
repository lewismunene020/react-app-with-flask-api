import React from 'react'
import {
    createBrowserRouter ,
    RouterProvider
  } from  "react-router-dom"

import App from './App'
import Home from "./Home"
import About from  './components/About'
import Portfolio from './components/Portfolio';
import Admin from './components/Admin';
import ErrorPage from './ErrorPage';

export default function Router(){
    const  router = createBrowserRouter([
        {
          path:"/" ,
          element: <App />  ,
          errorElement : <ErrorPage />
        },
      
        {
          path:"/about/" ,
          element:<About />
        },
        {
          path:"/portfolio/" ,
          element:<Portfolio />
        } ,
      
        {
          path:"/admin/" ,
          element:<Admin />
        },
        {
          path:"/admin/login/" ,
          element:<div>Admin Login</div>  
      },
      {
          path:"/admin/insert/" ,
          element: <div>Admin Insert</div> 
      },
      {
          path:"/admin/delete" ,
          element: <div>Admin Delete</div>
      },
      
      
    ] , )

  return (
    <React.StrictMode>
          <RouterProvider router={router } />
    </React.StrictMode>
  )
}
