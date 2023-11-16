import React from 'react'

export default function Categories() {

    
  return (
    <div  className='flex justify-center my-16 space-x-10 '>
        <div className='grid place-items-center'>
           <div className='w-16 flex justify-center items-center text-lg font-extrabold text-gray-500  h-16 border rounded-full p-2'>
            ...
            </div>  
            <p> بیشتر</p>
        </div>
        <div className='grid place-items-center'>
            <img src="games.png" alt="games" className='w-16 border rounded-full p-2' />
            <p>بازی</p>
        </div>
        <div className='grid place-items-center'>
            <img src="payment-method.png" alt="games" className='w-16 border rounded-full p-2' />
            <p>پرداخت</p>
        </div>        
        <div className='grid place-items-center'>
            <img src="laundry.png" alt="games" className='w-16 border rounded-full p-2' />
            <p>پوشاک</p>
        </div>
        <div className='grid place-items-center'>
            <img src="transfer.png" alt="games" className='w-16 border rounded-full p-2' />
            <p>ارسال</p>
        </div>

    </div>
  )
}
