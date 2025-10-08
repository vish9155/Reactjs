import { useReducer } from "react"

let emptydata = {
    name: '',
    age: '',
    city: "",
    state: '',
    pincode: "",
    phone: ""
}

function getdata(statedata, action) {

    return {...statedata,[action.type]:action.val}

}

export default function ReducerDATA() {

    let [state, dispatch] = useReducer( getdata,emptydata)

    return (
        <>

            <input type="text" onChange={(event) => { dispatch({ val: event.target.value, type: "name" }) }} placeholder="Name..........." />
            <br /><br />
            <input type="text" onChange={(event) => { dispatch({ val: event.target.value, type: "age" }) }} placeholder="Age........"/>
            <br /><br />
            <input type="text" onChange={(event) => { dispatch({ val: event.target.value, type: "city" }) }} placeholder="City........." />
            <br /><br />
            <input type="text" onChange={(event) => { dispatch({ val: event.target.value, type: "state" }) }} 
            placeholder="State........" />
            <br /><br />
            <input type="text" onChange={(event) => { dispatch({ val: event.target.value, type: "pincode" }) }} 
            placeholder="Pincode......." />
            <br /><br />
            <input type="text" onChange={(event) => { dispatch({ val: event.target.value, type: "phone" }) }} placeholder="Phone........... "/>
            <br /><br />
            <button>submit</button>

            <div>
               Name: {state.name}
            </div>
            <div>
               Age: {state.age}
            </div>
            <div>
               City: {state.city}
            </div>
            <div>
               State: {state.state}
            </div>
            <div>
               Pincode: {state.pincode}
            </div>
            <div>
               Phone: {state.phone}
            </div>
        </>
    )
}