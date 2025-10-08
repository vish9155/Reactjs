import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function Edit() {
    let [name, setname] = useState()
    let [age, setage] = useState()
    let [course, setcourse] = useState()

    let {id}=useParams()
    let nav=useNavigate()

    useEffect(()=>{
        editusers()
    },[])

    let url = "http://localhost:3000/users/"+id;
    console.log(id)
    async function editusers() {
        let response = await fetch(url)
        response = await response.json()
        setname(response.name)
        setage(response.age)
        setcourse(response.course)
        
    }
   
    async function update()
    {
        let response=await fetch(url,{
            method:'put' , body:JSON.stringify({name,age,course})
        })
        response=await response.json()
        if(response)
        {
            alert("User update Successfully.....")
            nav("/")
        }
    }
    return (
        <>
            <input type="text" value={name} placeholder="Name:" onChange={(event) => { setname(event.target.value) }} />
            <br /><br />
            <input type="text" value={age} placeholder="Age:" onChange={(event) => { setage(event.target.value) }} />
            <br /><br />
            <input type="text" value={course} placeholder="Course:" onChange={(event) => { setcourse(event.target.value) }} />
            <br /><br />
            <button onClick={update}>Update</button>

        </>
    )
}