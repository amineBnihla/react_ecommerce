
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";


export default function ProductItem({id,title,description,image,price}){
 

    return <>
    <div className=" pr-10 shadow-md flex-[50%] md:flex-[30%]  pb-5 relative">
        <div className="max-w-[200px]">
        <img src={image} className="w-full aspect-square rounded-lg object-contain" alt="" srcset="" />
        <div className="py-7">
            <h1 className="font-semibold text-lg mb-2 line-clamp-1">{title}</h1>
            <p className="text-xs text-gray-500 line-clamp-3">{description}</p>
        </div>
        <h2 className="font-semibold text-lg">USD {price}</h2>
        </div>
        <Link to={`/product/${id}`}>
        <RiArrowRightUpLine size={20} className="text-colorPrimary absolute right-3 bottom-3 "/>
        </Link>
    </div>
    </>

}