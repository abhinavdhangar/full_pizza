import React,{useEffect,useState,createContext,useContext} from 'react'
import { commerce } from '../commerce/commerce'
import { Productcontext } from './Productcontext'
export const ShippingContext = createContext()

const ShippingContextProvider = (props) => {
const {token,shippingCountry} = useContext(Productcontext)
const [option, setoption] = useState([])

const fetchShippingOptions = async (token,country,sub=null)=>{
  const options = await commerce.checkout.getShippingOptions(token,country,sub)
setoption(options)

  console.log('ye lo options',options)
}
useEffect(()=>{
  fetchShippingOptions(token,shippingCountry)
},[])
  return (

    <ShippingContext.Provider value={{option}}>
      {props.children}
    </ShippingContext.Provider>

  )
}

export default ShippingContextProvider