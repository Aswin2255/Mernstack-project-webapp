import React from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
  const [cookie,setcookie,removeCookie] = useCookies([])
  const Navigate = useNavigate()
  const logout = ()=>{
    removeCookie("jwt")
    Navigate('/login')
  }
  return (
    <div className='px-4 py-2'>
         <p  onClick={logout} className='flex gap-2 py-3  hover:bg-blue-400 hover:bg-opacity-20  rounded-md  transition-all hover:scale-110 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                    Logout</p>
      
    </div>
  )
}

export default Sidebar
