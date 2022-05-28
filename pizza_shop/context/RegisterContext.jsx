import React, { useState, useRef, useEffect, createContext } from 'react'
import axios from 'axios'

export const RegisterContext = createContext()
const RegisterContextProvider = (props) => {
  const [click, setclick] = useState(0)
  const [email, setemail] = useState('')
  const [error, seterror] = useState({ email: '', password: '', phone: '', age: '', first_name: '', last_name: '' })
  const [password, setpassword] = useState('')
  const [LoggedIn, setLoggedIn] = useState(false)
  const [age, setage] = useState(0)
  const [phone, setphone] = useState()
  const [first_name, setfirst_name] = useState('')
  const [last_name, setlast_name] = useState('')
  const initial = useRef(false)


  const PostData = async (e) => {
    e.preventDefault()
  
   

    await axios.post('http://localhost:3000/signup', {
      email: email,
      password: password,
      phone: phone,
      age: age,
      first_name: first_name,
      last_name: last_name,

    })
      .then(function (response) {
        console.log(response)
        setclick(click + 1)
        setLoggedIn(true)

        console.log(LoggedIn, click)

      }).catch((response) => {
        console.log(response)
        seterror(response)
      })
  }
  useEffect(() => {
    console.log('click huaa !!!!', click, LoggedIn)
    if (initial.current) {
      // if (LoggedIn == true) {
      //   location.assign("/")
      // }
      // else { location.assign("/about") }
      console.log('tuere dfakl')
    }
    else {
      initial.current = true


    }

  }, [click])
  return (
    <RegisterContext.Provider value={{ click, error, LoggedIn, setemail, setpassword, setage, setfirst_name, setlast_name,PostData, setphone }}>
      {props.children}
    </RegisterContext.Provider>
  )
}

export default RegisterContextProvider