
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import LayoutWrapper from "../Layouts/Layout"


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
        <div className="w-full md:w-1/2">
             <img src="https://picsum.photos/id/1/200/300" className="w-full object-cover aspect-square rounded-md" alt="" srcset="" />
             <div className="flex gap-x-3 mt-4">
               <img src="https://picsum.photos/id/4/200/300" className="size-5 rounded-sm aspect-square object-cover" alt="" srcset="" />
               <img src="https://picsum.photos/id/6/200/300" className="size-5 rounded-sm aspect-square object-cover" alt="" srcset="" />
               <img src="https://picsum.photos/id/7/200/300" className="size-5 rounded-sm aspect-square object-cover" alt="" srcset="" />
               <img src="https://picsum.photos/id/8/200/300" className="size-5 rounded-sm aspect-square object-cover" alt="" srcset="" />
             </div>
        </div>
        <div className="w-full md:w-1/">
            <h1 className="text-2xl font-bold">$210</h1>
            <div className="flex space-x-1 mt-3">
                <span className="size-6 rounded-full bg-yellow-400 clip_path_star"></span>
                <span className="size-6 rounded-full bg-yellow-400 clip_path_star"></span>
                <span className="size-6 rounded-full bg-yellow-400 clip_path_star"></span>
                <span className="size-6 rounded-full bg-yellow-400 clip_path_star"></span>
                <span className="size-6 rounded-full bg-yellow-400 clip_path_star"></span>
                <div className="text-slate-700 text-base  font-medium">4.5/5 Star Rating</div>
            </div>
        </div>

        
    </div>
    }
   </div>
    </LayoutWrapper>
  
    
    </>
}