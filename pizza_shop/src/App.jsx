import React,{useState,useEffect, useContext} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Cookie from 'js-cookie'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Register from './components/Register'
import Login from './components/Login';
import NoMatch from './components/NoMatch';
import Blogs from './Blogs';
import Content from './components/Content';
SelectSmall
import Hola from './components/Hola';
import Scroll from "./components/Scroll";
import Aim from "./components/Aim";
import Loading from "./components/Loading/Loading";
import Testing from "./components/Avatar/Cart.avatar";
import Otp_Page from "./components/Authentications/Otp_Page";
import  { LoginContext } from "../context/LoginContext";
import Products from './components/Product';
import Product_content from './components/Product_content';
import Vilen from './components/Vilen';
import Vilen2 from './Vilen2';
import Cart_content from './components/Cart_content';
import Carr from './components/Avatar/Cart_avatar2';
import Cart_content_Testing from './components/Avatar/Cart_avatar';
import Checkout from './components/checkout_form/Checkout';
import SelectSmall from './components/SelectOptions';

const App = ()=>{
let LoggedIn = Cookie.get("LoggedIn")
  return (
    <div className="App">
    
        
     <BrowserRouter>
     <Navbar />
     <div className='h-24'></div>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/hola" element={<Vilen />} />
      <Route path="/product" element={<Vilen />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<NoMatch/>}/>
      <Route path='blogs' element={LoggedIn?<Blogs/>:<Login/>}/>
      <Route path="otp" element={<Otp_Page/>}/>
      <Route path="blogs/:id" element={<Content  />}/>
      <Route path='product/:id' element={<Product_content/>}/>
      <Route path='pp' element={<Vilen2/>}/>
      <Route path='cart' element={<Cart_content_Testing/>}/>
      <Route path='checkout' element={<Checkout/>}/>
      <Route path="sleect" element={<SelectSmall/>}/>
    </Routes>
  </BrowserRouter>
      
    </div>
  )
}

export default App
