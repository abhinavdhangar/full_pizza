import Commerce from '@chec/commerce.js';
import React,{useState,useEffect,createContext} from 'react'
export const LoginCommerceContext = createContext('Unknown')
import {commerce} from '../commerce/commerce'
const LoginCommerceProvider = (props) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [token, settoken] = useState()
    
    const CustomerLogin = async(email)=>{
       const response = await commerce.customer.login(email,'http://localhost:3000/login/callback')
           console.log( "ye login response hai !",response) 
           settoken(response)
    }
   
 
  return (
    <LoginCommerceContext.Provider value={{CustomerLogin}}>
      {props.children}
    </LoginCommerceContext.Provider>
  )
}

export default LoginCommerceProvider