import React from 'react'

export default function Test() {
  return (
    <div className='bg-red-700 w-screen h-screen justify-around'>
        <ul className='lg:flex lg:justify-between hidden  '>
            <li>amir</li>
            <li>ali</li>
            <li>saeed</li>
            <li>james</li>
        </ul>
        <nav className='bg-red-500 w-screen h-16 lg:hidden absolute bottom-0 overflow-hidden'>
        <ul className='flex justify-between items-center h-16 '>
            <li>amir2</li>
            <li>ali2</li>
            <li>saeed2</li>
            <li>james2</li>
        </ul>
        </nav>
    </div>
  )
}
