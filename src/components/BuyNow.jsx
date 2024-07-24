import { useContext } from "react"
import { ContextCart } from "../context"
import { Link } from "react-router-dom"



export default function BuyNow({product}){
    const {handleCart,addToCart,cart} = useContext(ContextCart)
  
    const proIndex = cart.findIndex((c)=>{ 
       return c.id == product?.id})
  
    return <>
     <div className="space-y-5 w-[550px] max-w-full">
            <div className="flex gap-5">
                <div className="flex border border-gray-400 rounded-md overflow-hidden">
                    <button className="size-10 text-lg font-medium" onClick={()=>  handleCart("decrement",product?.id)}>-</button>
                    <span className="size-10 text-center leading-[40px]">{cart[proIndex]?.quantite ?? 0}</span>
                    <button className="size-10 text-lg font-medium" onClick={()=> proIndex != -1 ? handleCart("increment",product?.id) : addToCart(product)}>+</button>
                </div>
                <Link to={'/cart'} className="bg-gray-900 text-white rounded-sm flex items-center justify-center  font-medium w-full">
                Add to cart
                </Link>

            </div>
                <button className="bg-colorPrimary rounded-sm text-white  py-2 font-medium w-full">Buy Now</button>
          </div>
    </>
}