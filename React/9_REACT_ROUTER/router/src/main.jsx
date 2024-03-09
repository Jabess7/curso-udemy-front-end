import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider, Route, Navigate} from "react-router-dom"
import { Contact } from './Routes/Contact.jsx'
import ErrorPage from './Routes/ErrorPage.jsx'
import Home from './Routes/Home.jsx'
import Products from './Routes/Products.jsx'
import Info from './Routes/Info.jsx'
import Search from './Routes/Search.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,

    // 3 - componente base

    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path:"products/:id",
        element:<Products/>,
      },
      // 8 nested route
      {
        path:  "products/:id/info",
        element: <Info/>
      },
      // 9 Search Params
      {
        path: "search",
        element: <Search/>,
      },
    ]
  },
  // {
  //   path: "contact",
  //   element: <Contact/>
  // }
])  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
