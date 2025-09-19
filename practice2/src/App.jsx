//component->Everything in react is component for building ui.To add multiple componenet to make a complete Application
//---------->we have always create a component, with name 1st letter is capital
// import styled from "styled-components";
// function App()
// {
//   const name="vishal kumar";
//   let age=20;
//   const email="vishaljpkumar4970@gmail.com"
//  const Heading=styled.h1({

import { useEffect, useRef, useState } from "react"
import User from "./User"
import Subject from "./Subjects"
import { SubjectContext } from "./Context"
import Color from "./Colors"

// import { useState } from "react"
// import User from "./User"
// import Display from "./Display"
// import { Contextapi } from "./ContexData"
// import Studentdata from "./Studentdata"



//   width:"300px",
//   color:"green",
//   fontFamily:"cursive",
//   fontSize:"2rem"
//  })
//   const Heading2=styled.h2({

//   width:"300px",
//   color:"green",
//   fontFamily:"cursive",
//   fontSize:"2rem"
//  })
//   const Heading3=styled.h3({

//   width:"300px",
//   color:"green",
//   fontFamily:"cursive",
//   fontSize:"2rem"
//  })
//   function cal(a,b,op)
//   {
//   if(op=="+")
//   {
//     return a+b
//   }
//   else if(op=="-")
//   {
//     return a-b
//   }
//   else if(op=="*")
//   {
//     return a*b
//   }
//   else if(op=="/")
//   {
//     return a/b
//   }
//   else{
//     alert(`wrong input`)
//   }

//   }
//   return(
//     <div>
//      <Heading>Name is :{name?name:"user not found"}</Heading>
//      <Heading2>Age is :{age?age:null}</Heading2>
//      <Heading3>Email is :{email?email:null}</Heading3>
//      <button onClick={()=>{
//      console.log( cal(2002,30,"-"))
//      }}>click</button>
//     </div>
//   )
// }
// export default App

//jsx in react->jsx is a stand for javascript syntax extension or js xml.it allow to write a html markup code in js

// function App() {
//   let arr = ["banana", "apple", "Guava", "Lichi", "mango"]
//   let arrobj = [{
//     apple: "One apple no doctor",
//     Gondkatira: "Bye Bye Summer",
//     Mango: "Mngo is a king of Fruits",
//     Lion: "Lion is a king of Forest"
//   }]
//   return (
//     <div>
//       <ul style={{ color: "magenta" }}>
//         List of Fruit Accessing from Array
//         <li style={{ color: "red" }}>
//           <h3>{arr[0]}</h3>
//         </li>
//         <li style={{ color: "green" }}>
//           <h3>{arr[1]}</h3>
//         </li>
//         <li style={{ color: "orange" }}>
//           <h3>{arr[2]}</h3>
//         </li>
//         <li style={{ color: "purple" }}>
//           <h3>{arr[3]}</h3>
//         </li>
//       </ul>
//       <ol>
//         <h1>Special Qouets Accessing from Array of object</h1>
//         <li>
//           <h3>{arrobj[0].apple}</h3>
//         </li>
//         <li>
//           <h3>{arrobj[0].Gondkatira}</h3>
//         </li>
//         <li>
//           <h3>{arrobj[0].Lion}</h3>
//         </li>
//         <li>
//           <h3>{arrobj[0].Mango}</h3>
//         </li>


//       </ol>
//     </div>
//   )
// }

// export default App

//css in jsx->inline css ,external css,module css , styled component
//------>external css apply whole web page
//------>module css-> simillar to external but componenet specific;
//------>styled component-> it can we used in directyl in js ,first npm install styled-components;

//state->A state is a containner that store a data like variable,it is automatically re-rendaring the data,it is mutable and dynamic change value;

//Hooks->hooks is provide special feature of functional component;it allow you to use different feature of react from your components; ex->usestate,use,useeffect,useref,usecontext etc;

// import { useState } from "react"
// function App()
// {
//   let [count,setcount]=useState(0)
//   let [display,setdisplay]=useState(true)


//   return(
//     <div >

//       <button style={{color:"red", fontSize:"3rem"}} onClick={()=>{
//         setcount(count++)
//       }}>Count is: <span style={{color:"purple"}}> {display?count:null}</span></button>

//       <button onClick={()=>{
//         setdisplay(!display)
//       }}>toogle</button>
//     </div>
//   )
// }
// export default App


//props->it pass the data to one components to another components like a functional arguments
// import User from "./User";
// function App()
// {
//  const joke="A cat is very powerfull to man";
//  let obj={
//   name:"vishal",
//   age:"20",
//   game:{
//     indoor:"chess",
//     outdoor:"cricket",
//   }
//  }
//   return(
//     <div>
//    {/* <h1 style={{color:"purple", fontSize:"3rem"}}>This is App jsx componets pass props to User component</h1>
//    <User joke={joke} name={obj.name}  game={obj.game.indoor} /> */}

//    <h1>Pass the css as props</h1>

