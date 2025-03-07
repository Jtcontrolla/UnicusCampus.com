import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Programs from './Components/Programs/Programs.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Programs/>
  </StrictMode>
)
