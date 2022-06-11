import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
let calling = { ...callouts }.data
// console.log('calling hai ye', calling)
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from './Loader'
import Empty_message from './Empty_message'
import Loading_skeleton from './Loading/Skeleton_blog'
import callouts from '../Data/Product_data'
import { Productcontext } from '../../context/Productcontext';



/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/


export default function Vilen() {
  const { handleAddToCart } = useContext(Productcontext)
  let { products } = useContext(Productcontext)
  // 
 
    
    
      // 
         console.log('ye bro ye bhi product hai',products)

  
  return (
    <div className="bg-slate-200">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="">Products</h2>

       {!products.length==0? <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link to={product.name} key={product.id} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200  rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.image.url}
                  alt={product.name}
                  className="w-full h-[436px] md:h-[350px] object-cover object-center  group-hover:opacity-75"
                />
              </div>
            
              <Link to='#'>
             <button type='submit' onClick={()=>{handleAddToCart(product.id,1)}} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  ADD +
                </span>
              </button>

              </Link>
            
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price.formatted_with_symbol}</p>
            </Link>
          ))}
        </div>:<h2>loading...</h2>}
      </div>
    </div>
  )
}