//    <User color="aqua">
//     hello this is pass jsx as props
//    </User>
//     </div>
//   )
// }
// export default App


//control component->Control component is a form whose input values is handle by the react state;
//1.take a input value 

// import { useState } from "react"
// function App()
// {

//   let [name,setname]=useState(" ")
//   let [password,setpassword]=useState(" ")
//   let [email,setemail]=useState(" ") 
//   return(
//     <div>
//      <form action=""  onSubmit={(event)=>{event.preventDefault}}>
//       <input type="text" value={name} onChange={(event)=>{setname(event.target.value)}} />
//       <h1>{name}</h1>
//       <br /><br />
//       <input type="password" value={password} onChange={(event)=>{setpassword(event.target.value)}} />
//       <h1>{password}</h1>
//       <br />
//       <br />
//       <input type="email"  value={email} onChange={(event)=>{setemail(event.target.value)}} />
//       <h1>{email}</h1>
//       <br /><br />
//       <button>Submit</button>
//       <button onClick={()=>{
//         setname(" "),setemail(" "),setpassword(" ")
//       }}>Clear</button>
//      </form>
//     </div>
//   )
// }

// export default App

//2.handle radio button
// import { useState } from "react"
// function App()
// {
//   let [gender,setgender]=useState("male");
//   function handle(event)
//   {
//    // console.log(event.target.checked,event.target.value)
//     if(event.target.checked)
//     {
//      setgender(event.target.value)
//     }

//   }
//   return(
//     <div>
//        <form action="">

//       <input type="radio" onChange={handle} name="gender" checked={gender=="male"} value="male" id="male" />
//       <label htmlFor="male">Male</label>
//       <input type="radio" onChange={handle} name="gender" checked={gender=="female"} value="female" id="female" />
//       <label htmlFor="female">Female</label>
//        <h1>{gender}</h1>
//        </form>
//     </div>
//   )
// }

// export default App

//3.handle checkbox and dropdown
// import { useState } from "react"
// function App() {
//   let [skill, setskill] = useState([]);
//   let [city,setcity]=useState("Bihar")
//   function getvalue(event) {
//     if (event.target.checked) {
//       setskill([...skill, event.target.value])
//     }
//     else {
//       setskill([...skill.filter((item) => item != event.target.value)])
//     }
//   }
//   return (
//     <div>
//       <form action="" >

//         <input type="checkbox" onChange={getvalue} id="js" value="js" />
//         <label htmlFor="js">js</label>
//         <input type="checkbox" onChange={getvalue} id="python" value="python" />
//         <label htmlFor="python">python</label>
//         <input type="checkbox" onChange={getvalue} id="c++" value="c++" />
//         <label htmlFor="c++">c++</label>
//         <input type="checkbox" onChange={getvalue} id="c" value="c" />
//         <label htmlFor="c">c</label>
//         <input type="checkbox" onChange={getvalue} id="java" value="java" />
//         <label htmlFor="java">java</label>
//         <h1>{skill.toString()}</h1>

//        <select onChange={(event)=>{setcity(event.target.value)}} defaultValue="Bihar">
//         <option value="Delhi">Delhi</option>
//         <option value="Bihar">Bihar</option>
//         <option value="Punjab">Punjab</option>
//         <option value="Kolkata">Kolkata</option>
//        </select>
//      <h1>State:{city}</h1>
//       </form>
//     </div>
//   )
// }

// export default App

//loop in react using map()

//nested loop-> both example

// import College from "./College"
// function App()
// {
//   let arrobj=[{
//      college:"IET",
//      id:1,
//      city:"Alwar",
//      website:"www.iet.com",
//      student:[
//       {
//         name:"vishal kumar",
//         course:"Mca",
//         roll:"38c2022"
//       },
//        {
//         name:"kushal kumar",
//         course:"Mba",
//         roll:"30m2022"
//       },
//        {
//         name:"shalini kumari",
//         course:"Bba",
//         roll:"40B2022"
//       }
//      ]
//   },
// {
//      college:"IIT",
//      id:2,
//      city:"Delhi",
//      website:"www.iit.com",
//      student:[
//       {
//         name:"vishal kumar",
//         course:"Mca",
//         roll:"38c2022"
//       },
//        {
//         name:"kushal kumar",
//         course:"Mba",
//         roll:"30m2022"
//       },
//        {
//         name:"shalini kumari",
//         course:"Bba",
//         roll:"40B2022"
//       }
//      ]
//   },
// {
//      college:"IBM",
//      id:3,
//      city:"Ahemdabad",
//      website:"www.ibm.com",
//      student:[
//       {
//         name:"vishal kumar",
//         course:"Mca",
//         roll:"38c2022"
//       },
//        {
//         name:"kushal kumar",
//         course:"Mba",
//         roll:"30m2022"
//       },
//        {
//         name:"shalini kumari",
//         course:"Bba",
//         roll:"40B2022"
//       }
//      ]
//   }]
//   return(
//     <div>
// {
//   arrobj.map((item)=>{
//     return(
//     <div key={item.id}>
//       {/* <h1>{item.college}</h1> */}
//       <College college={item} />
//     </div>
//     )
//   })
// }
//     </div>
//   )
// }

