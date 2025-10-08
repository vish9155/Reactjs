import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";

export default function Userlist()
{

    let navigate=useNavigate()
    let [users,setuser]=useState([])

    useEffect(()=>{
        getdata()
    },[])

    let url="http://localhost:3000/user"

    async function getdata()
    {
        let response=await fetch(url)
        console.log(response);
        response=await response.json()
        console.log(response)
        setuser(response)
    }

    async function delterdata(id)
    {
        console.log(id)
          let response=await fetch(url+"/"+id,{
            method:"delete"
          })
        response=await response.json()
 
        if(response)
        {
            alert("user are deleted")
            getdata()
        }
    }

    function edit(id)
    {
        navigate("edit/"+id)
    }

    return(
        <>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
                <NavLink to={"/"}>Userlist</NavLink>
                <NavLink to={"/adduser"}>AddUser</NavLink>
               </div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-around", border:"1px solid black"}}>
            <h1>Name</h1>
            <h1>Age</h1>
            <h1>Course</h1>
            <h1>Action</h1>
            </div>
            <ul  >
                {
                    users.map((item,index)=>{
                        return(
                            <div style={{display:"flex", alignItems:"center", justifyContent:"space-around", border:"1px solid black"}} key={index}>
                                <li>{item.name}</li>
                                <li>{item.age}</li>
                                <li>{item.course}</li>
                                <button onClick={()=>{
                                    delterdata(item.id)
                                }}>Delete</button>
                                <button onClick={()=>{
                                 edit(item.id)
                                }}><NavLink to={"edit/"+item.id}>Edit</NavLink></button>
                            </div>
                        )
                    })
                }
            </ul>
 
        </>
    )
}