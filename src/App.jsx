import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { createContext,  useState } from 'react'
import Basket from './pages/Basket'
import Allwonders from './pages/Allwonders'
import Eachproduct from './pages/Eachproduct'
import Filterdetails from './pages/Filterdetails'
import Login from './pages/Login'
import Test from './pages/Test'
import Information from './pages/Information'

export const AppContext = createContext()
function App() {
  const [url,setUrl] = useState('https://fakestoreapi.com/products')
  const [appoinment,setAppoinment] = useState([{
    name:'',
    day:'',
  }])
  const [basketObj,setBasketObj] = useState([{
    title:'',
    price:'',
    src:''
  }])
  const [logInfo,setLogInfo] = useState([{
    email:'',
    username:'',
    password:''
  }])
  console.log(logInfo)
  const [isLogged,setIsLogged] = useState(false)
  return (
    
    <AppContext.Provider value={{url,setUrl,basketObj,setBasketObj,logInfo,setLogInfo,isLogged,setIsLogged,appoinment,setAppoinment}}>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='basket' element={<Basket/>}/>
      <Route path='all-wonders' element={<Allwonders/>}/>
      <Route path='all-wonders/:title' element={<Eachproduct/>}/>
      <Route path='/:category' element={<Filterdetails/>}/>
      <Route path='test' element={<Test/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='information' element={<Information/>}/>
    </Routes>
    </BrowserRouter>

    </AppContext.Provider>
  )
}

export default App
