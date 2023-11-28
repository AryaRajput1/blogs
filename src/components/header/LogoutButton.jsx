import {useDispatch} from 'react-redux'
import authService from '../../appwrite/authService'
import {logout} from '../../store/reducers/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button onClick={logoutHandler} className='bg-[#5191fe] text-white px-5 py-2 rounded-full hover:bg-[#87acec]'>Logout</button>
  )
}

export default LogoutBtn