import {createSlice}from '@reduxjs/toolkit'
let initialState={
    value:0
}

let Counter=createSlice({
    name:'counter',
    initialState,
    reducers:{
        incremnet:(state,action)=>{
            state.value+=1
        },
        decrement:(state,action)=>{
        state.value-=1
        }
    }
})

export let {incremnet,decrement}=Counter.actions

export default Counter.reducer