import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MyRouts from './assets/Components/MyRouts.jsx'
import AuthProvider from './assets/Components/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={MyRouts} /></AuthProvider>
  </React.StrictMode>,
)
