import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import instance from '../Axios'
import Createpost from '../components/Createpost'
import Layout from '../components/Layout'
import Post from '../components/Post'
import { fetchuser, getuser } from '../Redux/Userslices'

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchuser())
    
  },[])
  
  return (
    <div>
       <Layout>
      
      <Createpost />
         <Post/>
     </Layout>
    </div>
  )
}

export default Home
