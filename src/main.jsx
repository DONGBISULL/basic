import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import AppProfile from "./AppProfile.jsx";
import AppCounter from "./AppCounter.jsx";
import AppProducts from "./AppProducts.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppProducts/>
    </StrictMode>,
)
