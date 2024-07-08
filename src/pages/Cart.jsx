
import Header from "../components/Header";

export default function Cart(){

    return<>
    <div>
        <Header/>
        <div className="my-40 flex flex-col container mx-auto">
         <div className="p-5  flex justify-between">
          <div className="flex">
             <img src="https://picsum.photos/id/8/200/300" className="w-32 rounded-md object-contain mr-10" alt="" srcset="" />
             <div className="w-[350px]">
                <h1 className="text-black font-extrabold text-2xl">Lorem ipsum dolor sit amet.</h1>
                <span className="block text-black mt-6">Clothes</span>
                <p className="text-slate-500 text-xs mt-3 line-clamp-3 max-w-[250px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam, ratione laudantium praesentium dolore pariatur!</p>        
             </div>
             </div>
             <div className="flex gap-10">
             <div>
                <input type="number" className="py-1 px-1 size-10 text-center text-colorPrimary border border-gray-400 rounded-md outline-none" min={1}/>
             </div>
             <div className="flex flex-col justify-between">
                <span className="font-bold text-2xl">$120</span>
                <button className="text-colorPrimary text-lg">Remove</button>
             </div>
          </div>

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
    </div>
    
    
    </>
}