// export default App


//hooks-> hooks provide the  special feature of functional component that are used in your components

//useEffect-> useEffect can handle the side effect of a state props componets etc;

//first understand dependencies->

/*

useEffect(()=>{

  //it is run every time

  })
  useEffect(()=>{

  //it is run only one time

  },[])
  useEffect(()=>{

  //it is run only one state or props

  },[state1])
useEffect(()=>{

  //it is run every state or props

  },[state1,state2])
*/

// import { useEffect,useState } from "react";

// function App()
// {

//   let [count,setcount]=useState(0)
//   let [data,setdata]=useState(0)

//   function counter()
//   {
//     console.log(`this is counter function`)
//   }
//   //   counter()

//   // useEffect(()=>{
//   //   counter()
//   // datacount()
//   // })


//   // useEffect(()=>{
//   //   counter()
//   //     datacount()
//   // },[])


//   // useEffect(()=>{
//   //   counter()
//   //     datacount()
//   // },[data])


//   // useEffect(()=>{
//   //   counter()
//   //     datacount()
//   // },[count])


//   useEffect(()=>{
//     counter()
//       datacount()
//   },[data,count])


//   function datacount()
//   {
//     console.log(`this is datacount function`)
//   }
//   // datacount()
//   return(
//     <div>
//     <button onClick={()=>{
//       setcount(count++)
//     }}>Counter:<span style={{color:"red"}}>{count}</span></button>
//     <button onClick={()=>{
//       setdata(data++)
//     }}>Data:<span style={{color:"yellow"}}>{data}</span></button>
//     </div>
//   )
// }

// export default App

//using props

// import { useEffect, useState } from "react";
// import User from "./User";
// function App() {

//   let [count, setcount] = useState(0)
//   let [data, setdata] = useState(0)

//   return (
//     <div>

//       <button onClick={() => {setcount(count+1)}}>count <span>{count}</span> </button>
//       <button onClick={() => { setdata(data+1) }}>data: <span>{data}</span> </button>

//       <User propeffect={count} propeffect2={data} />

//     </div>
//   )
// }
// export default App


//useRef->using useref you can handle any html element ;

//import { useRef } from "react";

// function App()
// {
// let inputref=useRef(null)

// function handleinputref()
// {
//   console.log(inputref)
//   inputref.current.focus()
//   inputref.current.value="123"
// }


//   return(
//     <div>
//       <form action="" onSubmit={(event)=>{event.preventDefault()}}>
//         <input type="text" ref={inputref} />
//       <br /><br />

//       <button onClick={handleinputref}>submit</button>
//       </form>
//     </div>
//   )
// }
// export default App


//ex-2

// function App() {

//   let nameref = useRef()
//   let passref = useRef()
//   let emailref = useRef()

//   function name() {
//     nameref.current.focus()
//     nameref.current.placeholder = "Enter a Name.............."
//   }
//   function email() {
//     emailref.current.focus()
//     emailref.current.placeholder = "Enter a Email.............."
//   }
//   function password() {
//     passref.current.focus()
//     passref.current.placeholder = "Enter a Password..............."
//   }

//   function toogle()
//   {
//     if(nameref.current.style.display!='none')
//     {
//      nameref.current.style.display='none'
//     }
//     else{
//      nameref.current.style.display='inline'
//     }
//   }
//   return (
//     <div>
//       <input type="text" ref={nameref} />
//       <br /><br />
//       <input type="text" ref={passref} />
//       <br /><br />
//       <input type="text" ref={emailref} />
//       <br /><br />
//       <button onClick={name}>name</button>
//       <button onClick={password}>Password</button>
//       <button onClick={email}>email</button>
//       <button onClick={toogle}>ToggleName</button>

//     </div>
//   )
// }

// export default App

//uncontrolled component-> you can handle the data without using state 
//-> we can handle dom or useref

// import { useRef } from "react"
// function App() {

//   function handledata(event) {
//     event.preventDefault()
//     let user = document.querySelector("#name").value
//     let pass = document.querySelector("#pass").value
//      console.log(user, pass)
//   }

//   let Name = useRef(null)
//   let password = useRef(null)


//   function handledataref(event) {
//     event.preventDefault()
//     let user = Name.current.value;
//     let pass = password.current.value
//    console.log(Name,pass)
//   }

//   return (
//     <div>
//       <form action="" onSubmit={handledata}>

//         <input type="text" id="name" />

//         <br />
//         <br />
//         <input type="password" id="pass" />
//         <br /><br />
//         <button>submit</button>
//       </form>
//       <form action="" onSubmit={handledataref}>

//         <input type="text" ref={Name} />

