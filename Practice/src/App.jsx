// import Frt, { Ani, V } from "./K_V";

import { useEffect, useState } from "react"


// function App()
// {
//   return(
//     <div>
//      <Frt />
//      <Ani />
//      <V />
//     </div>
//   )
// }

// export default App

// function App()
// {
//   let name="vishal"
//   let a=10;
//   let b=20;
//   function cal(x,y,op)
//   {
//     if(op=="+")
//     {
//       console.log(x+y)
//     }
//      else if(op=="-")
//     {
//       console.log(x-y)
//     }
//      else if(op=="*")
//     {
//       console.log(x*y)
//     }
//      else if(op=="/")
//     {
//       console.log(x/y)
//     }
//     else{
//       console.log("error")
//     }
//   }
//   function fun()
//   {
//     console.log("hello")
//   }
//   return(
//     <div>
//        <h1>Name is : {name?name:"No Any Name Found"}</h1>
//        <h1>A = {a}</h1>
//        <h1>B={b}</h1>
//        <h1>Default sum is:{a+b}</h1>

//        <button onClick={()=>{
//         cal(10,40,"-")
//        }}>Click</button>
//        <button onClick={fun}>fun</button>
//     </div>
//   )
// }

// export default App

//  import { useState } from "react";

// function App()
// {

//   let [data,setdata]=useState(0)
//   let [name,setname]=useState("vishal")
//  let [dispaly ,setdispaly]=useState(true)

//   function update()
//   {
//     data+=1
//     setdata(data)
//   }

// return(
//   <div>
//    <h1>Count:{data?data:null}</h1>
//    <h2>Name:{name?name:null}</h2>
//    <h2>{dispaly?"hello":null}</h2>
//    <button onClick={()=>setdispaly(!dispaly)}>Show</button>
//    <button onClick={update}>Click me</button>
//    <button onClick={()=>{
//     name=null
//     setname(name)
//    }}>click</button>
//   </div>
// )
// }

//  export default App

// function App()
// {
//   const arr=[1,2,34,4];
//   const obj={
//     name:"vishal",
//     age:10
//   }
// return(
//   <div>
// <h1>{arr}</h1>
// <h1>{arr[0]}</h1>
// <h1>{arr[1]}</h1>
// <h1>{arr[2]}</h1>
// <h1>{arr[3]}</h1>
//     <h1>{obj.name}</h1>
//     <h1>{obj.age}</h1>
//   </div>
// )
// }
// // export default App
// import Data from "./Std_d"

// function App()
// {
//   const name="Vishal"
//   const age=19
//   const email="vishal@test.com"
//   return(
//     <div>
//      <Data name={name?name:"user not found"} age={age} email={email} />
//     </div>
//   )
// }

// export default App

// function App() {
//   let obj = {
//     name: "VishalKumar",
//     age: 19,
//     email: "vishal@test.com"
//   }
//   let obj1 = {
//     name: "VishalKumaryadav",
//     age: 39,
//     email: "vishal@test.com"
//   }
//   let obj2 = {

//     age: 19,
//     email: "vishal@test.com"
//   }
//   return (
//     <div>
//       <Data name={obj.name ? obj.name : "user not found"} age={obj.age} email={obj.email} />
//       <Data name={obj1.name ? obj1.name : "user not found"} age={obj1.age} email={obj1.email} />
//       <Data name={obj2.name ? obj2.name : "user not found"} age={obj2.age} email={obj2.email} />
//     </div>
//   )
// }

// export default App

// import { useState } from "react"
//  function App()
// {
//   let [data,setdata]=useState("Default")
//   const name="Vishal"
//   const age=19
//   const email="vishal@test.com"

//   return(
//     <div>
//       {
//         data?data:null
//       }
//      <button onClick={()=>{setdata(<Data name={name?name:"user not found"} age={age} email={email} />)}}>Click</button>
//     </div>
//   )
// }

// export default App
// import Wrap from "./Wrap"
// function App()
// {
//   let name="vishal"
//   let age=30
//   return(
//     <div>
//      <h1>Hello Everyone </h1>
//      <Wrap color="purple">
//       <h1 style={{color:"red"}}>{name?name:"user not found"}</h1>
//       <h1 >{age}</h1>
//      </Wrap>
//      <Wrap>
//       <h1 style={{color:"blue"}}>hello</h1>
//      </Wrap>
//     </div>
//   )
// } 
// export default App


