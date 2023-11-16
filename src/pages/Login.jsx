import React, { useContext, useState } from 'react'
import { AppContext } from '../App'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Login() {
    const {logInfo,setLogInfo} = useContext(AppContext)
    const [showLog,setShowLog] = useState(true)
    const [showSign,setShowSign] = useState(false)
    const [username,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [password2,setPassword2] = useState('')
    const navigate = useNavigate()

    const [logUserName,setLogUserName] = useState('')
    const [logPassword,setLogPassword] = useState('')

  return (
    <div className='flex justify-center items-center h-screen '>
        <FontAwesomeIcon icon={faArrowLeft} className='text-3xl absolute left-2 top-2 cursor-pointer' onClick={()=>navigate('/')}/>
        <div className='bg-sky-900 w-[550px] h-[560px] rounded-md'>
            <div className='bg-sky-800 w-full text-stone-300 flex space-x-5 text-center justify-center items-center h-24 rounded-md'>
                <p onClick={()=>{
                    setShowSign(!showSign)
                    setShowLog(!showLog)
                }} className={`${showLog && 'border-b text-stone-50 border-b-stone-200'} text-lg hover:text-stone-50 cursor-pointer`}>عضویت</p>
                <p onClick={()=>{
                    setShowSign(!showSign)
                    setShowLog(!showLog)
                }} className={`${showSign && 'border-b text-stone-50 border-b-stone-200'} text-lg hover:text-stone-50  cursor-pointer`}>ثبت نام</p>
            </div>

{ showSign ?   <form onSubmit={(e)=>{
                e.preventDefault()
                setLogInfo([...logInfo,{
                    username:username,
                    email:email,
                    password:password
                }])
                console.log(logInfo)
            }} className='flex justify-center '>
            <label className='flex flex-col space-y-8 mt-10'>
                <input value={username} onChange={(e)=>setUserName(e.target.value)} type="text" className='text-right ' placeholder='نام کاربری'/>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className='text-right ' placeholder='ایمیل'/>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className='text-right ' placeholder='رمز عبور' />
                <div className='flex flex-col text-center '>
                <input value={password2} onChange={(e)=>setPassword2(e.target.value)}  type="password" className='text-right ' placeholder='تکرار رمز عبور' />
               
                {password == password2 ? <p className='text-xs text-green-500'> درست</p> : <p className='text-xs text-red-500'>پسورد مطابقت ندارد</p> }
                </div>
                <button type='submit' onClick={()=>{
                       
                    }} className='bg-sky-600 w-64 h-10 rounded-3xl hover:bg-sky-400 transition-all duration-100 text-stone-200 font-extrabold text-lg'>ورود</button>
            </label>
        </form> :


        <form onSubmit={(e)=>{
            e.preventDefault()
      
            console.log("done")
            console.log(logInfo[1].username)
            console.log(logInfo[1].password)
            if(logInfo[1].username === logUserName && logInfo[1].password === logPassword ){
            alert('اطلاعات درست است')      
            setLogUserName('')
            setLogPassword('')
            }
            else{
                alert('نام کاربری یا رمز عبور اشتباه است')
                setLogUserName('')
                setLogPassword('')
            }
        }} className='flex justify-center '>
        <label className='flex flex-col space-y-8 mt-10'>

            <input value={logUserName} onChange={(e)=>setLogUserName(e.target.value)} type="text" className='text-right ' placeholder='نام کاربری'/>
            <input value={logPassword} onChange={(e)=>setLogPassword(e.target.value)}  type="password"  className='text-right ' placeholder='رمز عبور'/>



            <div className='flex justify-between items-center w-60'>
                <div className='text-stone-200  w-24 flex  items-center space-x-1'>
                    <input type="checkbox" className='w-3'/><p className='text-[10px] opacity-50'>
                        مرا به خاطر بسپار
                    </p>
                </div>
                <Link className='text-[10px] opacity-50 text-stone-200'>رمز عبور را فراموش کردید؟</Link>
            </div>
            <button type='submit' onClick={()=>{

              
                
                }} className='bg-sky-600 w-64 h-10 rounded-3xl hover:bg-sky-400 transition-all duration-100 text-stone-200 font-extrabold text-lg'>ورود</button>
        </label>
    </form>
        }
        
       
            
        </div>
    </div>
    
  )
}