//         <br />
//         <br />
//         <input type="password" ref={password} />
//       <button>submit</button>
//       </form>
//     </div>
//   )
// }

// export default App

//pass the functiion in child components
// import Student from "./Student"
// function App() {

//   function data(name) {
//     console.log(name)
//   }


//   return (
//     <div>
//       <Student namefun={data} name="vishal" />
//       <Student namefun={data} name="Sam" />
//       <Student namefun={data} name="ravi" />
//       <Student namefun={data} name="komal" />
//       <Student namefun={data} name="Aisha" />
//     </div>
//   )
// }

// export default App


//Digital Clock

// import Clock from "./Digitalclock"
// import { useState } from "react"
// function App()
// {

//   let [color,setcolor]=useState("red")

//   return(
//     <div>
//       <select onChange={(event)=>{setcolor(event.target.value)}}  >
//         <option value="pink">Pink</option>
//         <option value="purple">Purple</option>
//         <option value="green">Green</option>
//         <option value="aqua">Aqua</option>
//       </select>
//       <Clock colorprop={color} />
//     </div>
//   )
// }
// export default App

// import { useState } from "react"
// function App() {

//   let [inputvalue, setvalue] = useState("")

//   let [todoval, settodoval] = useState([])

//   function todo() {

//     if (inputvalue == "") {
//       alert("please enter task to add")
//     }
//     else {
//       settodoval([...todoval, inputvalue])
//       setvalue("")
//     }

//   }

//   function deletetodo(index) {
//     let newtodo = todoval.filter((_, i) => {
//       i != index
//     })
//     settodoval(newtodo)
//   }

//   return (

//     <div>
//       <h1>Hello EveryOne</h1>
//       <input type="text" value={inputvalue} onChange={(event) => { setvalue(event.target.value) }} />

//       <button style={{ cursor: "pointer" }} onClick={todo}>Add</button>
//       <ul>
//         {
//           todoval.map((tododata,index) => {
//             return (
//               <li key={index}>
//                 {tododata}
//                 {console.log(index)}
//                 <button onClick={()=>{deletetodo(index)}}>Delete</button>
//               </li>
//             )
//           })
//         }
//       </ul>
//     </div>
//   )
// }
// export default App


//forwardref-> the useRef is pass as props to another component is called forwardRef;
//it take exactly two args as a props -> props,ref in react 19 

// import { useRef, useState } from "react"
// // import User from "./User"

// function App()
// {
//   let nameref=useRef()
//   let [toogle,settoggle]=useState()
//   let [val,setval]=useState(true) 

//   function handle()
//   {
//     nameref.current.value="vishal"
//     nameref.current.focus()
//     nameref.current.style.background="green"
//   }

//   function togglehide()
//   {
//     if(nameref.current.style.display!="none")
//     {
//       nameref.current.style.display="none"
//     }
//     else{
//       nameref.current.style.display="inline"
//     }
//   }



//    return(
//     <>
//     <User name={nameref} handle={handle} hidedata={setval} togglehide={togglehide} val={val} />


//     </>
//   )
// }
// export default App


//useFormStatus -> it neccessary need to a form to handle data

// import { useFormStatus } from "react-dom"
// function App() {

//   async function setadat() {
//    await new Promise((res) => setInterval(res, 5000))
//   }



//   function Customer() {

//   let { pending } = useFormStatus()
//     return (
//       <>
//         <input type="text" />
//         <br />
//         <input type="text" />
//         <br />
//         <button disabled={pending}>{pending?"submitting....":"submit"}</button>
//       </>
//     )
//   }

//   return (
//     <>
//       <form action={setadat}>
//       <Customer />
//       </form>
//     </>
//   )
// }

// export default App

//useTransition()->useTransition has no need to a form .in version 18 it not support aync or await
// import { useTransition } from "react"
// function App()
// {
//   let [pending,settransition]=useTransition()

//   function handle()
//   {
//     settransition(async()=>{
//       await new Promise((res)=>setInterval(res,5000))
//     })
//   }

//   return(
//     <>
//     <form action={handle} >
//       <input type="text" />
//       <br />
//       <input type="text" />
//       <br />
//      {
//         pending?<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" height="100px" width="100px"alt="" />:null
//       }
//       <button disabled={pending} >submit</button>
//     </form>
//     </>
//   )
// }

// export default App

//Derived State -> the state derived from other state value or props in your components

// import { useState } from "react"
// function App() {
//   let [users, setusers] = useState([]);
//   let [user, setuser] = useState('');

//   function handle() {
//     setusers([...users, user])
//   }

//   let total = users.length
//   let last = users[users.length - 1]
//   let unique = [...new Set(users)].length
//   return (
//     <>
//       <input type="text" onChange={(event) => { setuser(event.target.value) }} />
//       <button onClick={handle}>click</button>
//       <h1>Total:{total}</h1>
//       <h1>last:{last}</h1>
//       <h1>unique:{unique}</h1>
//       {
//         users.map((item, index) => {
//           return (
//             <div key={index}>
//               <h1>{item}</h1>
//             </div>
//           )
//         })
//       }

