

export default function Loading({number}){

   
    return <>
    {
        [...Array(number)].map(()=>(
             <> <div className=" pr-10 shadow-md animate-pulse flex-[50%] md:flex-[30%]  pb-5 relative">
        <div className="max-w-[200px]">
        <div  className="w-full   bg-slate-200 aspect-square rounded-lg object-contain" alt=""  />
        <div className="py-7">
            <div className="font-semibold w-[150px] h-7 bg-slate-200 text-lg mb-2 line-clamp-1"></div>
            <div className="space-y-2">
                <span className="block bg-slate-200 h-3"></span>
                <span className="block bg-slate-200 h-3"></span>
                <span className="block bg-slate-200 h-3"></span>
            </div>
        </div>
        <div className="w-[100px] h-4 bg-slate-200"></div>
        </div>
    </div></>
        ))
    }
     
    
    </>

}