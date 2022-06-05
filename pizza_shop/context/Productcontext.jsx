import React, { useState, useEffect, createContext } from 'react'
import { commerce } from '../commerce/commerce'


export const Productcontext = createContext()
const ProductcontextProvider = (props) => {
    const [products, setproducts] = useState([])
    const [cart, setcart] = useState([])
    const fetchProducts = async () => {
        const { data } = await commerce.products.list()
        setproducts(data)
    }
    const fetchCart =async()=>{
        const response = await commerce.cart.retrieve()
       setcart(response)
    }
    useEffect(()=>{
        fetchProducts()
        fetchCart()
    },[])
    console.log(products)
    console.log(cart)
    return (
        <Productcontext.Provider value={{products}} >
            {props.children}
        </Productcontext.Provider>
    )
}

export default ProductcontextProvider