//     </>
//   )
// }

// export default App


//lifting state

// function App()
// {
//   let [val,setval]=useState('')

//   return(
//     <>
//   <User  setval={setval}  />
//   <Display vals={val}  />
//     </>
//   )
// }

// export default App


//update objects in state 

// function App()
// {
//   let [emp,setemp]=useState({
//     name:"vishal",
//     id:101,
//     dsg:"trainner",
//     address:{
//       city:{
//          cityname:"Hajpur",
//          pin:844502
//       },
//       state:"Bihar"
//     }
//   })

//   function handle(cityname)
//   {
//     console.log(cityname)
//     emp.address.city.cityname=cityname
//     setemp({...emp,address:{...emp.address},city:{...emp.address.city.cityname,cityname } })
//   }

//   return(
//     <>
//     <input type="text" onChange={(event)=>{handle(event.target.value)}} />

//      <h1>Name:{emp.name}</h1>

//      <h1>Dsg:{emp.dsg}</h1>

//      <h1>Id:{emp.id}</h1>

//      <h1>State{emp.address.state}</h1>

//      <h1>City:{emp.address.city.cityname}</h1>
//     </>
//   )
// }
// export default App


//update array in state

// function App()
// {
//   let [emp,setemp]=useState(["vishal","kushal","anil",'arjun','pinky'])

//   function handle(name)
//   {
//     console.log(name)

//     emp[emp.length-1]=name;

//     console.log(emp)

//     setemp([...emp])

//   }

//   return(
//     <>
//     <input type="text" onChange={(event)=>{handle(event.target.value)}} />

//     {
//       emp.map((item,index)=>{
//         return(
//           <div key={index}>
//             <h1>{item}</h1>
//           </div>
//         )
//       })
//     }

//     </>
//   )
// }
// export default App

//update nested array in state

// function App()
// {
//   let [emp,setemp]=useState([{
//     name:"vishal",
//     id:101,
//     dsg:"trainner",
//     pin:844502,
//     state:"Bihar"    
//   }])

//   function handle(name)
//   {
//     console.log(name)
//     emp.dsg=name;
//     setemp([{...emp}])
//   }


//   return(
//     <>
//     <input type="text" onChange={(event)=>{handle(event.target.value)}} />

//     {
//       emp.map((item,index)=>{
//         return(
//           <div key={index}>
//             <h1>{item.dsg}</h1>
//           </div>
//         )
//       })
//     }

//   </>
// )
// }
// export default  App

//UseActionState->it is handle the form data it take three value variable,function,pending and two args
//function,undefined
// import { useActionState } from "react"

// export default function App()
// {
//   let [UserData,action,pending]=useActionState(handleform,undefined)



//  async  function handleform(previous,formdata)
//   {
//     await new Promise((res)=>setTimeout(res,5000))

//     let name=formdata.get("name");
//     let password=formdata.get("password")
//     // console.log(name,password)
//     if(name==''  || password=="")
//     {
//    alert("wtrite input field ")
//     }
//     else if(UserData && password)
//     {
//       return {message:"Data is Submitted",name,password}
//     }
//    else{
//     return {error:"Data is Invalid",name,password}
//    }
//   }
// return(
//   <>
//    <form action={action}>
//     <input defaultValue={UserData?.name} type="text" name="name"  />
//     <br />
//     <br />
//     <input defaultValue={UserData?.password} type="password" name="password" />
//     <br />
//     <br />
//     <button disabled={pending}>{pending?"Submitting.....":"submit"}</button>
//     {
//    UserData?.error && <span>{UserData?.error}</span>
//     }
//      {
//    UserData?.message && <span>{UserData?.message}</span>
//     }
//     <h1>Name:{UserData?.name}</h1>
//     <h2>Password:{UserData?.password}</h2>
//    </form>
//   </>
// )
// }

//Derived State->the state whose derived from other state value and props whithin your components
//->it is varible that not need to extra state;

//  function App()
//  {
//   let [users,setusers]=useState([]);
//   let [user,setuser]=useState('')

//   function handle()
//   {
//      setusers([...users,user])
//   }
// let total=users.length;
// let last=users[users.length-1]
// let unique=[...new Set(users)].length
//   return(
//     <>
//     <input type="text" onChange={(event)=>{setuser(event.target.value)}} />
//     <button onClick={handle}>click</button>

//     <h1>Total:{total}</h1>
//     <h1>Last:{last}</h1>
//     <h1>unique:{unique}</h1>

//     {
//       users.map((item,index)=>{
//         return(
//           <div key={index}>
//             <h1>{item}</h1>
//           </div>
//         )
//       })
//     }
//     </>
//   )
//  }
//  export default App

//make customhooks->
//update Array in state->

// function App()
// {
//   // let [data,setdata]=useState(["vishal","kushal","sunny","adarsh"])
//   let [data,setdata]=useState([{name:'vishal',age:20,city:{
//     citydetails:{
//       cityname:"patna"
//     }
//   }},{name:'kushal',age:90}])

