import { configureStore } from '@reduxjs/toolkit'
import Userslices from './Userslices'

export const store = configureStore({
    reducer:{
        user:Userslices
    }
})