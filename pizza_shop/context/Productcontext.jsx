
import React, { useState, useEffect, createContext } from 'react'
import { commerce } from '../commerce/commerce'


export const Productcontext = createContext()
const ProductcontextProvider = (props) => {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [token, settoken] = useState()
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

const fetchCountries =async(token)=>{
  const {countries} = await commerce.services.localeListShippingCountries(token)
  
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




  useEffect(() => {

    fetchProducts()
    fetchCart()

  }, [])
  console.log(products)
  console.log('bro this is cart n', cart)
  return (
    <Productcontext.Provider value={{ commerce, products, cart, handleAddToCart, handleEmptyCart, handleRemoveFromCart, handleUpdateCartQty, refreshCart }} >
      {props.children}
    </Productcontext.Provider>
  )
}

export default ProductcontextProvider