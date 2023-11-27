import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/authService'
import { login, logout } from './store/reducers/authSlice'
import { Footer, Header } from './components'

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
    loading?(<>
    Hiii
    </>):(
      <>
      <Header/>
      <Footer/>
      </>
    )
  )
}

export default App
