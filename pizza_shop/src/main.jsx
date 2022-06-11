import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginContextProvider from '../context/LoginContext'
import ProductcontextProvider from '../context/Productcontext'
import RegisterContextProvider from '../context/RegisterContext'
import App from './App'
import './index.css'
import { StyledEngineProvider } from '@mui/material/styles';
import CartdialogcontextProvider from '../context/Cartdialogcontext'
import ShippingContextProvider from '../context/ShippingContext'

ReactDOM.createRoot(document.getElementById('root')).render(
   <CartdialogcontextProvider>
      <ShippingContextProvider>
      <StyledEngineProvider injectFirst>
         <ProductcontextProvider>
            <LoginContextProvider>
               <RegisterContextProvider>
                  <App />
               </RegisterContextProvider>
            </LoginContextProvider>
         </ProductcontextProvider>
      </StyledEngineProvider>
      </ShippingContextProvider>
   </CartdialogcontextProvider>
)
