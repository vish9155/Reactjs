
import { useState } from "react"

export default function AddUser() {
    let [name, setname] = useState('')
    let [email, setemail] = useState('')
    let [age, setage] = useState('')

    async function addnewuser() {
        console.log(name, email, age)
        let url = "http://localhost:3000/user"
        let response = await fetch(url, {
            method: "post", body:JSON.stringify({name, email, age})
        })
        response = await response.json();
        if (response) {
            alert("New User is successFully Added")
        }
    }

    return (
        <>
            <h1>Add New User</h1>

            <input type="text" onChange={(event) => setname(event.target.value)} />
            <br /><br />
            <input type="text" onChange={(event) => setemail(event.target.value)} />
            <br /><br />
            <input type="text" onChange={(event) => setage(event.target.value)} />
            <br /><br />
            <button onClick={addnewuser}>AddUser</button>
        </>
    )
}