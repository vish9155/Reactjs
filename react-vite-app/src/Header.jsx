//1.component-> Everything is component in react that the building of ui
//To add multiple component in a file to make a complete application
//ex:-navbar ,sidebar,footer ,header etc;

import { useEffect } from "react"

// function Name()//component->1st alphabet is Always capital of any component
// {
// return(
//     <div>
//         <h1>Vishal</h1>
//         <h2>Kushal</h2>
//         <h3>Shalini</h3>
//     </div>
// )
// }

// export default Name //defautl export-> it is use in primary component beacause only one component is default component

// export function Fru()//name export-> there are multiple Default Export. it's declare after component
// {
//     return (
//         <div>
//             <ul>
//                 <li>Mango</li>
//                 <li>Guava</li>
//                 <li>Papaya</li>
//                 <li>Lichi</li>
//             </ul>
//         </div>
//     )
// }



// export function Vegitable()
// {
// return(
//     <div>
//         <ul>
//             <li>Potato</li>
//             <li>Tomato</li>
//             <li>Cucumber</li>
//         </ul>
//     </div>
// )
// }

// export function Animals()
// {
//     return (
//         <div>
//             <ul>
//                 <li>Tiger</li>
//                 <li>Lion</li>
//                 <li>Panther</li>
//             </ul>
//         </div>
//     )
// }


// export function God()
// {
//     return(
//         <div>
//             <ul>
//                 <li>Durga maa</li>
//                 <li>Kali maa</li>
//                 <li>Sarswati maa</li>
//             </ul>
//         </div>
//     )
// }

// export function Newcourse()
// {
//     return(
//         <div>
//             <ul>
//                 <li>Bca</li>
//                 <li>Mca</li>
//                 <li>B-tech</li>
//             </ul>
//         </div>
//     )
// }-----------------------------------------------------------------------------------------------------------

// function Props({ count, data }) {
//     function counter() {
//         console.log("hello counter function")
//     }
//     function datafun() {
//         console.log("hello datafun function")
//     }
//     // useEffect(() => {
//     //     counter()
//     //     datafun()
//     // })
//     // useEffect(() => {
//     //     counter()
//     //     datafun()
//     // },[])
//     // useEffect(() => {
//     //     counter()
//     //     datafun()
//     // },[data])
// useEffect(() => {
//         counter()
//         datafun()
//     },[data,count ])
//     return (
//         <div>
//             <h1>count value {count}</h1>
//             <h1>data value {data}</h1>
//         </div>
//     )
// }

// export default Props


// function Lifecycle({ data, count }) {

//     function counter() {
//         console.log("counter fun")
//     }
//     function datafun() {
//         console.log("data fun")
//     }
//     // useEffect(() => {
//     //     counter()
//     //     datafun()
//     // }) //to change every life cycle value
    
//     // useEffect(() => {
//     //     counter()
//     //     datafun()
//     // },[]) //to run code on mount 
    
//     // useEffect(() => {
//     //     counter()
//     //     datafun()
//     // },[data]) //to update value 
    
//     useEffect(() => {
//        return ()=>{
//          counter()
//         datafun()
//        }
//     },[ ]) //to change every value
    
    

//     return (
//         <div>
//             <h1>counter value : {count}</h1>
//             <h1>Data value : {data}</h1>
//         </div>
//     )
// }

// export default Lifecycle

