import React, { useContext } from 'react'
import useFetch from '../hooks/useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from '../App'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import {Swiper,SwiperSlide} from "swiper/react";
import {A11y,Navigation} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Wonderproducts() {
    const { products,isLoading } = useFetch()
    const {setBasketObj,basketObj} = useContext(AppContext)
    return (
        <div className='w-screen flex justify-center bg-gradient-to-r from-slate-500 to-slate-900 py-5'>
            <Toaster />
      
        <div className='text-center w-[880px]'>
                <h1 className='my-5 text-2xl font-bold text-red-500 shadow-sm'>پیشنهاد های شگفت انگیز</h1>
                <Swiper 
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={4}
                    navigation
                >
        <div className=' justify-center items-center flex w-full h-[250px] rounded-lg shadow-xl  '> 
            <SwiperSlide><div className='border flex flex-col items-center text-center w-52 h-64 text-xs justify-center space-y-4'>
               <Link to='all-wonders'>
                
               <p className='border w-24 h-10 flex items-center justify-center bg-red-400 rounded-lg'>
               <FontAwesomeIcon icon={faArrowLeft} className='w-5' /> نمایش همه </p>
               </Link>  </div>
              
        </SwiperSlide>
            {isLoading  && <img className='w-56 h-64 border border-stone-200' src='loading-bar.png'/>}
            {products.filter(product => product.id < 10).map(product =>
                <SwiperSlide key={product.id}>
                <div  className='border rounded-lg border-stone-100 mb-2 shadow-lg flex flex-col  items-center text-center w-52 h-64 text-xs justify-center space-y-4'>
                <img src={product.image} alt={product.title} className=' w-16 h-28' />
                <p>{product.title.substring(0, 40)}</p>
                <p>{product.price}</p>
                <button  onClick={()=>{
                    toast('آیتم به سبد خرید اضافه شد')
                    setBasketObj([...basketObj,{
                        title: product.title,
                        price:product.price,
                        src:product.image
                    }])
                }} className='border-none z-50 w-20 h-8 bg-stone-300 rounded-md'>خرید </button>
            </div>
            </SwiperSlide>)}
        </div>
                </Swiper>
        </div> 
         </div>
    )
}
