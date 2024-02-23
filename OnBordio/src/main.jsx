import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements , RouterProvider } from 'react-router-dom'
import Login from "../src/pages/Login.jsx"
import Home from './pages/Home.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} element={<Login />} />

      <Route path='' element={<PrivateRoute />}>
        <Route path='/home' element={<Home />} />
      </Route>
    
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
 
)