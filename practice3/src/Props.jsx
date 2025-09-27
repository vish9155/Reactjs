// // it is used to pass the data from one component to another component it is a functional argument;
// // when you used  component as wrapper the you use children component; 

import Wrapper from "./Wrapper";

// import { useState } from "react"
// import Userdata from "./Userdata"
// export default function Propsdata() {
//     let arr = ['vishal', 'kushal', 'naresh', 'sudhir', 'gopal', 'abhinav', 'raja', 'damu']
//     // let [value, setvalue] = useState(['vishal', 'kushal', 'naresh', 'sudhir', 'gopal', 'abhinav', 'raja', 'damu'])

//     // let [value,setvalue]=useState([{ name: "vishal", age: "20" }, { name: "akash", age: "23" }, { name: "ram", age: "25" }])


//     // function updatedata(names) {
//     //     console.log(names)
//     //     value[value.length - 1].name = names;
//     //     console.log(value)
//     //     setvalue([...value])


//     // }
// let [value,setvalue]=useState({

//         name: "vishal",
//         age: 20,
//         course: "mca",
//         city: "hajipur",
//         address: {
//             address1: {
//                 state: {
//                     statename: "bihar"
//                 }
//             },
//             address2: {

//                 block: "hajipur",
//                 pin: 844502,
//                 dist: "vaishali"

//             }
//         }
//     }
// )

// function updatedata(city)
// {
//     value.address.address1.state.statename=city
//     setvalue({...value,address:{...value.address},address1:{...value.address.address1},
//     state:{...value.address.address1.state},city})
// }


//     let arr2 = [{ name: "vishal", age: "20" }, { name: "akash", age: "23" }, { name: "ram", age: "25" }]
//     let obj = {

//         name: "vishal",
//         age: 20,
//         course: "mca",
//         city: "hajipur",
//         address: {
//             address1: {
//                 state: {
//                     statename: "bihar"
//                 }
//             },
//             address2: {

//                 block: "hajipur",
//                 pin: 844502,
//                 dist: "vaishali"

//             }
//         }
//     }


//     return (
//         <>

//             <input type="text" name="name" onChange={(event) => { updatedata(event.target.value) }} />

//             {/* <div>
//                 {
//                     arr.map((item, index) => {
//                         return (
//                             <div key={index}>
//                                 <Userdata arr={item} />
//                                 <h1>{item}</h1>
//                             </div>
//                         )
//                     })
//                 }
//                 {
//                     arr2.map((item2,index)=>{
//                         return(
//                             <div key={index}>
//                               <Userdata arr2={item2.name} arr3={item2.age} />
//                             </div>
//                         )
//                     })
//                 }
//             </div> */}
//             {/* <div>
//                 {
//                     value.map((item, index) => {
//                         return (
//                             <div key={index}>
//                                 <h3>{item.name}</h3>
//                                 <h3>{item.age}</h3>
//                             </div>
//                         )
//                     })
//                 }
//             </div> */}
//             <h1>{value.name}</h1>
//             <h2>{value.address.address1.state.statename}</h2>

//         </>
//     )
// }


export default function Propsdata()
{
    return(
        <>
        
        <Wrapper color="red">
            <h1>hello</h1>
            <p>this is a wrapper component in Propsdata </p>
        </Wrapper>
        </>
    )
}