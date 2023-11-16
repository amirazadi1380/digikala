import React, { useContext, useState } from 'react'
import { AppContext } from '../App'
import toast, { Toaster } from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faEraser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function Basket() {
  const {basketObj,setBasketObj} = useContext(AppContext)
  const [number,setNumber] = useState(1)
  const navigate = useNavigate()
  return (
    <div className='bg-stone-200  text-center space-y-10 text-xs w-full h-[700px] p-5'>
      <div className='flex justify-between'>

          <FontAwesomeIcon onClick={()=>navigate('/')}  icon={faArrowLeft} className='float-left hover:bg-white hover:border-white border border-stone-300 p-1 rounded-2xl cursor-pointer'/>
          <div className='flex cursor-pointer items-center space-x-2' onClick={()=>setBasketObj([])}>
          <p>reset</p>
          <FontAwesomeIcon icon={faEraser} className='float-left hover:bg-white hover:border-white border border-stone-300 p-1 rounded-2xl cursor-pointer'/>
        
          </div>
      </div>
        { basketObj.filter((item,index)=>index > 0).map(item=><div className='border border-stone-200 shadow-xl h-40 ' key={Math.random()*1000}>
          <div className=' border flex justify-center space-x-2'>
           <div className='flex flex-col justify-between items-center'><p className='font-bold'>{item.title}</p>
           <button className='shadow-lg  w-16 h-10 rounded-md bg-stone-300 hover:bg-white transition-all duration-200'>خرید نهایی</button>
            <p className='font-bold text-lg '>{item.price * number}</p>
            </div> 
            <div>
            <img src={item.src} alt={item.title} className='w-20 rounded-lg'/>
            <div className='border bg-red-300 text-white text-base rounded-md flex justify-between my-1 px-1 font-bold'><span onClick={()=>setNumber(number-1)} className='hover:text-red-600 cursor-pointer'>-</span> {number} <span onClick={()=>setNumber(number+1)} className='hover:text-red-600 cursor-pointer'>+</span> </div>
            </div>
          </div>           
       
        </div>)}
    </div>
  )
}
