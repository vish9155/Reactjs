import { createSlice } from "@reduxjs/toolkit"

let initialState = {

    //.items: []

      items: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
}



let AddtoCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        additem: (state, action) => {
            console.log(action.payload)
            state.items.push(action.payload)
            localStorage.setItem("cart", JSON.stringify(state.items))
        },
        removeitem: (state, action) => {
            let cartdata = state.items.filter(item => item.id !== action.payload.id)
            state.items = cartdata
            localStorage.setItem("cart", JSON.stringify(cartdata))
        },
        clearall: (state) => {
            state.items = [];
        },
        increaseQunatity: (state, action) => {
            let increment = state.items.find(item => item.id === action.payload)

            if (increment) {
                increment.quantity = increment.quantity ? increment.quantity + 1 : 1
                localStorage.setItem("cart", JSON.stringify(state.items))
            }

        },
        decreaseQunatity: (state, action) => {
            let decrement = state.items.find(item => item.id === action.payload)

            if (decrement && decrement.quantity > 1) {
                decrement.quantity -= 1
                localStorage.setItem("cart", JSON.stringify(state.items))
            }

        }
    }
})

export let { additem, removeitem, clearall, increaseQunatity, decreaseQunatity } = AddtoCart.actions

export default AddtoCart.reducer