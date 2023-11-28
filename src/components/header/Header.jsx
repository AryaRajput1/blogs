import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ToggleButton from '../ToggleButton'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { SignOutButton } from '@clerk/clerk-react'

function Header() {
  const authStatus = useSelector((state) => state.auth?.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]
  const [isMenuOpen,setIsMenuOpen] = useState(false);

  const onToggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }


  return (
    <header className='relative bg-white dark:bg-gray-900 py-2 dark:text-white'>
      <nav className=' flex justify-between items-center w-[92%] mx-auto'>
        <div>
          <Logo className='font-bold text-xl'/>
        </div>
        <div className={`z-10 shadow-md font-semibold md:static absolute md:min-h-fit md:rounded-xl md:px-10 dark:bg-gray-800 min-h-[40vh] left-0 ${isMenuOpen? 'top-[100%]': '-top-[10000%]'} md:w-auto w-full flex items-center px-5`} >
          <ul className='md:flex-row flex-col flex md:items-center md:gap-[4vw] gap-8 dark:text-white'>
            {
              navItems.map(item=>item.active ? (
                <li key={item.name}>
                  <button
                  onClick={() => navigate(item.slug)}
                  className='hover:text-gray-500 dark:hover:text-gray-300 dark:text-white'
                  >{item.name}</button>
                </li>
              ) : null)
            }
          </ul>
        </div>
        <div className='flex items-center gap-6'>
          <ToggleButton/>
          {authStatus && <SignOutButton  className='bg-[#5191fe] text-white px-5 py-2 rounded-full hover:bg-[#87acec]' />}
          {!isMenuOpen?(<Menu onClick={onToggleMenu} className='text-3xl cursor-pointer md:hidden' />):
          (<X onClick={onToggleMenu} className='text-3xl cursor-pointer md:hidden'/>)}
        </div>

      </nav>
    </header>

  )
}

export default Header