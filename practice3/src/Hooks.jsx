// Hooks-> it is a special feature of react it allow you to use diffrrent feature in your component;

// import { useEffect, useRef, useState } from "react"


// ex-> useState()-> return a stateful value and function is update it
// ,UseRef()-> it is target the element whose current property. it give current reference;
//  it is used to control any html element and dom
// ,UseActionState()-> it can handle the form data, it give three value data,action,pending and take 2 args like
// function that handle the form data that function take 2 arge prev formdata ;
// ,usetransition()->it used without form to handle form data or html element

// ,useFormStatus()-> it is used to handele form data that neccessary to declare form;

/* useEffect-> it is handle the side effect of state props etc;

useEffect(()=>{
    it can be run every time 
    })
useEffect(()=>{
    it can be run only one time 
    },[])
useEffect(()=>{
    it can be run only state 
    },[state])

    useEffect(()=>{
    it can be run state or props 
    },[state,props])

*/

// export default function Sideeffect()
// {
//     let [data,setdata]=useState(0)
//     let [count,setcount]=useState(0)
//     // useEffect(()=>{
//     //       fun()
//     //       fun1()
//     // })
//     //  useEffect(()=>{
//     //       fun()
//     //       fun1()
//     // },[])
//     //  useEffect(()=>{
//     //       fun()
//     //       fun1()
//     // },[data])
//      useEffect(()=>{
//           fun()
//           fun1()
//     },[count,data])
//     function fun()
//     {
//         console.log("call fun")
//     }
//     function fun1()
//     {
//         console.log("call fun1")
//     }
// //    fun()
// //    fun1()
//     return(
//         <>
//         <button onClick={()=>{
//             setcount(count++)
//         }}>count={count}</button>
//          <button onClick={()=>{
//             setdata(data++)
//         }}>data={data}</button>
//         </>
//     )
// }


// export default function Sideeffect() {
//     let name = useRef(null);
//     let pass = useRef(null)
//  let [namedata,setnamedata]=useState()
//  let [passdata,setpass]=useState()
//     function getdata() {


//         name.current.focus()
//         let password=pass.current.value;
//         let names=name.current.value
//    setnamedata(names);
//    setpass(password)
//         console.log(passdata,names)


//     }
//     return (
//         <>
//                 <input type="text" ref={name} />
//                 {namedata}
//                 <br /><br />
//                 <input type="text" ref={pass} />
//                 {passdata}
//                 <button onClick={getdata}>click</button>
          
//         </>
//     )
// }