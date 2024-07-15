
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import LayoutWrapper from "../Layouts/Layout"
import BuyNow from "../components/BuyNow"

import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn,FaFacebookF  } from "react-icons/fa";


export default function ProductPage(){
  
    const param = useParams()
    const {data,loading,error} = useFetch(`https://fakestoreapi.com/products/${param.id}`)

    return <>
    <LayoutWrapper>
   <div className="my-40 container mx-auto">

    {
        loading ?
       <h1>...Loading</h1>
        :
  <div className=" flex gap-10  w-full">
        <div className="w-full md:w-1/2 px-5">
             <img src="https://picsum.photos/id/1/200/300" className="w-full object-cover aspect-square rounded-md" alt="" srcset="" />
             <div className="flex gap-x-3 mt-4">
               <img src="https://picsum.photos/id/4/200/300" className="size-5 rounded-sm aspect-square object-cover" alt="" srcset="" />
               <img src="https://picsum.photos/id/6/200/300" className="size-5 rounded-sm aspect-square object-cover" alt="" srcset="" />
               <img src="https://picsum.photos/id/7/200/300" className="size-5 rounded-sm aspect-square object-cover" alt="" srcset="" />
               <img src="https://picsum.photos/id/8/200/300" className="size-5 rounded-sm aspect-square object-cover" alt="" srcset="" />
             </div>
        </div>
        <div className="w-full space-y-3 md:w-1/2">
            <h1 className="text-2xl font-bold">$210</h1>
            <div className="flex ">
            <div className="flex space-x-1">
                <span className="size-6 rounded-full bg-yellow-400 clip_path_star"></span>
                <span className="size-6 rounded-full bg-yellow-400 clip_path_star"></span>
                <span className="size-6 rounded-full bg-yellow-400 clip_path_star"></span>
                <span className="size-6 rounded-full bg-yellow-400 clip_path_star"></span>
                <span className="size-6 rounded-full bg-yellow-400 clip_path_star"></span>
            </div>
<div className="text-slate-700 text-base ml-5  font-medium">4.5/5 Star Rating</div>
            </div>
            <h1 className="text-3xl font-semibold">Organic Coffe Scrub</h1>
            <p className="text-sm text-gray-700 max-w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quasi, in officia dignissimos id officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cupiditate repellendus, veniam sapiente doloribus modi.</p>
            <p className="text-sm text-gray-700 max-w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quasi, in officia dignissimos id officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cupiditate repellendus, .</p>
         <BuyNow/>
         <div className="flex items-center gap-3 mt-5">
          <span className="text-gray-700">Share</span>
          <div className="flex space-x-2">
           <FaFacebookF className="size-10" />
           <FaLinkedinIn className="size-10" />
           <FaInstagram  className="size-10"/>
          </div>
         </div>
        </div>

        
    </div>
    }
   </div>
    </LayoutWrapper>
  
    
    </>
}