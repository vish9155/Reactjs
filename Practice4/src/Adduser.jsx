import { useState } from "react"
import { useNavigate } from "react-router";

export default function AddUser() {
    let [name, setname] = useState('')
    let [age, setage] = useState('')
    let [course, setcourse] = useState('')
    let url = "http://localhost:3000/user"
    let navi = useNavigate()
    async function addusersdata() {

        console.log(name, age, course)

        let response = await fetch(url, {
            method: "post", body: JSON.stringify({ name, age, course })
        })
        response = await response.json();
        console.log(response)
        if (response) {
            alert("Data is Added Sucess")
            navi("/")
        }
    }
    return (
        <>

            <input type="text" onChange={(e)=>{setname(e.target.value)}} placeholder="Name:" /><br /><br />
            <input type="text" onChange={(e)=>{setage(e.target.value)}} placeholder="Age" /><br /><br />
            <input type="text" onChange={(e)=>{setcourse(e.target.value)}} placeholder="Course" /><br /><br />
            <button onClick={addusersdata}>Adduser</button>
        </>
    )
}