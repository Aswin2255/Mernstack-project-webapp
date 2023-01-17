import React, { useState } from 'react'
import Cards from './Cards'

function Post() {
    const [dropdown,setdropdown] = useState(false)
  return (
    <div>
    <Cards>
    <div className='grow flex justify-between'>
                        <p className='font-semibold cursor-pointer hover:underline'>User</p>
                       
                        <div>
                    <button className='text-gray-400  ' onClick={() => setdropdown(!dropdown)}>
                           <p className='font-semibold cursor-pointer hover:underline  text-blue-700'>Manage post</p>
                        </button>
                        <div className='relative'>
                            {
                                dropdown && (
                                    <div className='absolute -right-6 bg-white shadow-gray-300 p-3 rounded-sm border border-gray-300 w-52'>
                                      
                                       
                                      <a href='/report' className='flex py-2 px-2 gap-2  hover:bg-blue-400 hover:bg-opacity-20  rounded-md  transition-all hover:scale-110'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                            </svg>
                                            Edit post</a>
                                        <a href='/del' className='flex py-2 px-2 gap-2  hover:bg-blue-400 hover:bg-opacity-20  rounded-md  transition-all hover:scale-110'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>

                                            Delete</a>
                                       
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    </div>
                

       
        <div>
            <p className='my-3 text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illum eos dolorem fuga debitis quaerat ab? Ad vitae quae incidunt aperiam aliquid commodi officiis, iure non officia aliquam architecto! Quam.</p>
          
        </div>
     
       
    
    </Cards>
    
    </div>
  )
}

export default Post
