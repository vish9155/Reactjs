// // // controled statement is  a form whose input field values is handle by the state;

// import { useRef } from "react"

// // import { useEffect, useState } from "react"



// // export default function Controlled() {

// //     let saved = JSON.parse(localStorage.getItem("info"))

// //     let [name, setname] = useState(saved && saved.name ? saved.name : null)

// //     let [email, setemail] = useState(saved && saved.email ? saved.email : null)

// //     let [password, setpassword] = useState(saved && saved.password ? saved.password : null)

// //    function save()
// //    {
// //         localStorage.setItem("info",JSON.stringify({name,email,password}))
// // }


// //     return (
// //         <>
// //             <form action="">
// //                 <input type="text"   value={name} onChange={(event) => { setname(event.target.value) }} />

// //                 <br />
// //                 <br />
// //                 <input type="email"   value={email} onChange={(event) => { setemail(event.target.value) }} />
// //                 <br /><br />
// //                 <input type="password"   value={password} onChange={(event) => { setpassword(event.target.value) }} />
// //                 <br />
// //                 <br />
// //                 <button onClick={save} >submit</button>
// //                 <br />
// //                 <br />
// //                 <h3>Name:{name}</h3>
// //                 <h3>Email:{email}</h3>
// //                 <h3>Password:{password}</h3>
// //             </form>

// //         </>
// //     )
// // }
// export default function Uncontrolled() {

//     let name = useRef()
//     let email = useRef()
//     let password = useRef()

//     function savedata()
//     {
//         let Name=name.current.value;
//         let Password=password.current.value;
//         let Gmail=email.current.value;

//       console.log(Name,Gmail,Password)
//       return {namedata:Name,Password,Gmail}
//     }

//     return (
//         <>
//             Name:<input type="text" ref={name} />
//             <br /><br />
//             Eamil:<input type="text" ref={email} />
//             <br /><br />
//             Password:<input type="text" ref={password} />
//             <br /><br />
//             <button onClick={savedata}>SaveData</button>
//             <br />
//             <br />
 
//         </>
//     )
// }