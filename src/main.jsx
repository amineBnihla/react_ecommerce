import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {RouterProvider} from 'react-router-dom'
import router from './router/index.jsx'
import ContextCartComponent from './context/index.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextCartComponent>
    <RouterProvider router={router}/>
    </ContextCartComponent>
  </React.StrictMode>,
)
