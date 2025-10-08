import { useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router";

export default function GetApi() {
    let [data, setdata] = useState([])
    let navigate=useNavigate()

    useEffect(() => {
        getdata()
    }, [])
let url = "http://localhost:3000/users";
    async function getdata() {
        
        let response = await fetch(url);
        response = await response.json();
        console.log(response)
        setdata(response)

    }
async function  deleteuser(id) {
    console.log(id)
       let response = await fetch(url+"/"+id,{
        method:"delete"
       });
        response = await response.json();
        console.log(response)
   if(response)
   {
    alert("user are deleted")
    getdata()
   }
        
}

function edituser(id)
{
    navigate("/edit/"+id)
}

    return (
        <>
           <div style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
           <NavLink to={"/"}>UserList</NavLink>
           <NavLink to={"/userdetails"}>AddUser</NavLink>
           </div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-around", border:"1px solid black"}}>
                <h3>Name:</h3>
                <h3>Age:</h3>
                <h3>Course:</h3>
                <h3>Action</h3>
                </div>
                <div>
                { 
                    data.map((value, index) => {
                        return (
                            <ul key={index}  style={{display:"flex", alignItems:"center", justifyContent:"space-around", border:"1px solid black", listStyle:"none"}} >
                                <li >{value.name}</li>
                                <li>{value.age}</li>
                                <li>{value.course}</li>
                                <button onClick={()=>{deleteuser(value.id)}}>Delete</button>
                                <button onClick={()=>{edituser(value.id)}}> edit</button>
                            </ul>
                        )
                    })
                }
                </div>
        
        </>
    )
}