// import Props from "./Props"
// import { useState } from "react"
// function App() {

//   let [val,setval]=useState()

//   let name = "vishal"
//   let age = 30
//   let email = "vishal@test.com"

//   let obj = {
//     name: "vishal yadav",
//     age: 40,
//     email: "vishalyadav@test.com"
//   }
//   let obj2 = {
//     name: "kushal yadav",
//     age: 30,
//     email: "kushalyadav@test.com"
//   }
//   let arr=[{name:"nicky",age:20,email:"arrayobject.com"}]
//   let arr1 = [20, 40, 55, 333]


//   return (
//     <div>
//       <h1>{arr[0].name}</h1>
//         <h1>{arr[0].age}</h1>
//         <h1>{arr[0].email}</h1>

//       <h1>Hello Everyone This is practice session of Props</h1>
//       <h1>Props with variable:</h1>
//       <Props name={name ? name : "User not found"} age={age ? age : null} email={email ? email : null} />
//       <h1>Props with Object1:</h1>
//       <Props name={obj.name ? name : "User not found"} age={obj.age ? obj.age : null} email={obj.email ? obj.email : null} />
//       <h1>Props with object2:</h1>
//       <Props name={name ? obj2.name : "User not found"} age={obj2.age ? obj2.age : null} email={obj2.email ? obj2.email : null} />
//       <h1>Props with Array with object:</h1>
//       <Props name={arr[0].name ? arr[0].name : "User not found"} age={arr[0].age ? arr[0].age : null} email={arr[0].email ? arr[0].email : null} />
//       <h2>Number data</h2>
//         <Props data={arr1[0]} data2={arr1[1]} data3={arr1[2]}/>

//         <h1>Onclick Event</h1>
//         <button onClick={()=>{setval(<Props name={arr[0].name ? arr[0].name : "User not found"} age={arr[0].age ? arr[0].age : null} email={arr[0].email ? arr[0].email : null} /> )}}></button>
//         <h1>{val}</h1>
//     </div>
//   )
// }
// export default App

//What is controlled component-> it is a form whose value is controlled by react state
//How its work -> 1. to store value in state;
//                2. to use change handler to get operation
//                3.to set value in value attributre

// import { useState } from "react";

// function App() {
//   let [Name, setName] = useState()
//   let [Password, setPassword] = useState()
//   let [Email, setEmail] = useState()

//   return (
//     <div>
//       <form action="" method="post">
//         <input value={Name} type="text" onChange={(event) => { setName(event.target.value) }} id="" />
//         <h2>{Name}</h2>
//         <br />
//         <br />
//         <input value={Password} type="password" onChange={(event) => { setPassword(event.target.value) }} id="" />
//         <h2>{Password}</h2>
//         <br />
//         <br />
//         <input value={Email} type="email" onChange={(event) => { setEmail(event.target.value) }} id="" />
//         <h2>{Email}</h2>
//         <br />
//         <br />
//         <button onClick={() => { setEmail(""), setName("", setPassword("")) }}>Clear</button>
//         <button type="submit">submit</button>
//       </form>
//     </div>
//   )
// }

// export default App

//Handle checkbox

// import { useState } from "react";

// function App()
// {
//   let [skill,setskills]=useState([])
//   function handle(event)
//   {
//    if(event.target.checked)
//    {
//     setskills([...skill,event.target.value])
//    }
//    else{
//     setskills([...skill.filter((item)=>item!=event.target.value)])
//    }
//   }
//   return(
//     <div>
//      <input type="checkbox" onChange={handle} value="js" checked={skill=="js"} />
//      <label htmlFor="js">js</label>
//       <input type="checkbox" onChange={handle} value="python"  />
//      <label htmlFor="python">python</label>
//       <input type="checkbox" onChange={handle} value="React"   />
//      <label htmlFor="React">React</label>
//       <input type="checkbox" onChange={handle} value="Node"   />
//      <label htmlFor="Node">Node</label>
//       <input type="checkbox" onChange={handle} value="MangoDB"   />
//      <label htmlFor="MangoDB">MangoDB</label>
//      <h1>{skill.toString()}</h1>
//     </div>
//   )
// }

