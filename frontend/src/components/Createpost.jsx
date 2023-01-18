import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createpost, fetchasynuserpost, getuser } from '../Redux/Userslices'
import Cards from './Cards'

function Createpost() {
    const [post, setpost] = useState('')
    const [up, setup] = useState(false)

    const dispatch = useDispatch()
    const user = useSelector(getuser)

    useEffect(() => {
        console.log('workingggggg')
        dispatch(fetchasynuserpost())
    }, [up])

    const submit = async () => {
        if (post) {
            dispatch(createpost(post)).then((data) => {
                setpost('')
                setup(!up)
            })





        }
        else {
            alert('cannote be empty')
        }
    }

    return (
        <Cards>
            <div className='flex gap-3 items-center'>
                <div>


                </div>

                <textarea onChange={(e) => { setpost(e.target.value) }} value={post} name='post' className='grow p-3 h-14' placeholder={`whats on your mind..${user}`} />
            </div>
            <div className='flex gap-5 items-center mt-2'>


                <div className='grow text-right'>
                    <button onClick={submit} className='bg-socialblue text-white  md:px-6 py-1 rounded-md'>Share</button>
                </div>



            </div>

        </Cards>


    )
}

export default Createpost
