import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./assets/fonts/fontawesome-free-6.1.2-web/css/all.css"
import "./assets/css/normalize.css"
import "./assets/css/styles.css"
import "./assets/css/responsive.css"
import 'react-toastify/dist/ReactToastify.css';
import 'materialize-css/dist/css/materialize.min.css'


createRoot(document.getElementById('root')).render(
 
    <App />
)
