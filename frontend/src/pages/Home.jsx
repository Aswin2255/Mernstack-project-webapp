import React from 'react'
import Createpost from '../components/Createpost'
import Layout from '../components/Layout'
import Post from '../components/Post'

function Home() {
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
