import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter ,
  RouterProvider
} from  "react-router-dom"

import './css/index.css';
import App from './App'
import About from  './components/About'
import Portfolio from './components/Portfolio';
import Admin from './components/Admin';
import ErrorPage from './ErrorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

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


])


root.render(
  <React.StrictMode>
    <RouterProvider router={router } />
  </React.StrictMode>
);


