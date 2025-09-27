
import { useReducer, useTransition } from "react"

let emptydata = {
    name: "",
    password: "",
    email: "",
    city: "",
}

 function getdata(data, action) {
     
    return { ...data, [action.type]: action.val }
}

export default function HandleReducer() {
    let [state, dispatch] = useReducer(getdata, emptydata)
  
  console.log(state)
    console.log(state)
    return (
        <>
            <input type="text" onChange={(event) => { dispatch({ val: event.target.value, type: 'name' }) }} />
            <br /><br />
            <input type="text" onChange={(event) => { dispatch({ val: event.target.value, type: 'email' }) }} />
            <br /><br />
            <input type="text" onChange={(event) => { dispatch({ val: event.target.value, type: 'password' }) }} />
            <br /><br />
            <input type="text" onChange={(event) => { dispatch({ val: event.target.value, type: 'city' }) }} />
            <br />
            <br />
            <button >submit</button>
            <h3>Name:{state.name}</h3>
            <h3>Email:{state.email}</h3>
            <h3>Password:{state.password}</h3>
            <h3>City:{state.city}</h3>
        </>
    )
}