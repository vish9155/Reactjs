// export default function Propsdata({colors}) {
//     return (
//         <>

import { useState } from "react"

//             <h1 style={{color:colors}}> This is a Props Component' </h1>

//         </>
//     )
// }

// export default function Propsdata({arr}) {
//     return (
//         <>

//             <h1 > This is a Props Component' </h1>


//           <ol>
//             {
//                 arr.map((items,index)=>(
//                     <li key={index}>
//                          {`${items}=>${index}`}
//                     </li>
//                 ))
//             }
//           </ol>


//         </>
//     )
// }

// export default function Propsdata({message}) {


//     let [msg,setmsg]=useState("")

//     useEffect(()=>{
//    setmsg(message)
//     },[message])

//     return <h1>{msg}</h1>
      
    
// }

// export default function Propsdata({data,counter})
// {
//     let [msg,setmessage]=useState()
//     useEffect(()=>{
//         setmessage("count")
//         hello()

//         hello2()
//     },[data])

//     function hello()
//     {
//         console.log("hello")
//     }

//      function hello2()
//     {
//         console.log("hello2")
//     }
//     // useEffect(()=>{
//     //     setmessage("count"+counter)
//     // })

//     return(
//         <>
        
//         <h1>{msg+data}</h1>
//         <h1>{msg+counter}</h1>

//         </>
//     )
// }

export default function Props({data})
{
    return(
        <>
        <h1>{data?"hello world":null}</h1>
        </>
    )
}