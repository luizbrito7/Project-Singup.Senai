import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import './index.css'

import { Home, Gallery, Error404 } from './pages'
import { createBrowserRouter, RouterProvider} from 'react-router-dom' 



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error404/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/gallery',
        element: <Gallery/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
