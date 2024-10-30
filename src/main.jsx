import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout.jsx'
import Addcart from './Addcart.jsx'

const Router = createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element={<Layout />} >
        <Route path='' element={<App/>}/>
        <Route path='cart' element={<Addcart />} />
     </Route>
  )
)
 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
)
