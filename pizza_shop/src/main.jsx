import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginContextProvider from '../context/LoginContext'
import ProductcontextProvider from '../context/Productcontext'
import RegisterContextProvider from '../context/RegisterContext'
import App from './App'
import './index.css'
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root')).render(
   <StyledEngineProvider injectFirst>
   <ProductcontextProvider>
 <LoginContextProvider>
 <RegisterContextProvider>
    <App/>
 </RegisterContextProvider>
  </LoginContextProvider>
   </ProductcontextProvider>
</StyledEngineProvider>
)
