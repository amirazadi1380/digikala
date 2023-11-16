import { faAngleDown, faArrowDown, faBars, faBasketShopping, faFire, faIdCard, faLocation, faLocationArrow, faLocationCrosshairs, faLocationDot, faLocationPin, faLocationPinLock, faMagnifyingGlassLocation, faMapLocation, faMotorcycle, faPercentage, faProcedures, faSearchLocation, faShop, faShoppingBasket, faTurnDown, faUser, faUserAlt, faUserAltSlash, faUserAstronaut, faUserCircle, faUserMd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'

export default function Header() {
    const [showCtegories,setShowCategories] = useState(false)
    const [showLogin,setShowLogin] = useState(false)
    const [location,setLocation] = useState()
    const [city,setCity] = useState(['شیراز','تهران','اصفهان','تبریز','مشهد'])
    const [cityName,setCityName] = useState()
    const [showCity,setShowCity] = useState(false)
    
        function fetchMyLocation (){
       navigator.geolocation.getCurrentPosition((where)=>{
        console.log(where)
             const {latitude,longitude} = where.coords
             setLocation({latitude,longitude})
       })}

       const handleChange = (e)=>{
        setCityName(e.target.value)
        
       }
       const handleSubmit = (e)=>{
        e.preventDefault()
        setCity(city.filter(cit=>cit.includes(cityName)))
       }
   
  return (
    <header className='border-b-5 border-gray-700 sticky top-0 bg-white shadow-sm'>
            <Head/>
        <div className='w-screen bg-stone-200 my-2 shadow h-0.5 rounded'>
        </div>
        <div className='flex justify-between mx-2'>
            <div>
            <div onClick={()=>setShowCity(!showCity)} className=' text-xs md:text-sm justify-center text-center cursor-pointer border w-32 border-gray-200 p-1 shadow-md rounded text-gray-500'>
                <span>موقعیت مکانی</span>
                <FontAwesomeIcon icon={faLocationDot} className='text-gray-500'/>          
            </div>
{     showCity &&    <div className='w-96 bg-white h-96 text-right border flex flex-col absolute z-50'>
                <form onSubmit={handleSubmit}>
               <input type="text" placeholder='شهر' className='text-right px-1 rounded-md m-1'  onChange={handleChange}/>
                </form>
               {city.filter(cit=> cityName === '' ? cit : cit.includes(cityName)).map(cit=><p key={Math.floor(Math.random()*1000)} className='p-2 border rounded-md'>{cit}</p>)}
             </div>}
            </div>
            <ul className='flex space-x-1 md:space-x-5 text-sm  items-center text-gray-500 '>
                <li className='flex text-[8px]  lg:text-[15px] space-x-1 items-center hover:border-b-2 border-red-600 transition-all duration-75'>
                    <Link >در دیجی کالا بفروشید</Link>
                </li>
                <li className='flex text-[8px]  lg:text-[15px] space-x-1 items-center hover:border-b-2 border-red-600 transition-all duration-75'>
                    <Link >سوالی دارید؟</Link>
                </li>
                <div className='h-5 w-0.5 bg-stone-400'></div>
                <li className='flex text-[8px]  lg:text-[15px] space-x-1 items-center hover:border-b-2 border-red-600 transition-all duration-75'>
                    <Link >تخفیف و پیشنهاد ها</Link>
                    <FontAwesomeIcon icon={faFire}/> 
                </li>
                <li className='flex text-[8px]  lg:text-[15px] space-x-1 items-center hover:border-b-2 border-red-600 transition-all duration-75'>
                    <Link>کارت هدیه</Link>
                    <FontAwesomeIcon icon={faIdCard}/> 
                </li>
                <li className='flex text-[8px]  lg:text-[15px] space-x-1 items-center hover:border-b-2 border-red-600 transition-all duration-75'>
                    <Link>سوپر مارکت</Link>
                    <FontAwesomeIcon icon={faMotorcycle}/> 
                </li>
                <li className='flex space-x-1 items-center hover:border-b-2 border-red-600 transition-all duration-75'>
                    <Link >شگفت انگیز ها</Link>
                    <FontAwesomeIcon icon={faPercentage}/> 
                </li>
                <li onMouseEnter={()=>setShowCategories(!showCtegories)} onMouseLeave={()=>setShowCategories(!showCtegories)} className='flex space-x-1 items-center hover:border-b-2 border-red-600 transition-all duration-75'>
                    <Link  className='font-bold text-lg text-gray-700'>دسته بندی</Link>
                    <FontAwesomeIcon icon={faBars}/> 
                </li>
            </ul>   
        </div>
       {showCtegories && <div className='w-screen h-52 border bg-white rounded-b-2xl round border-gray-200 shadow-md absolute z-20 '></div>} 


      
    </header>
  )
}