//   // function handle(name)
//   // {

//   //  data[data.length-2]=name
//   //   setdata([...data]) 
//   // }

//   function handle(age)
//   {
//     data[data.length-2].age=age
//     setdata([...data])
//   }

//   return(
//     <>
//     <input type="text" onChange={(event)=>{handle(event.target.value)}} />
//    {
//     data.map((data,index)=>{
//       return(
//         <div key={index}>
//           <h1>Name:{data.name}</h1>
//           <h1>Age:{data.age}</h1>
//         </div>
//       )
//     })
//    }
//     </>
//   )
// }
// export default App

// //update object and nested in state

// function App()
// {
//   let [data,setdata]=useState({
//     name:"vishal",
//     dsg:"trainner",
//     salary:20000,
//     address:{
//       city:{
//         cityname:"patna"
//       },
//       state:"Bihar"
//     }
//   })

//   function handle(name)
//   {
//     // data.name=name;
//     // setdata({...data,name})
//     data.address.city.cityname=name;
//     setdata({...data,address:{...data.address},city:{...data.address.city.cityname,name}})
//   }

//   return(
//     <>
//     <input type="text" onChange={(event)=>{handle(event.target.value)}} />
//     <h1>Name:{data.name}</h1>
//     <h2>Degination:{data.dsg}</h2>
//     <h2>CityName:{data.address.city.cityname}</h2>
//     </>
//   )
// }

// export default App
// import {useFormStatus} from "react-dom"
// function App()
// {
//  async function handlesubmit()
//   {
//    await new Promise((res)=>{setTimeout(res,5000)})
//   }


// function Customer()
// {
//   let {pending}=useFormStatus()
//   return(
//     <>
//      <input type="text" />
//       <br />
//       <br />
//       <input type="text" />
//       <br /><br />
//       <button disabled={pending}>{pending?"submitting.....":"submit"}</button>
//     </>
//   )
// }

//   return(
//     <>
//     <form action={handlesubmit}>
//      <Customer />
//     </form>
//     </>
//   )
// }
// export default App

// import { useTransition } from "react"
// function App() {

//   let [pending,settransition]=useTransition()

//  async function handle()
//   {
//    settransition(async ()=>{
//     await new Promise((res)=>{setTimeout(res,5000)}); 
//    })

//   }

//   return (
//     <>
//       <form action={handle}>
//         <input type="text" />
//         <br />
//         <br />
//         <input type="text" />
//         <br /><br />
//         <button disabled={pending}>{pending ? "submitting....." : "submit"}</button>
//       </form>
//     </>
//   )
// }
// export default App

// import Usetoggle from "./useToggle"
// function App()
// {
// let [value,setvalue]=Usetoggle(true)
//   return(
//     <>
//     <h1>{value?"hello":null}</h1>
//     <button onClick={setvalue}>toggle</button>
//     </>
//   )
// }
// export default App 

// function App()
// {

//   let [data,setdata]=useState("amar")

//   return(
//     <>
//     <Contextapi.Provider value={data}>
//       <select defaultValue={data} onChange={(event)=>setdata(event.target.value)}>
//         <option value="vishal">vishal</option>
//         <option value="kushal">kushal</option>
//         <option value="yuvaraj">yuvraj</option>
//         <option value="bhairav">bhairav</option>
//       </select>
//       <Studentdata />
//     </Contextapi.Provider>
//     </>
//   )
// }
// export default App


// function App() {
//   let [input, setdata] = useState("")
//   let [todoval, settodoval] = useState([])

//   function handle() {
//     if (input == "") {
//       alert("enter some data")
//     }
//     else {
//       settodoval([...todoval, input])
//     }
//     setdata("")
//   }

//   function deletetodo(index) {
//     let newtodo = todoval.filter((_, i) => {
//       i != index

//     })
//     settodoval(newtodo)
//   }

//   return (
//     <>
//       <input type="text" value={input} onChange={(event) => { setdata(event.target.value) }} />

//       <br /><br />
//       <button onClick={handle}>Add</button>
//       <ul style={{display:"flex", justifyContent:"space-between"}}>
//         {
//         todoval.map((item, index) => {
//           return (

//             <li key={index}>
//               {item}
//               <button style={{marginLeft:"50px"}} onClick={() => { deletetodo(index) }}>Delete</button>
//             </li>


//           )
//         })
//       }
//       </ul>
//     </>
//   )
// }
// export default App

//useActionState()->it can handle form data . it can take 3 value (var,functionname,peending) and two args(functionname,undefined)

//  import { useActionState } from "react"

//  function App()
// {
//   let [data,action,pending]=useActionState(handle,undefined)

//  async function handle(previous,formdata)
//   {

//  await new Promise ((res)=>{
//   setInterval(res,5000)
//  })


//     let name=formdata.get("name");
//     let password=formdata.get("password");

