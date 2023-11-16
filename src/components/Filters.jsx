import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Filters() {
  return (
    <div className='flex justify-center flex-col w-full bg-gradient-to-r from-slate-700 to-slate-950 h-64 px-5 items-center space-y-8'>
        <p className='text-red-500 font-bold text-2xl'>دسته بندی ها</p>
        
       <div><Link className='text-white' to='jewelery'>جواهرات</Link></div>
       <div>  <Link className='text-white' to={`men's clothing`} >لباس مردانه</Link></div>
       <div><Link className='text-white' to='electronics'>الکتریکی</Link></div>
       <div><Link className='text-white' to={`women's clothing`}>لباس زنانه</Link></div>
        
    </div>
  )
}
