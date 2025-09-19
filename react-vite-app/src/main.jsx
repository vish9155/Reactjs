import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
// import "./Css/Style.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div className='head'>
  {/* <h1>data</h1> */}
    </div>
  </StrictMode>,
)
