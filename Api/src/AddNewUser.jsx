// import { useState } from "react"
// import { useNavigate } from "react-router"

import { useState } from "react"
import { useNavigate } from "react-router"

// export default function AddNewUser() {
//     let [name, setname] = useState()
//     let [age,setage]=useState()
//     let [email,setemail]=useState()

//   let navigate=useNavigate()
//     async function addUser() {
//           console.log(name, email, age)
//           let url = "http://localhost:3000/users"
//         let response = await fetch(url, {
//             method: "post", body: JSON.stringify({ name, email, age })
//         });
//         console.log(name, email, age)
//         response = await response.json();
//         if (response) {
//             alert("Data added successful")
//             navigate("/")
//         }
//     }

//     return (
//         <>

//             <input type="text" onChange={(event) => { setname(event.target.value) }} />
//             <br /><br />
//             <input type="text" onChange={(event) => { setemail(event.target.value) }} />
//             <br /><br />
//             <input type="text" onChange={(event) => { setage(event.target.value) }} />
//             <br />
//             <br />
//             <button onClick={addUser}>AddUser</button>

//         </>
//     )
// }

export default function AddNewUser() {

    let [name, setname] = useState()
    let [age, setage] = useState()
    let [course, setcourse] = useState()
    let url="http://localhost:3000/users"
    let navigate=useNavigate()
    async function adduser()
    {
        console.log(name,age,course)
    let response=await fetch(url,{
        method:"post" , body:JSON.stringify({name,age,course})
    });
    console.log(response)
    response=await response.json();
    console.log(response)
    if(response)
    {
        alert("Data is Sucessfully Added")
        navigate("/")
    }
    }



    return (
        <>
            Name:<input type="text" onChange={(event)=>{
                setname(event.target.value)
            }} placeholder="Enter Name ........." />
            <br /><br />
            Age:<input type="text" onChange={(event)=>{
                setage(event.target.value)
            }} placeholder="Enter Age......." />
            <br /><br />
            Course:<input type="text" onChange={(event)=>{
                setcourse(event.target.value)
            }} placeholder="Enter Course....." />
            <br />
            <br />
            <button onClick={adduser}>AddUser</button>
        </>
    )
}