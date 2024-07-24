
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import LayoutWrapper from "../Layouts/Layout"
import BuyNow from "../components/BuyNow"

import { TiSocialFacebook,TiSocialLinkedin ,TiSocialInstagram  } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";

export default function ProductPage(){
  
    const param = useParams()
    const {data,loading} = useFetch(`https://fakestoreapi.com/products/${param.id}`)
    return <>
    <LayoutWrapper>
   <div className="my-40 container mx-auto">

    {
        loading ?
       <h1>...Loading</h1>
        :
  <div className=" flex flex-col md:flex-row gap-10  w-full">
        <div className="w-full md:w-1/2 px-5">
             <img src={data?.image} className="w-full object-contain aspect-square rounded-md" alt=""  />
             <div className="flex gap-x-3 mt-4">
               <img src="https://picsum.photos/id/4/200/300" className="size-10 rounded-sm aspect-square object-cover" alt=""  />
               <img src="https://picsum.photos/id/6/200/300" className="size-10 rounded-sm aspect-square object-cover" alt=""  />
               <img src="https://picsum.photos/id/7/200/300" className="size-10 rounded-sm aspect-square object-cover" alt=""  />
               <img src="https://picsum.photos/id/8/200/300" className="size-10 rounded-sm aspect-square object-cover" alt=""  />
             </div>
        </div>
        <div className="w-full space-y-3 px-5  md:w-1/2 ">
            <h1 className="text-3xl font-bold">${data?.price}</h1>
            <div className="flex ">
            <div className="flex space-x-1">
                <span className="size-5 rounded-full bg-yellow-400 clip_path_star "></span>
                <span className="size-5 rounded-full bg-yellow-400 clip_path_star"></span>
                <span className="size-5 rounded-full bg-yellow-400 clip_path_star"></span>
                <span className="size-5 rounded-full bg-yellow-400 clip_path_star"></span>
                <span className="size-5 rounded-full bg-yellow-400 clip_path_star"></span>
            </div>
<div className="text-slate-700 text-base ml-5  font-medium">4.5/5 Star Rating</div>
            </div>
            <h1 className="text-3xl font-semibold max-w-[400px] line-clamp-1">{data?.title}</h1>
            <h2 className="text-base font-medium text-gray-700 max-w-[400px]">{data?.category}</h2>
            <p className="text-sm text-gray-700 max-w-[400px]">{data?.description}</p>
          {/* Buy and checkout action */}
         <BuyNow product={data}/>
          {/* Buy and checkout action */}
         <div className="flex items-center gap-3 mt-5">
          <span className="text-gray-700">Share</span>
          <div className="flex space-x-2">
           <TiSocialFacebook className="size-5" />
           <TiSocialLinkedin className="size-5" />
           <TiSocialInstagram  className="size-5"/>
          </div>
         </div>
         {/* we accept and free shipping */}
         <div className="w-[550px] max-w-full space-y-5">
            <div className="flex justify-between  px-3 py-2 bg-slate-100 rounded-sm">
               <span className="text-gray-700">We Accept</span>
               <div className="flex gap-3">
                  <img src="/src/assets/logos_mastercard.png" className="h-5 aspect-square object-contain"/>
                  <img src="/src/assets/logos_paypal.png" className="h-5 aspect-square object-contain"/>
                  <img src="/src/assets/logos_visa.png" className="h-5 aspect-square object-contain"/>
               </div>
          </div>
            <div className="flex justify-between  px-3 py-2 bg-slate-100 rounded-sm">
               <span className="text-gray-700">30-days Free Returns</span>
               <button className="flex items-center gap-3 text-sm">
                Read more
               <IoIosArrowForward size={16}/>
               </button>
          </div>
         </div>
         {/* we accept and free shipping */}


        </div>

        
    </div>
    }
   </div>
    </LayoutWrapper>
  
    
    </>
}