import { useContext } from "react"
import { ContextCart } from "../context"



export default function BuyNow({id}){

    const {handleCart,cart} = useContext(ContextCart)
    const pro = cart.find((c)=> c.id == id)
    return <>
     <div className="space-y-5 w-[550px] max-w-full">
            <div className="flex gap-5">
                <div className="flex border border-gray-400 rounded-md overflow-hidden">
                    <button className="size-10 text-lg font-medium" onClick={()=> handleCart("increment",id)}>-</button>
                    <span className="size-10 text-center leading-[40px]">{pro?.quantite ?? 0}</span>
                    <button className="size-10 text-lg font-medium" onClick={()=>handleCart("decrement",id)}>+</button>
                </div>
                <button className="bg-gray-900 text-white rounded-sm  font-medium w-full">Add To Cart</button>

            </div>
                <button className="bg-colorPrimary rounded-sm text-white  py-2 font-medium w-full">Buy Now</button>
          </div>
    </>
}