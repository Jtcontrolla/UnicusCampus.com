import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Testimonial from './components/testimonial/Testimonial.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <>
    <Testimonial></Testimonial>
    </>
    
    
  </StrictMode>,
)
