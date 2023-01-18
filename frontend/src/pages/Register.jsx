import React, { useReducer } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import Cards from '../components/Cards'
import {  useNavigate } from 'react-router-dom'
import instance from '../Axios'
import { useCookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { adduser, getuser, userpresent } from '../Redux/Userslices'
import { useEffect } from 'react'


function Register() {
    const disp = useDispatch()
    const initialformstate = {
        username:'',
        email:'',
        pass:'',
        
      }
      const generateerror = (err)=>{
        toast.error(err,{
          position:"top-center"
        })
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
      const Navigate = useNavigate()
      
      
      const [formstate,dispatch] = useReducer(formreducer,initialformstate)
      console.log(formstate)
      const submit = async (e)=>{
        //e.preventDefault()
      
       if(formstate.username&&formstate.email&&formstate.pass){
       const {data} = await instance.post('/signup',formstate,{withCredentials:true})
       console.log(data)
       if(data){
        if(data.error){
           generateerror(data.error)
        }
        else{
          console.log(data)
          disp(userpresent({
            type:'users',
            payload:data.username
            

          }))
          Navigate('/')
        }
       }
      }
      else{
        alert('enter all fields')
      }
       
       
        
      }
      const handlechange = (e)=>{
        dispatch({
          type:'handleinput',
          field:e.target.name,
          payload:e.target.value
        })
       }
       const user = useSelector(getuser)
       useEffect(()=>{
           if(user){
            Navigate('/')
           }
       })
  return (
    <div className='h-screen flex items-center'>
    <div className='max-w-md mx-auto grow '>
      
   
        <Cards>
        <h1 className='text-5xl mb-4  text-gray-400  text-center justify-center '>Signup</h1>
        <div>
            <input  className="block w-full p-2.5 mb-2  text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder='Enter the Name' value={formstate.username} name = 'username' onChange={(e)=>handlechange(e)}  type='text'></input>    
           
                
            </div>
            <div>
              
            <input  className="block w-full p-2.5  mb-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder='Enter the email' value={formstate.email} name = 'email' onChange={(e)=>handlechange(e)}   type='text'></input>
          
            </div>
            <div>
            <input className="block w-full p-2.5 mb-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder='Enter the password' value={formstate.pass} name = 'pass' onChange={(e)=>handlechange(e)}   type='password'></input>
           
            </div>
           
            <div className='flex gap-4 items-center justify-center m-4'>
            <button className='bg-socialblue text-white px-6 py-1 rounded-md' onClick={submit}>Signup</button>
            </div>
           
            
        </Cards>
        <ToastContainer/>
    </div>
  
</div>
  )
}

export default Register
