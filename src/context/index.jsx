import { createContext, useState } from "react";



export const ContextCart = createContext(null)

export default function ContextCartComponent({ children }) {

  const [cart, setCart] = useState([])
  const cartLength = cart.length
  const totalCart = cart.reduce((acc,curr)=> acc += curr.quantite * curr.price,0)  
  function addToCart(product) {
  setCart([...cart,{...product,quantite:1}])
  }
  function handleCart(type, id) {

    // const productItem  =  cart.find((item)=> item.id == id)
    if (type == "increment") { 
     setCart(cart.map((item)=>{
          if(item.id == id){
            return {
              ...item,
              quantite:item.quantite+1
            }
          }
          return item
     }))
    }else{
      setCart(cart.map((item)=>{
          if(item.id == id){
            return {
              ...item,
              quantite:item.quantite == 0 ? 0 : item.quantite-1
            }
          }
           return item
     }))
    }
  }
  function removeCart(id){
   setCart(cart.filter((c)=> c.id != id))
  }
  function onBlurQte(id,value){
    if(value < 0) return
  setCart(cart.map((item)=>{
          if(item.id == id){
            return {
              ...item,
              quantite:value
            }
          }
          return item
     }))
  }
  return <ContextCart.Provider value={{ cart,cartLength,removeCart,onBlurQte,handleCart,addToCart,totalCart}}>
    {children}
  </ContextCart.Provider>

}