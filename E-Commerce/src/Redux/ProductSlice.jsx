import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export let fetchdata=createAsyncThunk('product',async()=>{
    let resp=await fetch("https://dummyjson.com/products");
    let respjson=await resp.json();
    console.log(respjson)
    console.log(respjson.products)
    return respjson.products
})

let initialState={
    items:[],
    status:undefined,
    error:null
}

let ProductSlice=createSlice({
    name:'productslice',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchdata.fulfilled,(state,action)=>{
            state.status="successed",
            state.items=action.payload
        })
    }
})

export default ProductSlice.reducer