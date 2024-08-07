import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import ProductItem from "../components/ProductItem"
import LayoutWrapper from "../Layouts/Layout"
import Loading from "../components/Loading"




export default function Category(){
    const param = useParams()
    const {loading,data} = useFetch(`https://fakestoreapi.com/products/category/${param.category}`)

    return<>
    <LayoutWrapper>
    <div className=" py-40 container mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">  
          
        {
            loading ?
            <Loading number={8}/>
            :
         
             data.map((pro)=> <ProductItem key={pro.id} {...pro}/>)
         
        }
        </div>
    </div>
    </LayoutWrapper>
    </>


}