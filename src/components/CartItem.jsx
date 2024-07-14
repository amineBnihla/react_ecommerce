import { useContext } from "react"
import { ContextCart } from "../context"
import { IoIosArrowDown,IoIosArrowUp  } from "react-icons/io";

export default function CartItem({product}){
    const {handleCart} = useContext(ContextCart)
    return <>
     <div className="p-5  flex justify-between">
          <div className="flex">
             <img src={product.image} className="w-32 rounded-md object-contain mr-10" alt="" srcset="" />
             <div className="w-[350px]">
                <h1 className="text-black font-extrabold text-2xl">{product?.title}</h1>
                <span className="block text-black mt-6">{product?.category}</span>
                <p className="text-slate-500 text-xs mt-3 line-clamp-3 max-w-[250px]">{product?.description}</p>        
             </div>
             </div>
             <div className="flex gap-10">
             <div className="flex gap-3 ">
                <input type="text"   className="py-1 px-1 size-10 text-center text-colorPrimary border border-gray-400 rounded-md outline-none" min={1}/>
                <div className="flex flex-col">
                  <button className="" onClick={()=> handleCart("increment",product.id)}><IoIosArrowUp size={20} className="text-gray-600" /></button>
                  <button className="" onClick={()=>handleCart("decrement",product?.id)}><IoIosArrowDown size={20} className="text-gray-600" /></button>
                </div>
             </div>
             <div className="flex flex-col justify-between">
                <span className="font-bold text-2xl">${product?.price}</span>
                <button className="text-colorPrimary text-lg">Remove</button>
             </div>
          </div>

         </div>
    
    </>
}