import React, { useReducer, useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import instance from '../Axios'
import { delpost, edituserpost, fetchasynuserpost, getpost, getuser } from '../Redux/Userslices'
import Cards from './Cards'
import Createpost from './Createpost'
const initialstate = {}

function Post() {
    
    
    const userpost = useSelector(getpost)
    const user = useSelector(getuser)
    const [up,setup] = useState(false)
    const [refresh,setrefresh] = useState(false)
    const[modal,setmodal] = useState(false)
    const [editdata,setedit] = useState('')
    const[editid,setid] = useState('')
    
  
    
  console.log(userpost)
 
  
  
  userpost.forEach((e,index)=>{
   return initialstate[index+''] = false
  })
  const formreducer = (state,action)=>{
    console.log(action.field)
    console.log(action.value)
    switch(action.type){
      case 'changedropdown':
      return{
        ...state,
        [action.field] : !action.value
      };
      default:
        return state
    }
  }
  const handlechange = (index,state)=>{
    console.log('-------------------')
     let val = String(index)
     let value = state[val]
    
    dis({
        type:'changedropdown',
        field:val,
        value:value
        
        
    })
    
   
   }

  
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(fetchasynuserpost())

       
    },[up])
 
    const [formstate,dis] = useReducer(formreducer,initialstate)
    const delepost = (data,index)=>{
        console.log('jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj')
        
        console.log(data)
        dispatch(delpost(data._id)).then((data)=>{
            let val = String(index)
            let value = formstate[val]
            
            dis({
                type:'changedropdown',
                field:val,
                value:value    
            })
            setup(!up)

        })
    
    }
    const editpost = (data,index)=>{
        setmodal(true)
        console.log(data)
        index = String(index)
        console.log(data.post)
        setedit(data.post)
        setid(data._id)

    }
    const submitedit = ()=>{
      if(editdata){
      const postdate = {
        post:editdata,
        postid:editid
      }
      dispatch(edituserpost(postdate)).then((data)=>{
        setup(!up)
        setmodal(!modal)
        

      })
    }
    else{
      alert('enter all fields')
    }
    }
   
    
    
  return (
    
    <div>
      
   {
    userpost.map((data,index)=>{
        return(
            
           
        <Cards key={data._id}>
        <div className='grow flex justify-between'>
           
                            <p className='font-semibold cursor-pointer hover:underline'>{user}</p>
                           
                            <div>
                        <button className='text-gray-400  ' onClick={()=>handlechange(index,formstate)}>
                               <p className='font-semibold cursor-pointer hover:underline  text-blue-700'>Manage post</p>
                            </button>
                            <div className='relative'>
                                {
                                    formstate[index] && (
                                        <div className='absolute -right-6 bg-white shadow-gray-300 p-3 rounded-sm border border-gray-300 w-52'>
                                          
                                           
                                          <p onClick={()=>{editpost(data,index)}}  className='flex py-2 px-2 gap-2  hover:bg-blue-400 hover:bg-opacity-20  rounded-md  transition-all hover:scale-110'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                                </svg>
                                                Edit post</p>
                                                {
                                                    modal && (
                                                        <>
                                                        <div
                                                          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                                        >
                                                          <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                            {/*content*/}
                                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                              {/*header*/}
                                                              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                                <h3 className="text-3xl font-semibold">
                                                                  Edit post
                                                                </h3>
                                                                <button
                                                                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                                  onClick={() => setmodal(false)}
                                                                >
                                                                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                                    ×
                                                                  </span>
                                                                </button>
                                                              </div>
                                                              {/*body*/}
                                                              <div className="relative p-6 flex-auto">
                                                              <textarea  name='post' onChange={(e)=>{setedit(e.target.value)}} value={editdata} className='grow p-3 h-14' placeholder={`whats on your mind..`} />
                                                               
                                                              </div>
                                                              {/*footer*/}
                                                              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                              <button onClick={submitedit} className='bg-socialblue text-white  md:px-6 py-1 rounded-md m-2'>Share</button>
                                                              <button onClick={()=>{setmodal(!modal)}}  className='bg-red-800 text-white  md:px-6 py-1 rounded-md'>Cancel</button>
                                                                
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                                      </>
                                                    )
                                                }
                                                
                                               
                                             
                                                    
                                                
                                            <p  onClick={()=>{delepost(data,index)}} className='flex py-2 px-2 gap-2  hover:bg-blue-400 hover:bg-opacity-20  rounded-md  transition-all hover:scale-110'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
    
                                                Delete</p>
                                           
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        </div>
                    
    
           
            <div>
                <p>{data.post}</p>
             
              
            
            </div>
         
           
        
        </Cards>
        
        )
    })
   }
    
    </div>
  )
}

export default Post
