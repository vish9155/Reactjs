

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

export default function UserEdit() {
    let [name, setname] = useState('')
    let [email, setemail] = useState('')
    let [age, setage] = useState('')



    let { id } = useParams()

    let navigate = useNavigate()

 

    useEffect(() => {
        getuserdata()

    }, [])
    let url = "http://localhost:3000/user/" + id
    let getuserdata = async () => {
        console.log(id)
        console.log(url)
        let response = await fetch(url)
        response = await response.json();
        console.log(response)
        console.log(response.name, response.email, response.age)
        setname(response.name)
        setemail(response.email)
        setage(response.age)


    }

    let updatedata = async () => {
        console.log(name, email, age)
        let response = await fetch(url, {
            method: "put", body: JSON.stringify(({ name, email, age }))
        });
        response = await response.json()
        if (response) {
            alert("data is update successfully")
            navigate("/")
        }
    }
    return (
        <>
            <h1>Edit the User</h1>
            <input type="text" onChange={(event) => { setname(event.target.value) }} value={name} />
            <br />
            <br />
            <input type="text" onChange={(event) => { setemail(event.target.value) }} value={email} />
            <br />
            <br />
            <input type="text" onChange={(event) => { setage(event.target.value) }} value={age} />
            <br />
            <br />
            <button onClick={updatedata} >Update</button>
        </>
    )
}