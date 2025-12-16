// Main entry point of the React application using React 19
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 // Using StrictMode for additional checks and warnings in development
 <StrictMode>
    <App />
  </StrictMode>,
)
