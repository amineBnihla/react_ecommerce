import { useContext, useEffect, useRef, useState } from "react"

import { LuShoppingCart } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { ContextCart } from "../context";
import useFetch from "../hooks/useFetch";
import { IoMenu } from "react-icons/io5";



export default function Header(){
   const headElem = useRef(null)
 
   const location = useLocation()
   const [closed,setClosed] = useState(true)
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
   
    //  function toggleMenu(){

    //  }
   
    return <>
    <header className="elem_header fixed top-0 left-0 w-screen h-20 z-50" ref={headElem}>
     <div className="container relative h-full mx-auto flex justify-between items-center">
        <Link to={'/'}>   <img src="/src/assets/logo.png" className="w-14 md:w-20" alt=""  /></Link>  
        <button className="block lg:hidden"><IoMenu color="#FFF" size={30} onClick={()=>setClosed(!closed)}/></button>
      <nav   className={"absolute left-0 top-full lg:top-0  overflow-hidden lg:w-auto w-full bg-black lg:bg-transparent lg:relative transition-[clip-path] duration-500 " + (closed ? ' [clip-path:polygon(0_0,100%_0,100%_0,0_0)] lg:h-auto lg:[clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]':'h-auto [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]')}>
        <ul className="flex items-center lg:gap-5 flex-col lg:flex-row">

          {
            loading ?
            [...Array(4)].map(()=> <><span className="w-28 h-3 rounded-sm bg-slate-400 animate-pulse"></span></>)
     
            :
            data.map((cat)=>(     
            <Link to={'/category/'+cat} key={cat} className="text-whiteColor w-full lg:w-fit text-center uppercase block text-xs py-4  lg:py-0 hover:bg-slate-900 "><li  >{cat}</li></Link>  
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