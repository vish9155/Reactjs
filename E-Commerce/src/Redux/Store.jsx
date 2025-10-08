import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './Slice'

import productReducer from './ProductSlice'

let store=configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer
    }
})

export default store