import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function Eachproduct() {
    const {title}  = useParams()
     const {products,isLoading} = useFetch()
  return (
    <div>
        {isLoading && <span className='absolute left-1/2 top-1/3 font-black text-3xl text-stone-500 -translate-x-1/2 '>  loading...</span>}
        {products.filter(product=>product.title == title).map(product=><div className='absolute left-1/2 -translate-x-1/2 top-1/3 space-y-5 text-stone-500 cursor-pointer hover:scale-150 transition-all duration-300 shadow-md w-48 h-56 flex flex-col justify-center text-center items-center' key={product.id}>
            <img src={product.image} alt={product.title} className='w-16' />
            <p className='text-xs'>{product.title}</p>
            <p>{product.price}$</p>
        </div>)}</div>
  )
}
