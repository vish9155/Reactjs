import { useState } from "react"
import { useNavigate } from "react-router";

export default function AddUser()
{
    let [name,setname]=useState()
    let [age,setage]=useState()
    let [course,setcourse]=useState()
    let navi=useNavigate()

    let url="http://localhost:3000/users";
    async function add()
    {
        let response=await fetch(url,{
            method:'post' , body:JSON.stringify({name,age,course})
        })
        response=await response.json()
        if(response)
        {
            alert("User Added Successfully.....")
            navi("/")
        }
    }


    return(
        <>
 <input type="text" placeholder="Name:" onChange={(event)=>{setname(event.target.value)}} />
 <br /><br />
 <input type="text" placeholder="Agee:" onChange={(event)=>{setage(event.target.value)}} />
 <br /><br />
 <input type="text" placeholder="Course:" onChange={(event)=>{setcourse(event.target.value)}} />
 <br /><br />
 <button onClick={add}>Adduser</button>

        
        </>
    )
}