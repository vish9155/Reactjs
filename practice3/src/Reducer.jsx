import { useReducer } from "react"

let emptydata = {
    name: '',
    password: "",
    city: "",
    phone: "",
    email: "",

}

function getdata(data, action) {
    return { ...data, [action.type]: action.val }
}


export default function HanReducer() {

    let [state, dispatch] = useReducer(getdata, emptydata)

    return (
        <>
            <input type="text" onChange={(event) => { dispatch({ val: event.target.value, type: "name" }) }} />
            <br />
            <br />
            <input type="text" onChange={(event) => { dispatch({ val: event.target.value, type: "password" }) }} />
            <br />
            <br />
            <input type="text" onChange={(event) => { dispatch({ val: event.target.value, type: "email" }) }} />
           

            <br />
            <br />
            <input type="text" onChange={(event) => { dispatch({ val: event.target.value, type: "city" }) }} />
            <br />
            <br />
            <input type="text" onChange={(event) => { dispatch({ val: event.target.value, type: "phone" }) }} />
            <br />
            <br />
            <button>click</button>
            <ul>
                <li>Name:{state.name}</li>
                <li>Email:{state.email}</li>
                <li>Password:{state.password}</li>
                <li>Phone:{state.phone}</li>
                <li>City:{state.city}</li>

            </ul>
        </>
    )
}