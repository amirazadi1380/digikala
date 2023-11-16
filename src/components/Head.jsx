import { faAngleDown, faBasketShopping, faClose, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function Head() {
  const [showLogin, setShowLogin] = useState(false)
  const [userSearch, setUserSearch] = useState('m')
  const [showSearch, setShowSearch] = useState(false)
  const { products } = useFetch()

  return (
    <div className='flex justify-between mx-2 items-center my-3 '>
      <div className='flex text-lg text-stone-600 '>
        <Link to='/basket'><FontAwesomeIcon icon={faBasketShopping} className='b border-r-2 border-gray-300 px-3' /></Link>
        <div className={`px-3 space-x-1 relative cursor-pointer ${showLogin ? 'border rounded-full' : ''} `}>
          <div onClick={() => setShowLogin(!showLogin)}>
            <FontAwesomeIcon icon={faAngleDown} className='text-sm ' />
          <Link to='login'><FontAwesomeIcon icon={faUser} /></Link>  
          </div>
          {showLogin && <div className=' w-56 text-right rounded-xl z-10 h-80 border absolute bg-white'>

            اطلاعات عضویت
          </div>}

        </div>

      </div>
      <div className='flex items-center relative'>

        <input onMouseEnter={()=>setShowSearch(!showSearch)}  onChange={(e) => setUserSearch(e.target.value.toLowerCase())} type="text" placeholder='جستجو' className='placeholder:float-right placeholder:px-2 bg-gray-200 mx-2 px-5 text-right w-96 h-9 rounded' />
  {/* {   showSearch &&   <div onMouseEnter={()=>setShowSearch(true)}  className='bg-white text-sm  overflow-hidden rounded-md top-10 z-50 absolute w-[480px] h-[500px]'>
    <FontAwesomeIcon icon={faClose} onClick={()=>setShowSearch(false)} className='p-1 cursor-pointer text-lg text-stone-600 hover:text-white'/>
    {products.filter(item => userSearch === "" ? item : item.title.toLowerCase().includes(userSearch)).map(item => <div key={item.id}>
          <Link to={`all-wonders/${item.title}`} className='flex shadow-md cursor-pointer bg-stone-100 z-50 hover:bg-stone-200 transition-all duration-100 items-center text-center w-96 justify-between'>

            <p className='text-stone-500'>{item.title.substring(0, 15)}</p>
            <p className='text-red-700'>{item.category}</p>
            <img src={item.image} alt={item.title} className='w-6' />
          </Link>
        </div>)}</div>} */}
        <h1 className='text-red-600 font-black text-2xl'>
          LOGO
        </h1>

      </div>
    </div>
  )
}
