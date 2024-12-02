import { useContext } from "react"
import { ContextCart } from "../context"
import { IoIosArrowDown,IoIosArrowUp  } from "react-icons/io";

export default function CartItem({product}){
    const {handleCart,onBlurQte,removeCart} = useContext(ContextCart)
    return <>
     <div className="p-5  flex flex-col md:flex-row gap-10 justify-between">
          <div className="flex">
             <img src={product.image} className="size-32 rounded-md object-contain mr-10" alt="" />
             <div className="w-[350px]">
                <h1 className="text-black font-extrabold text-xl">{product?.title}</h1>
                <span className="block text-black mt-6">{product?.category}</span>
                <p className="text-slate-500 text-xs mt-3 line-clamp-3 max-w-[250px]">{product?.description}</p>        
             </div>
             </div>
             <div className="flex  justify-between gap-10">
             <div className="flex  gap-3 ">
                <input type="text" value={product?.quantite} onChange={(e)=>onBlurQte(product?.id,e.target.value)}   className="py-1 px-1 size-10 text-center text-colorPrimary border border-gray-400 rounded-md outline-none" min={1}/>
                <div className="flex flex-col">
                  <button className="" onClick={()=> handleCart("increment",product?.id)}><IoIosArrowUp size={20} className="text-gray-600" /></button>
                  <button className="" onClick={()=>handleCart("decrement",product?.id)}><IoIosArrowDown size={20} className="text-gray-600" /></button>
                </div>
             </div>
             <div className="flex w-[100px] flex-col justify-between items-end">
                <span className="font-bold text-2xl">${product?.price}</span>
                <button className="text-colorPrimary text-lg" onClick={()=> removeCart(product?.id)}>Remove</button>
             </div>
          </div>

         </div>
    
    </>
}