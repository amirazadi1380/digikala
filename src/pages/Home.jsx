import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Wonderproducts from '../components/Wonderproducts'
import Slider from '../components/Slider'
import Filters from '../components/Filters'
import { Link } from 'react-router-dom'



export default function Home() {
  return (
    <div className='relative'>
        <Header/>
        <Slider/>
        <Categories/>
        <Wonderproducts/>
        <Filters/>
    
    </div>
  )
}
