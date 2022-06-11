
import React, { useState, useEffect, createContext } from 'react'
import { commerce } from '../commerce/commerce'


export const Productcontext = createContext('Unknown')
const ProductcontextProvider = (props) => {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  let [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [token, settoken] = useState()
  const [shippingCountry, setshippingCountry] = useState()
  const [shippingSubDivisions, setshippingSubDivisions] = useState()
  const [shippingSubDivision, setshippingSubDivision] = useState()
  const [shippingCountries, setshippingCountries] = useState()
  
  //const countries = Object.entries(shippingCountries).map(([code,name])=>({id:code,label:name}))
  //const subdivisions = Object.entries(shippingSubDivisions).map(([code,name])=>({id:code,label:name}))

  
  const fetchdy = async(token,country)=>{
    const options = await commerce.checkout.getShippingOptions(token,country)
   
    
      console.log('ye lo options',options)
  }
  
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    const generateToken = async () => {
      try {
        let cart = await commerce.cart.retrieve()
        const idtoken = await commerce.checkout.generateToken(cart.id, { type: 'cart' })
        console.log('ye bro token hai ', idtoken)
        settoken(idtoken.id)

      } catch (error) {
        console.log(error)
      }
    }
    generateToken()
  }, [])

  const fetchCountries = async (token) => {
    const { countries } = await commerce.services.localeListShippingCountries(token)
    console.log('countries hai', countries)
    setshippingCountries(countries)
    setshippingCountry(Object.keys(countries)[0])
  }
  const fetchSubDivisions = async (token) => {
    const { subdivisions } = await commerce.services.localeListShippingSubdivisions(token)
    console.log("ye subsidivi sio hai", subdivisions)
    setshippingSubDivisions(subdivisions)
    setshippingSubDivision(Object.keys(subdivisions)[0])
  }
const fetchy = async (code) =>{
  const du = await commerce.services.
  console.log( "yaaaaaaaaaa du",du)
}
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

// useEffect(()=>{
//  if(shippingCountry){
//    fetchSubDivisions(shippingCountry)
//  }
// },[shippingCountry])
const fetchCs = async (email)=>{
  const response = await commerce.customer.login(email,'http://localhost:3000/login')
console.log('ye verififed hai ',response)
}

  useEffect(() => {
    fetchSubDivisions(shippingCountry)
    fetchCountries(token)
    fetchy(shippingCountry)
    fetchProducts()
    fetchCart()
    fetchCs('chalbomby@gmail.com')
    fetchdy(token,shippingCountry)
  }, [])
  console.log(products)
  console.log('bro this is cart n', cart)
  return (
    <Productcontext.Provider value={{shippingCountries,shippingSubDivision,shippingCountry,shippingSubDivisions,setshippingCountry,setshippingSubDivision,token, commerce, products, cart, handleAddToCart, handleEmptyCart, handleRemoveFromCart, handleUpdateCartQty, refreshCart }} >
      {props.children}
    </Productcontext.Provider>
  )
}

export default ProductcontextProvider