// export default App

//how to handle radio box and dropdown(select box)

// import { useState } from "react";

// function App()
// {
//   let [gender,setgender]=useState("male")
//   let [city,setcity]=useState("Bihar")


//   return(
//     <div>
//       <input type="radio" value="male" onChange={(event)=>{setgender(event.target.value)}} name="gender" checked={gender=="male"} />
//       <label htmlFor="male">Male</label>
//        <input type="radio" value="female" onChange={(event)=>{setgender(event.target.value)}} name="gender" checked={gender=="female"}/>
//       <label htmlFor="female">Feale</label>
//       <h1>{gender}</h1>

//      <select onChange={(event)=>{setcity(event.target.value)}} defaultValue={"Bihar"} >
//       <option value="Delhi">Delhi</option>
//       <option value="Bihar">Bihar</option>
//       <option value="Merut">Merut</option>
//       <option value="Grugram">Grugram</option>
//       <option value="Noida">Noid</option>
//      </select>
//     <h1>{city}</h1>
//     </div>
//   )
// }

// export default App

//loop in jsx using with map function

// function App() {
//     let employee = [{
//         name: "vishal",
//         id: 1,
//         email: "vishaljpkumar4970@gmail.com",
//     }, {
//         name: "kushal",
//         id: 2,
//         email: "kushaljpkumar4070@gmail.com"
//     }, {
//         name: "Shalini",
//         id: 3,
//         email: "shalinijpkuamri8849@gmail.com"
//     }]
//     return (
//         <div>
//             <table border="1">
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         employee.map((data) => {
//                             return (
//                                 <tr key={data.id}>
//                                     <td>{data.id}</td>
//                                     <td>{data.name}</td>
//                                     <td>{data.email}</td>


//                                 </tr>
//                             )
//                         })
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default App

// import Data from "./Std_d";

// function App()
// {
//     let employee = [{
//         name: "vishal",
//         id: 1,
//         email: "vishaljpkumar4970@gmail.com",
//     }, {
//         name: "kushal",
//         id: 2,
//         email: "kushaljpkumar4070@gmail.com"
//     }, {
//         name: "Shalini",
//         id: 3,
//         email: "shalinijpkuamri8849@gmail.com"
//     }]
//     return(
//         <div >
//            {
//             employee.map((data)=>{
//                 return(
//                     <div key={data.name}>
//                         <Data Employee={data} />
//                     </div>
//                 )
//             })
//            }

//         </div>
//     )
// }
// export default App

// import { useState } from "react";
// function App()
// {
//     let [user,setuser]=useState({
//         id:"",
//         name:"",
//         email:""
//     })
//     function updatedata(e)
//     {
//         setuser({...user,[e.target.name]:e.target.value})

//     }

// return(
//     <div>
//          <input type="text" name="id"   onChange={updatedata} />
//          <input type="text" name="name" onChange={updatedata}  />
//          <input type="text" name="email" onChange={updatedata}  />

//        {
//         <table border="1">
//             <thead>
//                 <tr>
//                     <td>Id</td>
//                     <td>Name</td>
//                     <td>Email</td>
//                 </tr>
//             </thead>
//             <tbody>
//                {
//                 // user.map((userdata)=>{
//                 //     return(
//                 //         <tr key={userdata.id}>
//                 //             <td>{userdata.id}</td>
//                 //             <td>{userdata.name}</td>
//                 //             <td>{userdata.email}</td>
//                 //         </tr>
//                 //     )
//                 // })
//                 <tr>
//                     <td>{user.id}</td>
//                     <td>{user.name}</td>
//                     <td>{user.email}</td>
//                 </tr>
//                }
//             </tbody>
//         </table>
//        }

//     </div>
// )
// }

// export default App

// import CollegeBuddy from "./Props"

// function App() {
//     let collegeData = [{
//         collegename: "IET",
//         id: 1,
//         city: "Kharakpur",
//         website: "www.iet.com",
//         student: [
//             {
//                 name: "vishal",
//                 age: 20,
//                 email: "vish@gmail.com"
//             },
//             {
//                 name: "kushal",
//                 age: 22,
//                 email: "kush@gmail.com"
//             },
//             {
//                 name: "shalini",
//                 age: 24,
//                 email: "shalini@gmail.com"
//             }
//         ]
//     },
//     {
//         collegename: "NIT",
//         id: 2,
//         city: "kerla",
//         website: "www.nit.com",
//         student: [
//             {
//                 name: "komal",
//                 age: 26,
//                 email: "komal@gmail.com"
//             },
//             {
//                 name: "khusi",
//                 age: 24,
//                 email: "khushi@gmail.com"
//             },
//             {
//                 name: "shaliniyadav",
//                 age: 29,
//                 email: "shaliniyadav@gmail.com"
//             }
//         ]
//     },
//     {
//         collegename: "IIT",
//         id: 3,
//         city: "Delhi",
//         website: "www.iit.com",
//         student: [
//             {
//                 name: "vishnu",
//                 age: 29,
//                 email: "vishnu@gmail.com"
//             },
//             {
//                 name: "kushal",
//                 age: 22,
//                 email: "kush@gmail.com"
//             },
//             {
//                 name: "shalini",
//                 age: 24,
//                 email: "shalini@gmail.com"
//             }
//         ]
//     }
//     ]

//     return (
//         <div>
//             {
//                 collegeData.map((infoofcollege) => {
//                     return (
//                         <div key={infoofcollege.id}>
//                             <h1>{infoofcollege.collegename}</h1>
//                             <ul>
//                                 <li>
//                                     <h3>{infoofcollege.id}</h3>
//                                 </li>
//                                 <li>
//                                     <h3>{infoofcollege.city}</h3>
//                                 </li>
//                                 <li>
//                                     <h3>{infoofcollege.website}</h3>
//                                 </li>
//                                 <ul>
//                                     <li>
//                                         <h3>{infoofcollege.student.map((stdata) => {
//                                             return (
//                                                 <div key={stdata.email}>
//                                                     <h1>
//                                                         {stdata.name}
//                                                     </h1>
//                                                     <ul>

//                                                         <li>
//                                                             <h3>{stdata.age}</h3>
//                                                         </li>
//                                                         <li>
//                                                             <h3>{stdata.email}</h3>
//                                                         </li>
//                                                     </ul>
//                                                 </div>
//                                             )
//                                         })}</h3>
//                                     </li>
//                                 </ul>
//                             </ul>
//                             {/* <CollegeBuddy data={infoofcollege} /> */}
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }
// export default App

// import Info from "./Std_d"
// function App()
// {
//     let a=[{
//         name:"vishal",
//         email:"vishal@test",
//         work:[
//            { 

//             game:"cricket"

//            },
//            {
//             city:"hajipur"
//            }
//         ]
//     }]
//     return( 
//       <div>
//         {
//             a.map((data)=>{
//                 return(
//                     <div key={data.email}>

//                          <Info person1={data} />
//                     </div>
//                 )
//             })
//         }

//       </div>
//     )
// }

// export default App

import "./style.css"

function App() {
    let [value, setvalue] = useState('');
    let [todo, settodo] = useState(() => {
        let saved = localStorage.getItem("todo")
        return saved ? JSON.parse(saved) : [];
    })

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todo))
    }, [todo])

    function addtodo() {


        if (value == '') {
            alert("please enter somethings......")
        }
        else {
            settodo([...todo, { text: value, done: false }])
        }

        value = ' '
    }
    function deletetodo(index) {
        let newtodo = todo.filter((_,i) => i != index)
        settodo(newtodo)
    }
    function toggle(index) {
        let newtodo = [...todo]

        newtodo[index].done = !newtodo[index].done
        settodo(newtodo)
    }

    return (
        <>
            <div className="containner">
                <div className="todoapp">
                    <h2 className="tittle">Todo-List </h2>
                    <div className="inputbtn">
                        <input type="text" onChange={(event) => { setvalue(event.target.value) }} placeholder="Enter somethongs....." />
                        <button className="btn" onClick={addtodo}>Add</button>
                    </div>
                    <ul>
                        {
                            todo.map((item, index) => {
                                return (


                                    <li key={index} className={item.done?'checked':""} onClick={()=>{toggle(index)}} >{item.text}

                                        <button onClick={(e) => { e.stopPropagation(), deletetodo(index) }}>Delete</button>

                                    </li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default App