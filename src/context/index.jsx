import { createContext, useState } from "react";



export const ContextCart = createContext(null)

export default function contextCartComponent({ children }) {

  const [cart, setCart] = useState([])
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
              quantite:quantite+1
            }
          }
     }))
    }else{
      setCart(cart.map((item)=>{
          if(item.id == id){
            return {
              ...item,
              quantite:quantite-1
            }
          }
     }))
    }
  }

  return <ContextCart.Provider value={{ cart,handleCart,addToCart}}>
    {children}
  </ContextCart.Provider>

}