import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Router from './core/router/Router.tsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
)
