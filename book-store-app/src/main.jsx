import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main1 from './main1.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main1/>
  </StrictMode>
)