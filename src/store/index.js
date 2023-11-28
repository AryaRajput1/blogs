import {configureStore} from '@reduxjs/toolkit'
import AuthReducers from './reducers/authSlice'

const store = configureStore({
    reducer:{
       auth:AuthReducers
    }
})

export default store