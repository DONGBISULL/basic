import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import AppProfile from "./basic/AppProfile.jsx";
import AppCounter from "./basic/AppCounter.jsx";
import AppProducts from "./basic/AppProducts.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
    </StrictMode>,
)
