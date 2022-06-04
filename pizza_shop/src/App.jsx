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

import Hola from './components/Hola';
import Scroll from "./components/Scroll";
import Aim from "./components/Aim";
import Loading from "./components/Loading/Loading";
import Testing from "./components/Avatar/Cart.avatar";
import Otp_Page from "./components/Authentications/Otp_Page";
import  { LoginContext } from "../context/LoginContext";
import Products from './components/Product';
import Product_content from './components/Product_content';

const App = ()=>{
let LoggedIn = Cookie.get("LoggedIn")
  return (
    <div className="App">
    
        
     <BrowserRouter>
     <Navbar />
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/hola" element={<Testing />} />
      <Route path="/product" element={<Products />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<NoMatch/>}/>
      <Route path='blogs' element={LoggedIn?<Blogs/>:<Login/>}/>
      <Route path="otp" element={<Otp_Page/>}/>
      <Route path="blogs/:id" element={<Content  />}/>
      <Route path='product/:id' element={<Product_content/>}/>
    </Routes>
  </BrowserRouter>
      
    </div>
  )
}

export default App