//     if(name && password)
//     {
//         return {message:"Data is Succesfully Submitted",password,name}
//     }
//     else{
//         return {error:"Data is Invalid"}
//     }

//   }
//   return(
//     <>
//     <form action={action}>
//       <input type="text"  defaultValue={data?.name} name="name"/>
//       <br /><br />
//       <input type="password" defaultValue={data?.password} name="password" />
//       <br /><br />
//       <button disabled={pending}>{pending? "submitting...."+<img style={{background:"gray"}} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" height="20px" width="100px" />  :"submit"}</button>
//       {
//         data?.error && <span style={{color:"red"}}>{data?.error}</span>
//       }
//         {
//         data?.message && <span style={{color:"green"}}>{data?.message}</span>
//       }

//       <h1>Name : {data?.name}</h1>
//       <h1>Password : {data?.password}</h1>
//     </form>
//     </>
//   )
// }
// export default App


//handle checkbox and dropdown->
// function App() {
//   let [val, setval] = useState([])
//   let [city,setcity]=useState('vivek')

//   function handle(event) {
//     console.log(event.target.value, event.target.checked)

//     if (event.target.checked) {
//       setval([...val, event.target.value])
//     }
//     else {
//       setval([...val.filter((item) =>   item != event.target.value )])
//     }

//   }

//   return (
//     <>
//       <form   >

//         <input type="checkbox" value="js" id="js" onChange={handle} /><label htmlFor="js">js</label>
//         <input type="checkbox" value="java" id="java" onChange={handle}  /><label htmlFor="java">java</label>
//         <input type="checkbox" value="python" id="python" onChange={handle} /><label htmlFor="python">python</label>
//         <input type="checkbox" value="html" id="html" onChange={handle} /><label htmlFor="html">html</label>
//         <input type="checkbox" value="node" id="node" onChange={handle} /><label htmlFor="node">node</label>

//         <h1>{val.toString()}</h1>
//          <select defaultValue="vivek" onChange={(event)=>{setcity(event.target.value)}}>
//         <option value="vishal" >vishal</option>
//         <option value="kushal">kushal</option>
//         <option value="adarsh">adarsh</option>
//         <option value="vivek">vivek</option>
//         <option value="manish">manish</option>
//         <option value="ankush">ankush</option>
//       </select> 
//       </form>
//       <h1>{city}</h1>
//     </>
//   )
// }

// export default App

///handle radiobox->

// function App() {

//   let [gender, setgender] = useState('male')

//   return (
//     <>
//       <form onChange={(event) => { setgender(event.target.value) }}>
//         <input type="radio" id="male" value="male" checked={gender == "male"} name="gender" />
//         <label htmlFor="male">male</label>
//         <input type="radio" value="female" id="female" checked={gender == "female"} name="gender" />
//         <label htmlFor="female">female</label>
//         <h1>{gender}</h1>
//       </form>
//     </>
//   )
// }
// export default App
//nested loop-> one map function inside another in react is called nested loop

// function App()
// {
//   let CollegeData=[{
//     name:"IET",
//      id:101,
//      city:"Alwar",
//      website:"www.iet.com",
//      student:[
//       {
//         Stdname:"vishal kumar",
//         roll:"39c2022",
//         course:"bca"
//       },
//        {
//         Stdname:"shalini kumari",
//         roll:"34c2022",
//         course:"bba"
//       }
//       ,
//        {
//         Stdname:"kushal kumar",
//         roll:"38c2022",
//         course:"Mba"
//       }
//      ]
//   },

//   {
//     name:"IIT",
//      id:102,
//      city:"Delhi",
//      website:"www.iit.com",
//      student:[
//       {
//         Stdname:"vishal kumar",
//         roll:"39c2022",
//         course:"bca"
//       },
//        {
//         Stdname:"shalini kumari",
//         roll:"34c2022",
//         course:"bba"
//       }
//       ,
//        {
//         Stdname:"kushal kumar",
//         roll:"38c2022",
//         course:"Mba"
//       }
//      ]
//   },
//   {
//     name:"IIM",
//      id:103,
//      city:"Ahmdabad",
//      website:"www.iim.com",
//      student:[
//       {
//         Stdname:"vishal kumar",
//         roll:"39c2022",
//         course:"bca"
//       },
//        {
//         Stdname:"shalini kumari",
//         roll:"34c2022",
//         course:"bba"
//       }
//       ,
//        {
//         Stdname:"kushal kumar",
//         roll:"38c2022",
//         course:"Mba"
//       }
//      ]
//   }

