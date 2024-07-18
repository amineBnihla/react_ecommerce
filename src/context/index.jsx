import { createContext, useState } from "react";



export const ContextCart = createContext(null)

export default function ContextCartComponent({ children }) {

  const [cart, setCart] = useState([])
  const cartLength = cart.length
  function addToCart(product) {
  setCart([...cart,{...product,quantite:1}])
  }
  function handleCart(type, id) {
    if (type == "increment") { 
    //  const productItem  =  cart.find((item)=> item.id == id)
    
     setCart(cart.map((item)=>{
          if(item.id == id){
            return {
              ...item,
              quantite:item.quantite+1
            }
          }
     }))
    }else{
      setCart(cart.map((item)=>{
          if(item.id == id){
            return {
              ...item,
              quantite:item.quantite-1
            }
          }
     }))
    }
  }

  return <ContextCart.Provider value={{ cart,cartLength,handleCart,addToCart}}>
    {children}
  </ContextCart.Provider>

}