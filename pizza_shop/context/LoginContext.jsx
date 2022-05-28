import React, { useEffect, createContext, useState, useRef } from 'react';
import jwt_decode from 'jwt-decode'
import Cookie from 'js-cookie'
import axios from 'axios'


export const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const [click, setclick] = useState(0)
  const [email, setemail] = useState('')
  const [error, seterror] = useState({ email: '', password: '' })
  const [password, setpassword] = useState('')
  const [LoggedIn, setLoggedIn] = useState(false)
  const [count, setcount] = useState(0)
  const [response, setresponse] = useState('')
  const initial = useRef(false)


  const PostData = async (e) => {
    e.preventDefault()
    const item = { email, password }
    console.log(item)

    await axios.post('http://localhost:3000/login', {
      email: email,
      password: password
    })
      .then(async function (response) {
        if (response) {
          Cookie.set("LoggedIn", true, {
            expires: 10,
            secure: true
          })
          
          setresponse(response.data.token)
          setLoggedIn(true)
          setclick(click + 1)

        }
      }).catch((response) => {
        console.log(response)
        seterror(response.response.data.errors)
      })

  }
  useEffect(() => {
    console.log('click huaa !!!!', click, LoggedIn)
    if (initial.current) {
      if (LoggedIn == true) {
        location.assign("/")
        console.log(response)
        Cookie.set("jwt",response,{expires:10,secure:true})
        console.log(Cookie.get("LoggedIn"))
        console.log('hello woala ')
      }
      else { location.assign("/about") }
    }
    else {
      initial.current = true


    }

  }, [click])
  return (
    <LoginContext.Provider value={{ click, response, error, LoggedIn, PostData, setemail, setpassword }}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;