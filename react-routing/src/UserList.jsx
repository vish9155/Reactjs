// import { useEffect, useState } from "react"


// export default function UserList() {

//     let [data, setdata] = useState([])
//     let [loading,setloading]=useState(false)

//     useEffect(() => {
//         setloading(true)
//         console.log(loading)
//         getdata()
//     }, [])



//     let getdata = async () => {
//         let url = "http://localhost:3000/user"
//         let response = await fetch(url)
//         console.log(url)
//         let userdata = await response.json();
//         console.log(userdata)
//         setdata(userdata)
//         setloading(false)
//         console.log(loading)
//     }
//     return (
//         <>
//             <div>
//                 <h1>It is UserList</h1>
//                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", border: "1px solid black" }}>
//                     <h2>Name</h2>
//                     <h2>Email</h2>
//                     <h2>Age</h2>
//                     <h1>{loading}</h1>

//                 </div>
//                 {
//                   !loading?data.map((item) => {
//                         return (
//                             <ul key={item.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-around", listStyle: "none", border: "1px solid black" }}>
//                                 <li>{item.name}</li>
//                                 <li>{item.email}</li>
//                                 <li>{item.age}</li>
//                             </ul>
//                         )
//                     }):"Data Is Loaded"
//                 }

//             </div>
//         </>
//     )
// }


import { useEffect, useState } from "react"
import { useNavigate } from "react-router"


export default function UserList() {

    let [data, setdata] = useState([])
     
    let navigate=useNavigate()

    let edituser=(id)=>{
        navigate("/edit/"+id)
    }
  

    useEffect(() => {
        getdata()
    }, [])


    let url = "http://localhost:3000/user"
    let getdata = async () => {

        let response = await fetch(url)
        console.log(url)
        let userdata = await response.json();
        console.log(userdata)
        setdata(userdata)

    }
    let deleteuser = async (id) => {
        console.log(id)
        let response=await fetch(url+"/"+id,{
            method:"delete"
        })
        response=await response.json();
        console.log(response)
        if(response)
        {
            alert("User list is successfully Deleted")
            getdata()
        }

    }
    return (
        <>
            <div>
                <h1>It is UserList</h1>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", border: "1px solid black" }}>
                    <h2>Name</h2>
                    <h2>Email</h2>
                    <h2>Age</h2>
                    <h2>Delete</h2>
                    <h2>Edit</h2>
                </div>
                {
                    data.map((item,index) => {
                        return (
                            <ul key={index} style={{ display: "flex", alignItems: "center", justifyContent: "space-around", listStyle: "none", border: "1px solid black" }}>
                                <li>{item.name}</li>
                                <li>{item.email}</li>
                                <li>{item.age}</li>
                                <button onClick={()=>{deleteuser(item.id)}}>DeleteUser</button>
                                <button onClick={()=>{edituser(item.id)}}>EditUser</button>
                            </ul>
                        )
                    })
                }

            </div>
        </>
    )
}