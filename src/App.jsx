import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/authService'
import { login, logout } from './store/reducers/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import Loader from './components/Loader'

function App() {
  const [loading,setLoading] = useState(true)
  const dispatch=useDispatch()
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    }).finally(()=>{
      setLoading(false)
    })

  })

  return (
    loading?(<div className='w-full h-screen flex items-center justify-center'>
    <Loader/>
    </div>):(
      <div className='flex flex-col justify-center min-h-screen w-full'>
      <Header/>
      <Outlet/>
      <Footer/>
      </div>
    )
  )
}

export default App
