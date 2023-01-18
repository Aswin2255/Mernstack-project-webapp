import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import { useCookies } from 'react-cookie'
import instance from '../Axios'

export const fetchasynuserpost = createAsyncThunk('getuserpost',async()=>{
    const response = await instance.post('/getpost',{},{withCredentials:true}).catch((er)=>{
        console.log(er)
    })
    return response.data
})
export const fetchuser = createAsyncThunk('getuser',async()=>{
    const response = await instance.post('/getuser',{},{withCredentials:true}).catch((er)=>{
        console.log(er)
    })
    return response.data
})
export const createpost = createAsyncThunk('createpost',async(post)=>{
    const response = await instance.post('/createpost',{post:post},{withCredentials:true}).catch((er)=>{
        console.log(er)
    })
    return response.data
})
export const delpost = createAsyncThunk('deletepost',async(id)=>{
    const response = await instance.post('/deletepost',{_id:id},{withCredentials:true}).catch((er)=>{
        console.log(er)
    })
    return response.data
})
export const edituserpost = createAsyncThunk('/editpost',async(post)=>{

    const response = await instance.post('/editpost',{post},{withCredentials:true}).catch((er)=>{
        console.log(er)
    })
    return response.data
})

const initialState = {
   user:{},
   post:[]
}
const userslice = createSlice({
    name:'users',
    initialState,
    reducers:{
        userpresent :(state,action)=>{
            console.log(action)
            state.user = action.payload.payload
        },
       
    },
    extraReducers:{
       [fetchasynuserpost.fulfilled]:(state,{payload})=>{
        console.log('helowwww')
        
        if(payload.status){
            return {...state,post:payload.post}
        }
        else{
            return {...state,post:[]}
        }
       },
       [fetchasynuserpost.pending]:(state,{payload})=>{
            console.log('pending')
       },
       [fetchuser.fulfilled]:(state,{payload})=>{
        if(payload.status){
            return {...state,user:payload.user}
        }
        else{
              return{...state,user:null}
        }
       },
       [createpost.fulfilled]:(state,{payload})=>{
        console.log('redux state....')
       
        if(payload.status){
           return {...state}
        }
        else{
            return{...state,user:null}

        }
       },
       [delpost.fulfilled]:(state,{payload})=>{
        if(payload.status){
           
            return {...state}
        }
        else{
            return {...state,user:null}
        }
       },
       [edituserpost.fulfilled]:(state,{payload})=>{
        if(payload.status){
            return{...state}
        }
        else{
            return {...state,user:null}
        }

       }
      
    }
})
export const {userpresent} = userslice.actions
export const getpost = (state) => state.user.post
export const getuser = (state) => state.user.user
export default userslice.reducer