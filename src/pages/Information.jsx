import React, { useContext, useState } from 'react'
import { AppContext } from '../App'

export default function Information() {
    const {appoinment,setAppoinment} = useContext(AppContext)
    const [name,setName] = useState('')
    const [date,setDate] = useState()
  return (
    <div className='bg-stone-300 w-full h-screen flex flex-col justify-center items-center'>
        <form onSubmit={(e)=>{
            e.preventDefault()
        }} className='flex flex-col'>
            <label className='flex flex-col space-y-5'>
        <input type="text" onChange={(e)=>setName(e.target.value)} />
        <input type="date" onChange={(e)=>setDate(e.target.value)} />       
            </label>
            <button onClick={()=>{
                setAppoinment(prev=>[...prev,{
                    name:name,
                    date:date
                }])
            }} className='mt-5 border p-2 cursor-pointer'>submit</button>
        </form>
                {
                    appoinment.map(item=><div key={Math.random()*1000}>
                        <h1 className='text-red-600'>
                            {item.name}
                        </h1>
                        <h1 className='text-sky-600'>
                            {item.date}
                        </h1>
                    </div>)
                }
    </div>
  )
}
