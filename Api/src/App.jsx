// // // Api->It is stand for Application programing interface.it support JSON data;
// // // fetch api-> it is it is provide the interface of resources;
// // //fetch()-> it is fetch the data;
// // //json()-> it return second promise as resolved;

// import { Route, Routes } from "react-router";
// import UserList from "./UserList";
// import AddNewUser from "./AddNewUser";
// import EditUser from "./EditUser";
import USEapi from "./USEAPI";


// // import { useEffect, useState } from "react";
// import { Routes, Route, NavLink } from "react-router";
// import Userlist from "./UserList";
// import AddNewUser from "./AddNewUser";
// import EditUser from "./EditUser";
// import FormValidation from "../FormValidation";

// // import { useEffect, useState } from "react";



// // export default function App()  {

// //     let [data,setdata]=useState('')

// //     useEffect(()=>{
// //         getdata()
// //     },[])

// //     async function getdata() {
// //         let response=await fetch("https://official-joke-api.appspot.com/jokes/random")
// //         console.log(response);
// //         response=await response.json()
// //         console.log(response)
// //         setdata(response)
// //     }

// // return(
// //     <>
// //     <h1>hello</h1>
// //      <div>
// //         <h1>{data.id}</h1>
// //           <h1>{data.setup}</h1>
// //             <h1>{data.punchline}</h1>
// //               <h1>{data.type}</h1>
// //      </div>
// //     </>
// // )


// // }

// // export default function App() {

// //     useEffect(() => {
// //         getdata()
// //     }, [])

// //     let [data, setdata] = useState('')
// //     let [data2, setdata2] = useState([])
// //     async function getdata() {

// //         await new Promise((res)=>{
// //             setInterval(res,5000)
// //         })

// //         let response = await fetch("https://randomuser.me/api/")
// //         console.log(response);
// //         response = await response.json();
// //         console.log(response);
// //         setdata(response.info)
// //         setdata2(response.results)
// //     }

// //     return (
// //         <>
// //             <div>
// //                 <h1>{data.version}</h1>
// //                 <h1>{data.seed}</h1>
// //                 <h1>{data.page}</h1>
// //                 <h1>{data.results}</h1>
// //                 {
// //                     data2.map((item,i)=>{
// //                         return(
// //                             <div key={i}>
// //                                 <h1>{item.gender}</h1>
// //                                 <h1>{item.cell}</h1>
// //                                 <h1>{item.email}</h1>
// //                                 <h1>{item.dob.age}</h1>
// //                                 <h1>{item.location.city}</h1>
// //                                  <h1>{item.location.coordinates.longitude}</h1>
// //                             </div>
// //                         )
// //                     })

// //                 }


// //             </div>
// //         </>
// //     )
// // }

// // Api Methods -> Get -> for getting data, set()-> for setting data or store delete() -> deleting data;
// //put/patch()-> to update data

// // How to create Api -> filename.json {"fileld name":[{}]}

// // export default function App() {
// //     let [data, setdata] = useState([]);

// //     useEffect(() => {
// //         getdata()
// //     }, [])
// //     async function getdata() {
// //         let response = await fetch("http://localhost:3000/users")
// //         response = await response.json();
// //         console.log(response)
// //         setdata(response)
// //     }

// //     return (
// //         <>
// //             <div>
// //                 <h1>{data.map((item, i) => {
// //                     return (
// //                         <div key={i}>
// //                             <h1>{item.name}</h1>
// //                             <h3>{item.age}</h3>
// //                             <h3>{item.email}</h3>
// //                         </div>
// //                     )
// //                 })}</h1>
// //             </div>
// //         </>
// //     )
// // }

// // export default function App() {
// //     return (
// //         <>
// //             <div >
// //                 <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
// //                     <NavLink to={"/"} >Userlist</NavLink>
// //                 <NavLink to={"/add"} >AddNewUser</NavLink>
// //                 </div>
// //                 <Routes>
// //                     <Route path="/"  element={<Userlist />} />
// //                     <Route path="/add" element={<AddNewUser />} />
// //                     <Route path="/editda/:id" element={<EditUser />} />
// //                 </Routes>
// //             </div>
// //         </>
// //     )
// // }

// export default function App()
// {
//     return(
//         <>
//         <FormValidation />
//         </>
//     )
// }

// export default function App()
// {
//     return(
//         <>
//         {/* <UserList /> */}
//         <Routes>
//             {/* <Route path="/" element={<UserList />} />
//             <Route path="/adduser" element={<AddNewUser />} />
//             <Route path="/edit/:id" element={<EditUser />} /> */}
//             <USEapi />
//         </Routes>
//         </>
//     )
// }


export default function App()
{
    return(
        <>
        <USEapi />
        </>
    )
}