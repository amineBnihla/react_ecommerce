import { useEffect, useState } from "react";




export default function useFetch(url,option){

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')

    useEffect(()=>{
    async function getData(){
        setLoading(true)
try {
       const res = await fetch(url,option)
       const data = await res.json()
       setData(data)
       setLoading(false)
} catch (error) {
    setError(error)
    setLoading(false)
}

}
getData()
    },[url])


    return{data,error,loading}

}