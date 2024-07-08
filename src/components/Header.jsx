import { useEffect, useRef } from "react"

import { LuShoppingCart } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";




export default function Header(){
   const headElem = useRef(null)
   const location = useLocation()
     useEffect(()=>{
     if(location.pathname == "/cart"){
       headElem.current.style.backgroundColor = "#000"
     }
      // let headElem = document.querySelector('.elem_header')
       function checkScroll(){      
          const scroll = this.scrollY
          console.log(scroll)
          if(scroll > 0 || location.pathname == "/cart"){
          headElem.current.style.backgroundColor = "#000"
          }else{
  headElem.current.style.backgroundColor = "transparent"
          }
       
       }
window.addEventListener('scroll',checkScroll)

        return ()=> window.removeEventListener('scroll',checkScroll)

     },[])
   
     
   
    return <>
    <header className="elem_header fixed top-0 left-0 w-screen h-20 z-50" ref={headElem}>
     <div className="container h-full mx-auto flex justify-between items-center">
      <nav>
        <ul className="flex gap-7">
            <li className="text-white uppercase  font-medium">Shop</li>
            <li className="text-white uppercase  font-medium">Women</li>
            <li className="text-white uppercase  font-medium">Men</li>
        </ul>
      </nav>
      <img src="src/assets/logo.png" className="w-20 " alt="" srcset="" />
      <nav>
        <ul className="flex gap-7">
            <li className="text-white uppercase  font-medium">Contact us</li>
            <li className="text-white uppercase  font-medium"><Link to={'/cart'} className="relative"><LuShoppingCart  className="text-whiteColor" size={25}/><span className="absolute -right-2 -top-2 size-5 rounded-full grid place-items-center text-xs text-whiteColor bg-colorPrimary">2</span></Link></li>
        </ul>
      </nav>
     </div>
    </header>
    
    </>
}