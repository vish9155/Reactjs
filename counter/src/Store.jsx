import {configureStore} from '@reduxjs/toolkit'
import countReducer from "./slice"
 let store=configureStore({
    reducer:{
        count:countReducer
    }
})

export default store