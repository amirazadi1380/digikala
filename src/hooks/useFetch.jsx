import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'

export default function useFetch() {
const [products,setProducts] = useState([])
const [isLoading,setIsLoading] = useState(false)
const {url} = useContext(AppContext)
   useEffect(()=>{
    async function fetchMyData(){
      setIsLoading(true)
        const res = await fetch(url)
        const data = await res.json()
        setProducts(data)
        console.log(data)
        setIsLoading(false)
    }
    fetchMyData()
   },[])

  return {products,isLoading}
}
