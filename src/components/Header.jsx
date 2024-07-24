import { useContext, useEffect, useRef } from "react"

import { LuShoppingCart } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { ContextCart } from "../context";
import useFetch from "../hooks/useFetch";




export default function Header(){
   const headElem = useRef(null)
   const location = useLocation()
   const {cartLength} = useContext(ContextCart)
    const {loading,data} = useFetch('https://fakestoreapi.com/products/categories')
     useEffect(()=>{
     if(location.pathname != "/"){
       headElem.current.style.backgroundColor = "#000"
     }
      // let headElem = document.querySelector('.elem_header')
       function checkScroll(){      
          const scroll = this.scrollY

          if(scroll > 0 || location.pathname != "/"){
          headElem.current.style.backgroundColor = "#000"
          }else{
  headElem.current.style.backgroundColor = "transparent"
          }
       
       }
window.addEventListener('scroll',checkScroll)

        return ()=> window.removeEventListener('scroll',checkScroll)

     },[location.pathname])
   
     
   
    return <>
    <header className="elem_header fixed top-0 left-0 w-screen h-20 z-50" ref={headElem}>
     <div className="container h-full mx-auto flex justify-between items-center">
        <Link to={'/'}>   <img src="/src/assets/logo.png" className="w-20 " alt=""  /></Link>  
      <nav>
        <ul className="flex items-center gap-7">

          {
            data.map((cat)=>(     
            <Link to={'/category/'+cat} key={cat}><li className="text-whiteColor uppercase text-xs " >{cat}</li></Link>  
            ) )
          }
        </ul>
      </nav>
   
      <nav>
        <ul className="flex gap-7">
            <li className="text-white uppercase  font-medium">Contact us</li>
            <li className="text-white uppercase  font-medium"><Link to={'/cart'} className="relative"><LuShoppingCart  className="text-whiteColor" size={25}/><span className="absolute -right-2 -top-2 size-5 rounded-full grid place-items-center text-xs text-whiteColor bg-colorPrimary">{cartLength}</span></Link></li>
        </ul>
      </nav>
     </div>
    </header>
    
    </>
}