// ]
todoval
//   return(
//     <>
//   {
//     CollegeData.map((college,index)=>{
//       return(
//        <div key={index}>
//          <ul>
//           <li>
//             <h1>CollegeName:{college.name}</h1>
//           </li>
//           <li>
//             <h3>CollegId:{college.id}</h3>
//           </li>
//           <li>
//             <h3>CollegeCity:{college.city}</h3>
//           </li>
//           <li>
//             <h3>CollegeWebsite:{college.website}</h3>
//           </li>
//          </ul>
//        {
//         college.student.map((student,index)=>{
//           return(
//             <div key={index}>
//               <ul>
//                 <li>
//                   <h3>{student.Stdname}</h3>
//                 </li>
//                   <li>
//                   <h3>{student.course}</h3>
//                 </li>
//                   <li>
//                   <h3>{student.roll}</h3>
//                 </li>

//               </ul>
//             </div>
//           )
//         })
//        }
//        </div>
//       )
//     })
//   }
//     </>
//   )
// }
// export default App

//useRef->it is used to handle any html element and dom

// function App()
// {
//   let user=useRef(null)

// function handle()
// {
//   user.current.focus();
//   user.current.value="12321"
//   user.current.style.background="green"
// }

//   return(
//     <>


//    <input type="text" ref={user}  />
//    <br />

//    <button onClick={handle}>click</button>

//     </>
//   )
// }

// export default App


//uncontrolled component->it can handle form whitout state

// function App() {
//   function handle(event) {
//     event.preventDefault()
//     let user = document.querySelector("#name").value
//     let Pass = document.querySelector("#password").value
//     console.log(user, Pass)
//   }
//   let userref=useRef(null)
//   let passref=useRef(null)

//   function handleform(event)
//   {
//     event.preventDefault()
//   let user=userref.current.value;
//   let  Pass=passref.current.value
//    console.log(user,Pass)
//   }
//   return (
//     <>
//       <form onSubmit={handle}>
//         <input type="text" id="name" />
//         <br />
//         <input type="password" id="password" />
//         <br />
//         <button>submit</button>
//       </form>
//       <form action="" onSubmit={handleform}>
//         <input type="text" ref={userref} />
//         <br />
//         <input type="password" ref={passref} />
//         <br />
//         <button>submitref</button>
//       </form>
//     </>
//   )
// }

// export default App



//useEffect->it is used to remove side effect of component ,state,props etc

/*
useEffect(()=>{
  //code
  },[state,props])

  Dependencies----

  useEffect(()=>{
    //write a code run every time
    })
     useEffect(()=>{
    //write a code run once
    },[])

    useEffect(()=>{
      
      //code run only single state or props

      },[state or props])

    useEffect(()=>{
      //code it run on this both state 
      },[state1,state2])

       useEffect(()=>{
      //code it run on this props both
      },[props1,props2])
*/


// function App()
// {
//   let [count,setcount]=useState(0)
//   let [data,setdata]=useState(0)

//   function abc()
//   {
//     console.log(`call abc function`)
//   }
//     function xyz()
//   {
//     console.log(`call xyz function`)

//   }

//   // useEffect(()=>{
//   //   abc()
//   //   xyz()
//   // })


//   // useEffect(()=>{
//   //   abc()
//   //   xyz()
//   // },[])

//   // useEffect(()=>{
//   //   abc()
//   //   xyz()
//   // },[count])

//   //   useEffect(()=>{
//   //   abc()
//   //   xyz()
//   // },[data])

//   //   useEffect(()=>{
//   //   abc()
//   //   xyz()
//   // },[count,data])


// // abc()
// // xyz()
// {
//   return(
//     <>
//     <button onClick={()=>{setcount(count++)}}>Count:{count}</button>
//     <button onClick={()=>{setdata(data++)}}>data:{data}</button>
//     </>
//   )
// }
// }

// export default App


// function App()
// {

//   let [data,setdata]=useState(0)
//   let [count,setcount]=useState(0)
//   return(
//     <>   
//     <button onClick={()=>{setcount(count++)}}>Count:{count}</button>
//     <button onClick={()=>{setdata(data++)}}>data:{data}</button>
//     <User data={data} count={count}/>
//     </>
//   )
// }
// export default App

//Clock using UseEffect

// function App()
// {
// let [date,setdate]=useState()

//   useEffect(()=>{setInterval(()=>{
//     setdate(  new Date().toLocaleTimeString())
//   },1000)},[]) 

// return(
//   <>
// {date}
//   </>
// )
// }
// export default App

// function App()
// {
//   let [time,settime]=useState(0)

//   useEffect(()=>{
//     setInterval(() => {
//       settime(  new Date().toLocaleDateString())
//     }, 1000);
//   })
//   return(
//     <>
//     {time}
//     </>
//   )
// }
// export default App


function App() {
  let [data, setdata] = useState('math')
  return (
    <>
      <select defaultValue="math" onChange={(event) => { setdata(event.target.value) }}>
        <option style={{color:"green"}} value="science">science</option>
        <option value="physics">physics</option>
        <option value="biology">biology</option>
        <option value="chemistry">chemistry</option>
        <option value="sanskreit">sanskrit</option>
        <option value="math">math</option>
      </select>
      <SubjectContext.Provider value={data}>
         <Color />      
      </SubjectContext.Provider>
    </>
  )
}
export default App
