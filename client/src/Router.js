import React from 'react'
import {
    createBrowserRouter ,
    RouterProvider
  } from  "react-router-dom"
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Nav from './Nav'
import Home from "./Home"
import About from  './components/About'
import Projects from './components/Projects';
import Admin from './components/Admin';
import ErrorPage from './ErrorPage';

 export default function Router(){
    const  router = createBrowserRouter([
        {
          path:"/" ,
          
          element: <Home />  ,
          errorElement : <ErrorPage />
        },
      
        {
          path:"/about/" ,
          element:<About />
        },
        {
          path:"/projects/" ,
          element:<Projects />
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
          <RouterProvider router={router }  />
    </React.StrictMode>
  )
}



// export  default function Router() {
//   return (
//     <BrowserRouter>
//       <Nav />
//       <Routes>
//           <Route exact path="/" component={Home} errorElement={ErrorPage} />
//           <Route path="/about" component={About} />
//           <Route path="/projects" component={Projects} />

//       </Routes>
     
//     </BrowserRouter>
//   )
// }

