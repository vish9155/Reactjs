// import { useEffect, useState } from "react"
// import { useNavigate, useParams } from "react-router"


import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
// export default function EditUser() {
//     let [name, setname] = useState('')
//     let [age, setage] = useState('')
//     let [email, setemail] = useState('')

//     let {id}=useParams();
//     let navigate=useNavigate()
//     let url="http://localhost:3000/users/"+id

//     useEffect(()=>{
//       editdata()
//     },[])

//     async function editdata()
//     {
//         console.log(id)
//         console.log(url)
//      let response=await fetch(url);
//      response=await response.json();
//      setage(response.age)
//      setemail(response.email) 
//      setname(response.name)    

//     }

//     async function setdata()
//     {
//       let response=await fetch(url,{
//         method:"put" , body: JSON.stringify({name,age,email})
//       })
//       response=await response.json();
//       console.log(response);
//       if(response)
//       {
//         alert("Data is Successfully Edited")
//         navigate("/")
//       }
//     }

//     return (
//         <>
//         <input type="text" value={name} onChange={(event) => { setname(event.target.value) }} />
//             <br /><br />
//             <input type="text" value={email} onChange={(event) => { setemail(event.target.value) }} />
//             <br /><br />
//             <input type="text" value={age} onChange={(event) => { setage(event.target.value) }} />
//             <br />
//             <br />
//             <button onClick={setdata} >Update</button>
//         </>
//     )
// }

export default function EditUser() {
  let [name, setname] = useState('')
  let [age, setage] = useState('')
  let [course, setcourse] = useState('')
  let { id } = useParams()
  let navigate3 = useNavigate()
  console.log(id)
  let url = "http://localhost:3000/users/" + id

  useEffect(() => {
    editdata()
  },[])

  async function editdata() {
    console.log(name, age, course)
    let response = await fetch(url);
    response = await response.json();
    setname(response.name)
    setage(response.age)
    setcourse(response.course)
  }

  async function updatedata() {
    let response = await fetch(url, {
      method:"put", body:JSON.stringify({ name, age, course })
    })
    response = await response.json();
    if (response) {
      alert("Data is Sucessfully Updated")
      navigate3("/")
    }
  }

  return (
    <>
      <div>
        <input type="text" value={name} onChange={(event) => { setname(event.target.value) }} placeholder="Enter Name......" /><br /><br />
      <input type="text" value={age} onChange={(event) => { setage(event.target.value) }} placeholder="Enter Age......" /><br /><br />
      <input type="text" value={course} onChange={(event) => { setcourse(event.target.value) }} placeholder="Enter Course......" /><br /><br />
      <button onClick={updatedata} >Update</button>
      </div>
    </>
  )
}