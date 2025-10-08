// import { useEffect, useState } from "react"
// import { useNavigate, useParams } from "react-router";

import { useEffect, useState } from "react"

// export default function EditUder() {
//      let { id } = useParams()
// let navigate=useNavigate()
//     let [name, setname] = useState('')
//     let [age, setage] = useState('')
//     let [course, setcourse] = useState('')
//     let url = "http://localhost:3000/user/"+id

   
//     useEffect(() => {
//         editusers()
//     }, [])

//     //let navi = useNavigate()
//     async function editusers() {

//         console.log(name, age, course)

//         let response = await fetch(url)
//         response = await response.json();
//         setname(response.name)
//         setage(response.age)
//         setcourse(response.course)
//     }

//     async function  updated() {
//    let response = await fetch(url,{
//     method:"put",body:JSON.stringify({name,age,course})
//    })
//         response = await response.json();
        
//         if(response)
//         {
//             alert("data is updated sucessfull");
//             navigate("/")

//         }
//     }

//     return (
//         <>

//             <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} placeholder="Name:" /><br /><br />
//             <input type="text" value={age} onChange={(e) => { setage(e.target.value) }} placeholder="Age" /><br /><br />
//             <input type="text" value={course} onChange={(e) => { setcourse(e.target.value) }} placeholder="Course" /><br /><br />
//             <button onClick={updated}>update</button>
//         </>
//     )
// }

