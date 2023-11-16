import React, { useContext } from 'react'
import useFetch from '../hooks/useFetch'
import { AppContext } from '../App'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import Head from '../components/Head'

export default function Allwonders() {
   const {products,isLoading} =   useFetch()
   const {setBasketObj,basketObj} = useContext(AppContext)
   const navigate = useNavigate()
  return (
    <div>
        <Head/>
        <div className='grid grid-cols-3 w-full place-items-center '>
            <Toaster/>
            {isLoading  && <img className='w-56 h-64 absolute left-1/2 -translate-x-1/2 top-1/2 ' src='loading-bar.png'/>}
        {
        products.filter(product=>product.id < 20).map(product=><div className='border w-48 border-stone-200 shadow-lg space-y-2 justify-center flex hover:scale-110 hover:z-50 transition-all duration-250 text-center items-center hover:bg-stone-300 flex-col m-1 h-56 rounded-md ' key={Math.random()*1000}>
           <Link to={`${product.title}`} className='flex flex-col text-center justify-center  items-center'> <img src={product.image} alt={product.title} className='w-16' />
            <p className='text-xs'>{product.title}</p>
            <p>{product.price}$</p></Link>
            <button onClick={()=>{
                toast('آیتم به سبد اضافه شد')
                    setBasketObj([...basketObj,{
                        title: product.title,
                        price:product.price,
                        src:product.image
                    }])
                }} className='text-base z-30 bg-red-300 w-16 rounded-full py-1 my-1 hover:bg-black hover:text-white transition-colors duration-250'>خرید </button>
                
        </div>)}
        </div>
        </div>
  )
}
