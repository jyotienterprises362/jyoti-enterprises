import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterFun from './conponents/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterFun />
  </StrictMode>,
)
