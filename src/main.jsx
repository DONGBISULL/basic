import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AppProfile from "./AppProfile.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProfile />
  </StrictMode>,
)
