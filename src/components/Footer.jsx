

import { IoIosArrowUp } from "react-icons/io";

export default function Footer(){

    return   <footer className="bg-colorPrimary">
            <div className="bg-black rounded-t-[40px] pt-20  relative">
            <button className="bg-black shadow-md p-5 flex self-center rounded-full absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2"><IoIosArrowUp className="text-colorPrimary" size={60} /></button>
          <div className="container mx-auto mt-10 gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
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
}