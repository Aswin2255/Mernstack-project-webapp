import { createSlice } from '@reduxjs/toolkit'
const initialState = {
   user:{},
   post:{}
}
const userslice = createSlice({
    name:'users',
    initialState,
    reducers:{
        userpresent :(state,action)=>{
            console.log(action)
            state.user = action.payload
        }
    }
})
export const {userpresent} = userslice.actions
export const getuser = (state) => state.user
export default userslice.reducer