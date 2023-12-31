import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createHashRouter, RouterProvider } from "react-router-dom"
import Home from './pages/home/home.jsx'
import Mapa from './pages/mapa/Mapa.jsx'
import Facciones from './pages/facciones/Facciones.jsx'
import Deidades from './pages/deidades/Deidades.jsx'
import Historia from './pages/historia/Historia.jsx'
import Bitacora from './pages/bitacora/Bitacora.jsx'



const router = createHashRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/mapa",
    element: <Mapa/>
  },
  {
    path: "/facciones",
    element: <Facciones/>
  },
  {
    path: "/deidades",
    element: <Deidades/>
  },
  {
    path: "/historia",
    element: <Historia/>
  },
  {
    path: "/bitacora",
    element: <Bitacora/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
