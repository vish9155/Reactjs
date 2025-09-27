// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";


import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router";

// export default function Userlist() {
//     let [data, setdata] = useState([]);
//     let url="http://localhost:3000/users"
//     let navigate=useNavigate()
//     let navigate2=useNavigate()
//     useEffect(() => {
//         getdata()
//     }, [])
//     async function getdata() {
//         let response = await fetch(url)
//         response = await response.json();
//         console.log(response)
//         setdata(response)
//     }
//     async function deletedata(id) {
//         console.log(id)
//         let response=await fetch(url+"/"+id,{
//             method:"delete"
//         })
//         response=await response.json();
//         console.log(response)
//         if(response)
//             {
//            alert("Data is Deleted SuccessFully");
//            getdata()
//            navigate2("/")
//             }        
//     }
//     function edit(id)
//     {
//         navigate("/editda/"+id)
//     }
//     return (
//         <>
//             <div>
//                 <ul style={{display:"flex", justifyContent:"space-around", alignItems:"center", border:"1px solid black"}}>
//                     <li>Name</li>
//                     <li>Age</li>
//                     <li>Email</li>
//                     <li>Action</li>
//                 </ul>
//                 <h1>{data.map((item, i) => {
//                     return (
//                         <div key={i}  style={{display:"flex", justifyContent:"space-around",alignItems:"center", border:"1px solid black"}}>
//                             <h5>{item.name}</h5>
//                             <h5>{item.age}</h5>
//                             <h5>{item.email}</h5>
//                             <button onClick={()=>{
//                                 deletedata(item.id)
//                             }}>Delete</button>
//                             <button onClick={()=>{
//                                 edit(item.id)
//                             }}>Edit</button>
//                         </div>
//                     )
//                 })}</h1>
//             </div>
//         </>
//     )
// }

export default function UserList() {
    let [data, setdata] = useState([]);
    useEffect(() => {
        getdata()
    },[])
    let navigate2=useNavigate()
    let url = "http://localhost:3000/users"
    async function getdata() {
        let response = await fetch(url)
        response = await response.json();
        setdata(response)
    }
    async function deletedata(id) {
        console.log(id)
        let response = await fetch(url + "/" + id, {
            method: "delete"
        })
        console.log(response);
        response = await response.json()
        if (response) {
            alert("Item is Deleted Sucessfuly")
            getdata()
        }

    }

    function edit(id)
    {
        console.log(id)
     navigate2("/edit/"+id)
    }

    return (
        <>
          <div style={{display:"flex",alignItems:"center", justifyContent:"space-around"}}>
             <NavLink to={"/"}>Userlist</NavLink>
                <NavLink to={"/adduser"}>AddNewUser</NavLink>
          </div>
          
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", border: "1px solid black", marginTop:"20px" }}>
               
                <h4>Name</h4>
                <h4>Age</h4>
                <h4>Course</h4>
                <h4>Action</h4>
            </div>

            <div>
                {

                    data.map((item, index) => {
                        return (
                            <ul style={{ display: "flex", alignItems: "center", justifyContent: "space-around", border: "1px solid black", listStyle: "none" }} key={index}>
                                <li>{item.name}</li>
                                <li>{item.age}</li>
                                <li>{item.course}</li>
                                <button onClick={() => { deletedata(item.id) }}>Delete</button>
                                <button onClick={()=>{edit(item.id)}}>Edit</button>
                            </ul>
                        )
                    })
                }
            </div>

        </>
    )
}