import React, { useReducer } from 'react'
import Cards from '../components/Cards'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import instance from '../Axios'
import { useDispatch, useSelector } from 'react-redux'
import { getuser, userpresent } from '../Redux/Userslices'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'

function Login() {
    
    const Navigate = useNavigate()
    const disp = useDispatch()
    const generateerror = (err)=>{
      toast.error(err,{
        position:"top-center"
      })
    }
   
    const initialformstate = {
        email:'',
        password:'',
      }
      const formreducer = (state,action)=>{
        switch(action.type){
          case 'handleinput':
          return{
            ...state,
            [action.field] : action.payload
          };
          default:
            return state
        }
      }
      const handlechange = (e)=>{
        dispatch({
          type:'handleinput',
          field:e.target.name,
          payload:e.target.value
        })
       }
       const submit = async (e)=>{
        //e.preventDefault()
       if(formstate.email&&formstate.pass){
      
        const {data} = await instance.post('/login',formstate,{withCredentials:true})
       console.log(data)
       if(!data.login){
        generateerror(data.error)
       }
       else{
        disp(userpresent({
            type:'users',
            payload:data.user.username
            

          }))
          Navigate('/')
       
       }
      
       }
       else{
        alert('enter all fields')
       }
    }
    
  
    const [formstate,dispatch] = useReducer(formreducer,initialformstate)
    const user = useSelector(getuser)
    useEffect(()=>{
        if(user){
         Navigate('/')
        }
    })
      
  return (
    <div className='h-screen flex items-center'>
    <div className='max-w-md mx-auto grow '>
    <h1 className='text-6xl mb-4  text-gray-400  text-center justify-center m-4'>Login</h1>
        <Cards>
            <div>
            <input  className="block w-full p-2.5  mb-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder='Enter the email' value={formstate.email} name = 'email' onChange={(e)=>handlechange(e)}   type='text'></input>
           
            </div>
            <div>
            <input className="block w-full p-2.5 mb-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder='Enter the password' value={formstate.pass} name = 'pass' onChange={(e)=>handlechange(e)}   type='password'></input>
           
            </div>
            <div>
            <button className='bg-socialblue text-white px-6 py-1 rounded-md m-3' onClick={submit}>Login</button>
            </div>
            
            <div className='grow text-right'>
                    <Link to={'/signup'} className = 'font-semibold underline'>Create an account</Link>
                </div>
            
        </Cards>
        <ToastContainer/>
    </div>
  
</div>
  )
}

export default Login
