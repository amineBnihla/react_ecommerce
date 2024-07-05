import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";


import { IoIosArrowUp } from "react-icons/io";



export default function Home(){
  const [products,setProducts] = useState([])

    useEffect(()=>{
     
         async function getProducts(){
         
            try {
              const res =await  fetch('https://fakestoreapi.com/products?limit=6')
              const data = await res.json()
          
              setProducts(data)
            } catch (error) {
                console.log(error)
            }
             
        }

    getProducts()
    },[])


    return <>
    <div>
        <Header/>
        <section className=" h-screen w-full">
        <div className="absolute w-full h-full top-0 left-0 bg-[url('src/assets/store_shop.jpg')] bg-cover  brightness-[20%]"></div>
    <div className="container mx-auto h-full relative ">
       <h1 className="text-white text-9xl  font-bold absolute left-0 top-1/2 tracking-wider -translate-y-1/2 whitespace-pre">
        Explore <br/>
        <span className="text-colorPrimary">Latest</span> <br/>
        Products
       </h1>
       <h2 className="text-3xl w-[18ch]  absolute top-1/3   text-white font-semibold right-6 uppercase">
        Shop Our <br/> New Arrivals collection and latest product
       </h2>
    </div>
        </section>
        <section className="py-20">
            <div className="container  mx-auto">

            <div className=" flex w-full justify-between pb-10">
          <h2 className="text-xl font-semibold text-black uppercase">FILTRER +</h2>
          <h2 className="text-xl font-semibold text-black uppercase">SHORT BY: <span className="text-gray-700">NEWEST +</span></h2>
            </div>
            <div className="flex gap-10 flex-wrap">

                {
                    products.map((pro)=>{
                     
                        return   <ProductItem key={pro.id} {...pro}/>
                    })
                }
           
 

            </div>
            <h2 className="text-2xl font-bold mt-10 max-w-[350px] text-black uppercase">Experience luxury with our premium products</h2>
            </div>

        </section>
        <section className="pb-20">
            <div className="container mx-auto">

            <div className="flex justify-end">
        <h2 className="text-2xl font-bold my-10 max-w-[200px] text-black uppercase">Check Our Products</h2>
            </div>
            <div className="grid gap-6 grid-cols-3 grid-rows-2">
             <div className="relative col-span-2 row-span-2 rounded-md bg-gray_dark">
               <h1 className="text-9xl font-black text-white text-opacity-15">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore.</h1>
               <img src="src/assets/fashionist.png" className="absolute w-[450px] bottom-0 left-1/2 -translate-x-1/2" alt="" srcset="" />
             </div>
             <div className="relative col-span-1  row-span-1 rounded-md px-3 py-5 text-black bg-gray_dark">
            <h1 className="font-bold text-5xl text-whiteColor uppercase leading-tight">  Explore Our <span className="text-colorPrimary block">Generius Offers</span> today!</h1>
              </div>
             <div className="relative col-span-1 row-span-1 rounded-md bg-gray_dark">
             <img src="src/assets/female-fashionista.png" className="absolute w-[350px] bottom-0 left-1/2 -translate-x-1/2" alt="" srcset="" />

             </div>
            </div>
            </div>

        </section>
        <section className="py-20">
            <div className="container  mx-auto">

            <div className="flex gap-10 flex-wrap">

                {
                    products.map((pro)=>{
                     
                        return   <ProductItem key={pro.id} {...pro}/>
                    })
                }
           
 

            </div>
   
            </div>

        </section>
        <section className="bg-colorPrimary py-20 relative">
          <img src="src/assets/logo_black.png" className="absolute top-1/2 -translate-y-1/2 right-1/4 w-[410px] opacity-50" alt="" srcset="" />
          <div className="container mx-auto flex flex-col gap-5">
          <h1 className="text-4xl font-bold uppercase text-white mb-10">JOIN NOW,<br/>Subscribe</h1>
           <input type="text"  className="bg-whiteColor rounded-md max-w-[400px] py-3 px-5 outline-none border-none placeholder:text-gray-500" name="" id="" placeholder="E-mail" />
           <button className="py-3 px-4 rounded-full bg-whiteColor w-fit text-colorPrimary font-medium text-xl">Subscribe</button>
            </div>
        </section>

        <footer className="bg-colorPrimary">
            <div className="bg-black rounded-t-[40px] pt-20  relative">
            <button className="bg-black shadow-md p-5 flex self-center rounded-full absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2"><IoIosArrowUp className="text-colorPrimary" size={60} /></button>
          <div className="container mx-auto mt-10 grid grid-cols-4">
            <nav className="">
             <h2 className="text-colorPrimary mb-5 font-semibold text-3xl">Services</h2>
             <ul className="flex flex-col gap-3">
                <li className="text-whiteColor  text-xl">Organize</li>
                <li className="text-whiteColor  text-xl">Planner</li>
                <li className="text-whiteColor text-xl ">Discounts</li>
                <li className="text-whiteColor  text-xl">Travel</li>
             </ul>
            </nav>
            <nav className="">
             <h2 className="text-colorPrimary mb-5 font-semibold text-3xl">About</h2>
             <ul className="flex flex-col gap-3">
                <li className="text-whiteColor  text-xl">Our Story</li>
                <li className="text-whiteColor  text-xl">Benefits</li>
                <li className="text-whiteColor text-xl ">Team</li>
                <li className="text-whiteColor  text-xl">Careers</li>
             </ul>
            </nav>
            <nav className="">
             <h2 className="text-colorPrimary mb-5 font-semibold text-3xl">Help</h2>
             <ul className="flex flex-col gap-3">
                <li className="text-whiteColor  text-xl">FAQs</li>
                <li className="text-whiteColor  text-xl">Contact Us</li>
          
             </ul>
            </nav>
            <nav className="">
             <h2 className="text-colorPrimary mb-5 font-semibold text-3xl">Socials</h2>
             <ul className="flex flex-col gap-3">
                <li className="text-whiteColor  text-xl">Facebook</li>
                <li className="text-whiteColor  text-xl">Linekedin</li>
                <li className="text-whiteColor text-xl ">Twitter</li>
                <li className="text-whiteColor  text-xl">Instagram</li>
             </ul>
            </nav>
         
          </div>

          <div className="py-5 mt-10 text-center text-whiteColor font-medium text-xl w-full">
              MAB - Copyright
            </div>
            </div>
          
        </footer>
    </div>
    
    </>
}