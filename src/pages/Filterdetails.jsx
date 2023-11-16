import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function Filterdetails() {
  const navigate = useNavigate()
  const {category} = useParams()
  const {products} =  useFetch()
  
  return (
    <div>
      <FontAwesomeIcon className='text-2xl px-3 cursor-pointer hover:text-stone-300' onClick={()=>navigate('/')} icon={faArrowLeft}/>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

      {products.filter(item=>item.category == category).map(item=><div className='border shadow-md rounded-lg my-1 w-64 text-center flex flex-col justify-center items-center' key={item.id}>
        <img src={item.image} alt={item.title} className='w-32 h-36'/>
        <p>{item.title}</p>
        <p className='text-red-500'>{item.category}</p>
      </div>)}
      </div>
    </div>
  )
}
