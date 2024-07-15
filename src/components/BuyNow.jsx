


export default function BuyNow(){
    return <>
     <div className="space-y-5 max-w-[550px]">
            <div className="flex gap-5">
                <div className="flex border border-gray-400 rounded-md overflow-hidden">
                    <button className="size-10 text-lg font-medium">-</button>
                    <span className="size-10 text-center leading-[40px]">1</span>
                    <button className="size-10 text-lg font-medium">+</button>
                </div>
                <button className="bg-gray-900 text-white rounded-sm  font-medium w-full">Add To Cart</button>

            </div>
                <button className="bg-colorPrimary rounded-sm text-white  py-2 font-medium w-full">Buy Now</button>
          </div>
    </>
}