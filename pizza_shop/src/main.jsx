import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginContextProvider from '../context/LoginContext'
import RegisterContextProvider from '../context/RegisterContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 <LoginContextProvider>
 <RegisterContextProvider>
    <App/>
 </RegisterContextProvider>
  </LoginContextProvider>
)
