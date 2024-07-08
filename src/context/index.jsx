import { createContext, useState } from "react";



export const ContextCart = createContext(null)

export default function contextCartComponent({ children }) {

  const [cart, setCart] = useState({})
  function addToCart() {

  }
  function handleCart(type, id) {
    if (type == "increment") {

    }
  }

  return <ContextCart.Provider value={ }>
    {children}
  </ContextCart.Provider>

}