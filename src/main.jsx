import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { PortfolioProvider } from './context/PortfolioContext' // <-- Import this
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PortfolioProvider> 
      <RouterProvider router={router} />
    </PortfolioProvider>
  </React.StrictMode>,
)