

import Header from "../components/Header";
import { useContext } from "react";
import { ContextCart } from "../context";
import CartItem from "../components/CartItem";
import LayoutWrapper from "../Layouts/Layout";

export default function Cart(){
const {cart} = useContext(ContextCart)
    return<>
     <LayoutWrapper>

        <div className="my-40 flex flex-col container mx-auto">
         <div>
             {
             cart.map((item)=>{
              return <CartItem key={item.id} product={item}/>
             })

             }

         </div>
         <div className="mt-8 px-5 border-t ">
            <div className="flex mb-5 justify-between w-full border-slate-300 pt-3">
             <span className="text-slate-600 text-lg uppercase">Subtotal :</span>
             <span className="text-lg font-semibold">$250</span>
            </div>
            <div className="flex justify-between w-full">
             <span className="text-slate-600 text-lg uppercase">Shipping :</span>
             <span className="text-lg font-semibold uppercase">Free</span>
            </div>
         </div>
         <div className="border-slate-300 flex justify-between pt-2 mt-5 px-5">
       <span className="text-black font-bold text-lg uppercase">Total :</span>
             <span className="text-xl font-semibold uppercase">$250</span>
         </div>


          <button className="bg-colorPrimary mt-10 font-semibold text-whiteColor py-4 rounded-full max-w-[200px] ">Checkout</button>

        </div>
     </LayoutWrapper>

    
    
    </>
}