import React,{useEffect,useState,createContext} from 'react'

export const CartDialogContext = createContext()
const CartdialogcontextProvider = (props) => {
    const [open, setopen] = useState(false)
    function onButtonClick(){
        setopen(true)
    }
  return (
  <CartDialogContext.Provider value={{open,setopen}}>
      {props.children}
  </CartDialogContext.Provider>
  )
}

export default CartdialogcontextProvider