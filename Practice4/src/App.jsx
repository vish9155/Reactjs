// // // // // // // // // // import { useRef, useState } from "react";
// // // // // // // // // // //import Propsdata from "./Propspass";

import { useEffect, useRef, useState } from "react";

// import { lazy, Suspense, use, useActionState, useEffect, useState } from "react"
// import Usetoggle from "./CustomHooks"
// import Subject from "./Subject"
// import { SubjectContext } from "./CreateContext"
// import { NavLink, Route, Routes } from "react-router"
// import Userlist from "./Userlist"
// import AddUser from "./Adduser"
// import EditUder from "./Edituser"

// // import { act, Suspense, use, useEffect, useReducer, useState, useTransition } from "react";
// // import { SubjectContext } from "./CreateContext";
// // import Subject from "./Subject";

// // // import { useEffect, useState } from "react"
// // // import Dispaly from "./Display"
// // // import Props from "./Propspass"



// // // // import { useEffect,useState } from "react"

// // // // // import { useEffect, useState } from "react";

// // // // // // import { useState } from "react"

// // // // // // // import { useState } from "react"

// // // // // // // // import { useEffect, useState } from "react";

// // // // // // // // // import { useRef, useState } from "react"


// // // // // // // // // // // export default function App()
// // // // // // // // // // // {

// // // // // // // // // // // let [dispaly,setdisplay]=useState(true)
// // // // // // // // // // //   return(
// // // // // // // // // // //     <>

// // // // // // // // // // //     <button onClick={()=>{setdisplay(!dispaly)}}>Toggle</button>
// // // // // // // // // // //     {/* <div>{dispaly?<h2>hello vishal</h1>:null}</div> */}

// // // // // // // // // // //     <h1>This is a App Component</h1>
// // // // // // // // // // //     <Propsdata values={dispaly} />
// // // // // // // // // // //     </>
// // // // // // // // // // //   )
// // // // // // // // // // // }


// // // // // // // // // // // export default function App()
// // // // // // // // // // // {


// // // // // // // // // // // let [count,setcount]=useState(0)
// // // // // // // // // // //   return(
// // // // // // // // // // //     <>


// // // // // // // // // // //     <button onClick={()=>{setcount(count-=1)}}>-</button>
// // // // // // // // // // //     <h1>Couter Value={count>0?count:0}</h1>
// // // // // // // // // // //     <button onClick={()=>{setcount(count+=1)}}>+</button>


// // // // // // // // // // //     <h1>This is a App Component</h1>
// // // // // // // // // // //     <Propsdata  />
// // // // // // // // // // //     </>
// // // // // // // // // // //   )
// // // // // // // // // // // }

// // // // // // // // // // // export default function App()
// // // // // // // // // // // {

// // // // // // // // // // // let [col,setcol]=useState("aqua")
// // // // // // // // // // //   return(
// // // // // // // // // // //     <>
// // // // // // // // // // //     <h1>Parent componet</h1>
// // // // // // // // // // //      <button onClick={()=>{setcol(col==='aqua'?"purple":aqua)}}>change color</button>
// // // // // // // // // // //     <Propsdata colors={col} />
// // // // // // // // // // //     </>
// // // // // // // // // // //   )
// // // // // // // // // // // }


// // // // // // // // // // // export default function App()
// // // // // // // // // // // {

// // // // // // // // // // //   let arr=['vishal','kushal','ajay','deepak','rama','shankar']

// // // // // // // // // // //   return(
// // // // // // // // // // //     <>

// // // // // // // // // // //     <Propsdata arr={arr} />
// // // // // // // // // // //     </>
// // // // // // // // // // //   )
// // // // // // // // // // //}


// // // // // // // // // // // export default function App()
// // // // // // // // // // // {

// // // // // // // // // // //   let [message,setmessage]=useState("hello world")

// // // // // // // // // // //   return(
// // // // // // // // // // //     <>

// // // // // // // // // // // <button onClick={()=>{setmessage(message==='hello world'?"welcome":"hello world")}}>change</button>

// // // // // // // // // // // {/* <h1>{message}</h1> */}
// // // // // // // // // // //     <Propsdata message={message} />
// // // // // // // // // // //     </>
// // // // // // // // // // //   )
// // // // // // // // // // // }


// // // // // // // // // // // export default function App()
// // // // // // // // // // // {
// // // // // // // // // // //   let [data,setdata]=useState(0)
// // // // // // // // // // //   let [counter,setcounter]=useState(0)

// // // // // // // // // // //   return(
// // // // // // // // // // //     <>
// // // // // // // // // // //     <button onClick={()=>{setcounter(counter+1)}}>counter</button>
// // // // // // // // // // //      <button onClick={()=>{setdata(data+1)}}>data</button>

// // // // // // // // // // //      <Propsdata data={data} counter={counter} />
// // // // // // // // // // //     </>
// // // // // // // // // // //   )
// // // // // // // // // // // }


// // // // // // // // // // // export default function App()
// // // // // // // // // // // {
// // // // // // // // // // //     let [name,setname]=useState('ayush')
// // // // // // // // // // //     let [age,setage]=useState('29')


// // // // // // // // // // //     return(
// // // // // // // // // // //         <>

// // // // // // // // // // //         <form>
// // // // // // // // // // //             <input type="text" onChange={(event)=>{setname(event.target.value)}} />
// // // // // // // // // // //             <br /><br />
// // // // // // // // // // //             <input type="text" onChange={(event)=>{setage(event.target.value)}} />
// // // // // // // // // // //             <br /><br />
// // // // // // // // // // //             <button>submit</button>
// // // // // // // // // // //         </form>
// // // // // // // // // // //          <div>
// // // // // // // // // // //          <h1>   Name:{name}</h1>
// // // // // // // // // // //           <h1>  Age:{age}</h1>
// // // // // // // // // // //          </div>
// // // // // // // // // // //         </>
// // // // // // // // // // //     )
// // // // // // // // // // // }


// // // // // // // // // // // export default function App()
// // // // // // // // // // // {
// // // // // // // // // // //     let [data,setdata]=useState({
// // // // // // // // // // //       name:'',
// // // // // // // // // // //       email:''
// // // // // // // // // // //     })

// // // // // // // // // // //     function handleform(e){

// // // // // // // // // // //    setdata({...data,[e.target.name]:e.target.value})

// // // // // // // // // // //     }


// // // // // // // // // // //     return(
// // // // // // // // // // //         <>

// // // // // // // // // // //         <form>
// // // // // // // // // // //             <input type="text" name="name" onChange={handleform}  />
// // // // // // // // // // //             <br /><br />
// // // // // // // // // // //             <input type="text" name="email" onChange={handleform}  />
// // // // // // // // // // //             <br /><br />
// // // // // // // // // // //             <button>submit</button>
// // // // // // // // // // //              <h1>   Name:{data.name}</h1>
// // // // // // // // // // //           <h1>  email:{data.email}</h1>
// // // // // // // // // // //         </form>
// // // // // // // // // // //          <div>

// // // // // // // // // // //          </div>
// // // // // // // // // // //         </>
// // // // // // // // // // //     )
// // // // // // // // // // // }


// // // // // // // // // // // export default function App()
// // // // // // // // // // // {
// // // // // // // // // // //   let [data,setdata]=useState({message:""})
// // // // // // // // // // //   function handle(e)
// // // // // // // // // // //   {
// // // // // // // // // // //    if(e.target.value.length<=100)
// // // // // // // // // // //    {
// // // // // // // // // // //     setdata({...data,[e.target.name]:e.target.value})
// // // // // // // // // // //    }
// // // // // // // // // // //   }
// // // // // // // // // // //   return(
// // // // // // // // // // //     <>
// // // // // // // // // // //     <textarea name="message" onChange={handle}></textarea>

// // // // // // // // // // //     <p>
// // // // // // // // // // //       {data.message}
// // // // // // // // // // //     </p>
// // // // // // // // // // //     </>

// // // // // // // // // // //   )
// // // // // // // // // // // }

// // // // // // // // // // // export default function App()
// // // // // // // // // // // {

// // // // // // // // // // //   let [gender,setgender]=useState("male")

// // // // // // // // // // //   let [drop,setdrop]=useState("react")

// // // // // // // // // // //   let [skill,setskill]=useState([])

// // // // // // // // // // //   function handle(e)
// // // // // // // // // // //   {

// // // // // // // // // // //     console.log(e.target.value,e.target.checked)

// // // // // // // // // // //     if(e.target.checked)
// // // // // // // // // // //     {
// // // // // // // // // // //       setskill([...skill,e.target.value])
// // // // // // // // // // //     }
// // // // // // // // // // //     else{
// // // // // // // // // // //       setskill(skill.filter((i)=>i !=e.target.value))
// // // // // // // // // // //     }


// // // // // // // // // // //   }

// // // // // // // // // // //   return(
// // // // // // // // // // //     <>
// // // // // // // // // // //     <form >

// // // // // // // // // // //       <input type="checkbox" name="java" onChange={handle} id="java" value="java" />
// // // // // // // // // // //       <label htmlFor="java">java</label>
// // // // // // // // // // //       <input type="checkbox" name="react" onChange={handle} id="react" value="react" />
// // // // // // // // // // //       <label htmlFor="react">react</label>
// // // // // // // // // // //       <input type="checkbox" name="node" onChange={handle} id="node" value="node" />
// // // // // // // // // // //       <label htmlFor="node">node</label>
// // // // // // // // // // //       <input type="checkbox" name="python" onChange={handle} id="python" value="python" />
// // // // // // // // // // //       <label htmlFor="python">python</label>
// // // // // // // // // // //       <input type="checkbox" name="mangodb" onChange={handle} id="mangodb" value="mangodb" />
// // // // // // // // // // //       <label htmlFor="mangodb">mangodb</label>

// // // // // // // // // // // <label htmlFor="male">male</label>
// // // // // // // // // // // <input type="radio" name="gender" checked={gender==='male'} value='male' onChange={(e)=>{setgender(e.target.value)}} id="male" />

// // // // // // // // // // // <label htmlFor="female">female</label>
// // // // // // // // // // // <input type="radio" name="gender" value='female' onChange={(e)=>{setgender(e.target.value)}} id="female" />   

// // // // // // // // // // // <select onChange={(e)=>{setdrop(e.target.value)}} defaultValue={"react"}>
// // // // // // // // // // //   <option value="js">js</option>
// // // // // // // // // // //   <option value="java">java</option>
// // // // // // // // // // //   <option value="node">node</option>
// // // // // // // // // // //   <option value="mangodb">mangodb</option>
// // // // // // // // // // //   <option value="react">react</option>
// // // // // // // // // // // </select>

// // // // // // // // // // //  </form>

// // // // // // // // // // // <div>
// // // // // // // // // // //   <h1>{skill.toString()}</h1>
// // // // // // // // // // //   <h1>{gender}</h1>
// // // // // // // // // // //   <h2>{drop}</h2>
// // // // // // // // // // // </div>
// // // // // // // // // // //     </>
// // // // // // // // // // //   )
// // // // // // // // // // // }

// // // // // // // // // // // export default function App() {
// // // // // // // // // // //   let [data, setdata] = useState({
// // // // // // // // // // //     name: '',
// // // // // // // // // // //     email: "",
// // // // // // // // // // //     age: "",
// // // // // // // // // // //     course: '',
// // // // // // // // // // //     phone: ""
// // // // // // // // // // //   })

// // // // // // // // // // //   function handledata(e) {
// // // // // // // // // // //     setdata({ ...data, [e.target.name]: e.target.value })
// // // // // // // // // // //   }
// // // // // // // // // // //   function send(e) {
// // // // // // // // // // //     e.preventDefault()
// // // // // // // // // // //     alert(`

// // // // // // // // // // // name:${data.name}
// // // // // // // // // // // age:${data.age}
// // // // // // // // // // // email:${data.email}
// // // // // // // // // // // course:${data.course}
// // // // // // // // // // // phone:${data.phone}

// // // // // // // // // // //     `)
// // // // // // // // // // //   }
// // // // // // // // // // //   return (
// // // // // // // // // // //     <>
// // // // // // // // // // //       <form onSubmit={send}>
// // // // // // // // // // //         <input type="text" name="name" onChange={handledata} /><br /><br />
// // // // // // // // // // //         <input type="text" name="email" onChange={handledata} /><br /><br />
// // // // // // // // // // //         <input type="text" name="age" onChange={handledata} /><br /><br />
// // // // // // // // // // //         <input type="text" name="course" onChange={handledata} /><br /><br />
// // // // // // // // // // //         <input type="text" name="phone" onChange={handledata} /><br /><br />
// // // // // // // // // // //         <button>submit</button>
// // // // // // // // // // //       </form>

// // // // // // // // // // //       <div>
// // // // // // // // // // //         <h1>Name:{data.name}</h1>
// // // // // // // // // // //         <h1>age:{data.age}</h1>
// // // // // // // // // // //         <h1>email:{data.email}</h1>
// // // // // // // // // // //         <h1>course:{data.course}</h1>
// // // // // // // // // // //         <h1>phone:{data.phone}</h1>
// // // // // // // // // // //       </div>

// // // // // // // // // // //     </>

// // // // // // // // // // //   )
// // // // // // // // // // // }

// // // // // // // // // // // export default function App()
// // // // // // // // // // // {
// // // // // // // // // // //   let nameref=useRef();
// // // // // // // // // // //   let emailref=useRef();

// // // // // // // // // // //   function handle(e)
// // // // // // // // // // //   {
// // // // // // // // // // //     e.preventDefault()
// // // // // // // // // // //     let uname=nameref.current.value;
// // // // // // // // // // //    // nameref=nameref.current.value
// // // // // // // // // // //     console.log(nameref)
// // // // // // // // // // //     let uemail=emailref.current.value;
// // // // // // // // // // //     console.log(uname,uemail)
// // // // // // // // // // //    alert(`
// // // // // // // // // // //     name: ${uname}
// // // // // // // // // // //     email: ${uemail}
// // // // // // // // // // //     `)
// // // // // // // // // // //   }

// // // // // // // // // // //   return(
// // // // // // // // // // //     <>
// // // // // // // // // // //   <form onSubmit={handle}>
// // // // // // // // // // //       <input type="text" ref={emailref}/><br /><br />

// // // // // // // // // // //     <input type="text" ref={nameref} />
// // // // // // // // // // //     <br />
// // // // // // // // // // //     <button >submit</button>

// // // // // // // // // // //   </form>
// // // // // // // // // // //     </>
// // // // // // // // // // //   )
// // // // // // // // // // // }

// // // // // // // // // // // export default  function App()
// // // // // // // // // // // {
// // // // // // // // // // //   let textref=useRef();

// // // // // // // // // // //   function handle()
// // // // // // // // // // //   {
// // // // // // // // // // //     alert(`${textref.current.value}`)
// // // // // // // // // // //   }

// // // // // // // // // // //   return(
// // // // // // // // // // //     <>
// // // // // // // // // // //     <textarea ref={textref}></textarea>
// // // // // // // // // // //     <button onClick={handle}>click</button>
// // // // // // // // // // //     </>
// // // // // // // // // // //   )
// // // // // // // // // // // }


// // // // // // // // // // export default  function App()
// // // // // // // // // // {

// // // // // // // // // // //let valref=useRef();
// // // // // // // // // // let valref2=useRef();

// // // // // // // // // // function handle2(e)
// // // // // // // // // // {
// // // // // // // // // //   e.preventDefault()
// // // // // // // // // //   console.log(valref2.current.value=e.target.value)


// // // // // // // // // // }

// // // // // // // // // // //console.log(valref.current.)

// // // // // // // // // // //  function handle(e)
// // // // // // // // // // //    {

// // // // // // // // // // //     console.log(valref.current.value=e.target.value)

// // // // // // // // // // //   }

// // // // // // // // // // //   function handle2(e)
// // // // // // // // // // //   {
// // // // // // // // // // //     console.log()
// // // // // // // // // // //   }

// // // // // // // // // //   return(
// // // // // // // // // //     <>
// // // // // // // // // // <form ref={valref2} onSubmit={handle2} >

// // // // // // // // // //    <input type="checkbox"  value={"java"} id="java" onChange={handle2} />
// // // // // // // // // //    <label htmlFor="java">java</label>

// // // // // // // // // //    <input type="checkbox" value={"node"} id="node" onChange={handle2} />
// // // // // // // // // //    <label htmlFor="node">node</label>


// // // // // // // // // //    <input type="checkbox" value={"react"} id="react" onChange={handle2} />
// // // // // // // // // //    <label htmlFor="react">react</label>


// // // // // // // // // //    <input type="checkbox" value={"python"} id="python" onChange={handle2} />
// // // // // // // // // //    <label htmlFor="python">python</label>


// // // // // // // // // //    <input type="checkbox" value={"mangodb"} id="mangodb" onChange={handle2} />
// // // // // // // // // //    <label htmlFor="mangodb">mangodb</label>

// // // // // // // // // //    <button>submit</button>
// // // // // // // // // // </form>

// // // // // // // // // //     {/* <select  onChange={handle}  ref={valref}>
// // // // // // // // // //       <option value="java">java</option>
// // // // // // // // // //       <option value="node">node</option>
// // // // // // // // // //       <option value="react">react</option>
// // // // // // // // // //       <option value="express">express</option>
// // // // // // // // // //     </select> */}
// // // // // // // // // //     </>
// // // // // // // // // //   )
// // // // // // // // // // }

// // // // // // // // // // export default function App() {
// // // // // // // // // //   let nameref = useRef()
// // // // // // // // // //   let emailref = useRef()
// // // // // // // // // //   let passref = useRef()

// // // // // // // // // //   function handle(e) {
// // // // // // // // // //     e.preventDefault()

// // // // // // // // // //     let name = nameref.current.value;
// // // // // // // // // //     let email = emailref.current.value
// // // // // // // // // //     let pass = passref.current.value;

// // // // // // // // // //     let regex = /[A-Z0-9]+$/i


// // // // // // // // // //     console.log(name);
// // // // // // // // // //     console.log(email)
// // // // // // // // // //   if(name=="" || pass=="" || email=="")
// // // // // // // // // //   {
// // // // // // // // // //     alert("Please fill the input fields")
// // // // // // // // // //   }
// // // // // // // // // //     else if (name.length > 6) {
// // // // // // // // // //       alert("Please enter only 6 character")
// // // // // // // // // //       return
// // // // // // // // // //     }
// // // // // // // // // //     else if (!regex.test(passref.current.value)) {
// // // // // // // // // //       alert("Please enter only number and character ")
// // // // // // // // // //       return
// // // // // // // // // //     }
// // // // // // // // // //     else if (!email.endsWith("@gmail.com")) {
// // // // // // // // // //       alert("Please enter valid email format ex- john@gmail.com")
// // // // // // // // // //       return
// // // // // // // // // //     }
// // // // // // // // // //     else {
// // // // // // // // // //       alert(`
// // // // // // // // // //         Data Is Successfully Submited 

// // // // // // // // // //         Name:    ${name}
// // // // // // // // // //         Email:   ${email}
// // // // // // // // // //         Password:${pass}

// // // // // // // // // //         `)
// // // // // // // // // //     }


// // // // // // // // // //   }

// // // // // // // // // //   return (
// // // // // // // // // //     <>
// // // // // // // // // //       <form onSubmit={handle}>
// // // // // // // // // //         <input type="text" placeholder="Name" ref={nameref} />
// // // // // // // // // //         <br />
// // // // // // // // // //         <br />
// // // // // // // // // //         <input type="text" placeholder="Email" ref={emailref} />
// // // // // // // // // //         <br />
// // // // // // // // // //         <br />
// // // // // // // // // //         <input type="text" placeholder="Password" ref={passref} />
// // // // // // // // // //         <br />
// // // // // // // // // //         <br />
// // // // // // // // // //         <button>submit</button>
// // // // // // // // // //       </form>
// // // // // // // // // //     </>
// // // // // // // // // //   )
// // // // // // // // // // }



// // // // // // // // // export default function App() {

// // // // // // // // //     let [count, setcounter] = useState(0)
// // // // // // // // //     let [single, setsingle] = useState()
// // // // // // // // //     let [theme, settheme] = useState(true)

// // // // // // // // //     let [num, setnum] = useState()
// // // // // // // // //     function handle(e) {
// // // // // // // // //         setsingle(e.target.value)
// // // // // // // // //     }

// // // // // // // // //     const styles = {


// // // // // // // // //         background: theme ? "#333" : "#fff",
// // // // // // // // //         color: theme ? "white" : "black"

// // // // // // // // //     }
// // // // // // // // // let [arr,setarr]=useState([101,12,13,14,15,16,17])
// // // // // // // // // function addelem()
// // // // // // // // // {
// // // // // // // // //     // let newarr=arr.unshift(10,20,30)
// // // // // // // // //     let newarr=[10]
// // // // // // // // //     setarr([...arr,newarr])
// // // // // // // // // }

// // // // // // // // //     return (
// // // // // // // // //         <>
// // // // // // // // //             <div className="tog" style={styles}>

// // // // // // // // //                 <button onClick={() => { settheme(!theme) }}>Toggle</button>
// // // // // // // // //                 <button onClick={() => { setcounter(count++) }}>+</button>
// // // // // // // // //                 <button onClick={() => { setcounter(count--) }}>-</button>
// // // // // // // // //                 <button onClick={() => { setcounter("") }}>Reset</button>
// // // // // // // // //                 <h2 >Couter:{count > 0 ? count : '0'}</h2>

// // // // // // // // //                 <form >
// // // // // // // // //                     <input type="text" onChange={handle} />

// // // // // // // // //                 </form>

// // // // // // // // //                 <h1 >Name:{single}</h1>

// // // // // // // // //                 <input type="number" onChange={(e)=>{setnum(e.target.value)}} />
// // // // // // // // //                 <button onClick={()=>{setnum(num*2)}}>click for double</button>
// // // // // // // // //                Double of input value is :{num}
// // // // // // // // //                <div>

// // // // // // // // //                <button onClick={addelem} >click</button>

// // // // // // // // //                 {
// // // // // // // // //                     arr.map((item,index)=>(
// // // // // // // // //                         <div key={index}>

// // // // // // // // //                             {`${index}:${item}`}
// // // // // // // // //                         </div>
// // // // // // // // //                     ))
// // // // // // // // //                 }
// // // // // // // // //                </div>
// // // // // // // // //             </div>
// // // // // // // // //         </>
// // // // // // // // //     )
// // // // // // // // // }

// // // // // // // // export default function App() {

// // // // // // // //     let [val, setval] = useState('');
// // // // // // // //     let [todo, settodo] = useState(() => {
// // // // // // // //         let saved = JSON.parse(localStorage.getItem("todoapp"));
// // // // // // // //         return saved ? saved : []
// // // // // // // //     });


// // // // // // // //     useEffect(() => {
// // // // // // // //         localStorage.setItem("todoapp", JSON.stringify(todo))
// // // // // // // //     }, [todo])

// // // // // // // //     function add() {
// // // // // // // //         console.log(val)

// // // // // // // //         if (val == '') {
// // // // // // // //             alert("please write something")
// // // // // // // //         }
// // // // // // // //         else {
// // // // // // // //             settodo([...todo, { done: false, text: val }])
// // // // // // // //         }

// // // // // // // //     }

// // // // // // // //     function deletetodo(index)
// // // // // // // //     {
// // // // // // // //         settodo(todo.filter((_,i)=>i!=index))
// // // // // // // //     }

// // // // // // // //     function toggle(index) {
// // // // // // // //         let newtodo = [...todo]
// // // // // // // //         newtodo[index].done = !newtodo[index].done
// // // // // // // //         settodo(newtodo)


// // // // // // // //     }

// // // // // // // //     return (
// // // // // // // //         <>

// // // // // // // //             <input type="text" onChange={(e) => { setval(e.target.value) }} />
// // // // // // // //             <button onClick={add}>add</button>

// // // // // // // //             <ul>
// // // // // // // //                 {
// // // // // // // //                     todo.map((item, index) => (
// // // // // // // //                         <li key={index} className={item.done ? 'checked' : ''} onClick={() => { toggle(index) }}>
// // // // // // // //                             {item.text}

// // // // // // // //              <button onClick={(e)=>{
// // // // // // // //                 deletetodo(index)
// // // // // // // //                  e.stopPropagation()
// // // // // // // //              }}>delete</button>

// // // // // // // //                         </li>
// // // // // // // //                     ))
// // // // // // // //                 }
// // // // // // // //             </ul>

// // // // // // // //         </>
// // // // // // // //     )

// // // // // // // // export default function App()
// // // // // // // // {

// // // // // // // //     let [naum,setnum]=useState()

// // // // // // // //     function generaterandomnum()
// // // // // // // //     {
// // // // // // // //         let ran=Math.floor(Math.random()*10)

// // // // // // // //         setnum(ran)

// // // // // // // //     }

// // // // // // // //     return(
// // // // // // // //         <>
// // // // // // // //         <button onClick={generaterandomnum}>click</button>
// // // // // // // //         <h2>{naum}</h2>
// // // // // // // //         </>
// // // // // // // //     )
// // // // // // // // }


// // // // // // // // character counter

// // // // // // // export default function App()
// // // // // // // {
// // // // // // //     let [text,settext]=useState('');
// // // // // // //     function handle(e)
// // // // // // //     {
// // // // // // //       settext(e.target.value)
// // // // // // //     }
// // // // // // //     return(
// // // // // // //         <>
// // // // // // //         <textarea rows={'10'} cols={'50'} value={text} onChange={handle}></textarea>
// // // // // // //     <p>{text.length}</p>
// // // // // // //         </>
// // // // // // //     )
// // // // // // // }

// // // // // // export default function App() {

// // // // // //     let [obj, setobj] = useState({
// // // // // //         name: 'vishal',
// // // // // //         age: 20,
// // // // // //         address: {
// // // // // //             city: "hajipur",
// // // // // //             adress1: {
// // // // // //                 pin: "844502"
// // // // // //                 ,
// // // // // //                 statename: {
// // // // // //                     state: "bihar"
// // // // // //                 }
// // // // // //             }
// // // // // //         }
// // // // // //     })

// // // // // //     function handle(names) {
// // // // // //         obj.address.adress1.pin= names
// // // // // //         // console.log(names)
// // // // // //         console.log(obj)

// // // // // //         setobj({...obj,address:{...obj.address,adress1:{...obj.address.adress1},names}})

// // // // // //         // setobj({...obj,address:{...obj.address,names}})
// // // // // //         // setobj({ ...obj })



// // // // // //     }

// // // // // //     return (
// // // // // //         <>
// // // // // //             <input type="text" onChange={(e) => { handle(e.target.value) }} />
// // // // // //             <h1>Name:{obj.name}</h1>
// // // // // //             <h2>Age:{obj.age}</h2>
// // // // // //             <h3>City:{obj.address.city}</h3>
// // // // // //             <h3>pin:{obj.address.adress1.pin}</h3>
// // // // // //             <h3>state:{obj.address.adress1.statename.state}</h3>
// // // // // //         </>
// // // // // //     )
// // // // // // }

// // // // // // export default function App()
// // // // // // {
// // // // // //     let [arr,setarr]=useState(['vishal',84,'patna'])
// // // // // //     console.log(arr)
// // // // // //     function handle(name)
// // // // // //     {
// // // // // //        arr[arr.length-1]=name
// // // // // //         console.log(arr)
// // // // // //         setarr([...arr])
// // // // // //     }
// // // // // //    return(
// // // // // //      <>
// // // // // //     <input type="text" onChange={(event)=>{handle(event.target.value)}} />
// // // // // //     <div>
// // // // // //         {
// // // // // //             arr.map((item)=>(
// // // // // //                 <div>
// // // // // //                     {item}
// // // // // //                 </div>
// // // // // //             ))
// // // // // //         }
// // // // // //     </div>
// // // // // //     </>
// // // // // //    )
// // // // // // }

// // // // // // export default function App()
// // // // // // {
// // // // // //     let [arr,setarr]=useState([{name:"vishal",age:20},{name:"kushal",age:56},{name:"vishal",age:34}])
// // // // // //     console.log(arr)
// // // // // //     function handle(name)
// // // // // //     {
// // // // // //        arr[arr.length-1].age=name
// // // // // //         console.log(arr)
// // // // // //         setarr([...arr])
// // // // // //     }
// // // // // //    return(
// // // // // //      <>
// // // // // //     <input type="text" onChange={(event)=>{handle(event.target.value)}} />
// // // // // //     <div>
// // // // // //         {
// // // // // //             arr.map((item)=>(
// // // // // //                 <div>
// // // // // //                     {item.name}
// // // // // //                     <h3>{item.age}</h3>
// // // // // //                 </div>
// // // // // //             ))
// // // // // //         }
// // // // // //     </div>
// // // // // //     </>
// // // // // //    )
// // // // // // }

// // // // // export default function App()
// // // // // {
// // // // //     let [data,setdata]=useState([])
// // // // // useEffect(()=>{

// // // // //       getadat()

// // // // // },[])

// // // // // async function getadat()
// // // // // {
// // // // //       let fetchdata=await fetch("https://dummyjson.com/products")
// // // // //         fetchdata=await fetchdata.json()
// // // // //         console.log(fetchdata);
// // // // //         console.log(fetchdata.products)
// // // // //         setdata(fetchdata.products)
// // // // // }

// // // // //     return(
// // // // //         <>
// // // // //         <div>
// // // // //        {
// // // // //         data.map((item,index)=>(
// // // // //             <div key={index}>
// // // // //           <h1>{item.brand}</h1>
// // // // //             </div>
// // // // //         ))
// // // // //        }
// // // // //         </div>
// // // // //         </>
// // // // //     )
// // // // // }

// // // // // export default function App()
// // // // // {
// // // // //     let [data,setdata]=useState(0);

// // // // //     useEffect(()=>{
// // // // //       datachange()
// // // // //     },[data])
// // // // // function datachange()
// // // // // {
// // // // //       document.title=`count ${data} clicked`
// // // // // }


// // // // //     return(
// // // // //         <>
// // // // //          <button onClick={()=>{setdata(data+1)}}>click</button>

// // // // //         </>
// // // // //     )
// // // // // }

// // // // // export default function App()
// // // // // {

// // // // //     let [dat,setdat]=useState()
// // // // //     useEffect(()=>{
// // // // //      let timer=setInterval(() => {
// // // // //         //     let date=new Date().toLocaleTimeString()
// // // // //         //   setdat(date)
// // // // //         //   console.log(date)
// // // // //         console.log("jevan")

// // // // //         }, 1000);
// // // // //            return ()=>clearInterval(timer)
// // // // //     },[])

// // // // //     return(
// // // // //         <>
// // // // //         <p>hello {dat}</p>
// // // // //         </>
// // // // //     )
// // // // // }

// // // // export default function App()
// // // // {
// // // //     let [timer,settimer]=useState(10 )

// // // //     useEffect(()=>{
// // // //         if(timer>0)
// // // //         {
// // // //             let time=setInterval(() => {
// // // //                 settimer(timer-1)
// // // //             }, 1000);
// // // //               return ()=>clearInterval(time)
// // // //         }

// // // //     },[timer])
// // // //     return(
// // // //         <>
// // // //     <p>coutdown:{timer}</p>
// // // //         </>
// // // //     )
// // // // }

// // // // export default function App()
// // // // {
// // // //     let [data,setdata]=useState(true)

// // // //     return(
// // // //         <>
// // // //         <Dispaly display={setdata} data={data} />
// // // //         <Props data={data} />
// // // //         </>
// // // //     )


// // // // }

// // // export default function App()
// // // {
// // //     let [data,setdata]=useState(0)

// // //     function abc()
// // //     {
// // //         console.log('hello abc')
// // //     }
// // //     function abd()
// // //     {
// // //         console.log('hello abd')
// // //     }
// // //     // abc()
// // //     // abd()

// // //     // useEffect(()=>{
// // //     //     abc()
// // //     //     abd()
// // //     // },[])

// // //     // useEffect(()=>{
// // //     //     abc()
// // //     //     abd()
// // //     // },[data])

// // //     // useEffect(()=>{
// // //     //     return ()=>{
// // //     //         abc()
// // //     //         abd()
// // //     //     }
// // //     // },[])

// // //     useEffect(()=>{
// // //         abc()
// // //         abd()
// // //     })

// // // return(
// // //     <>
// // //     <button onClick={()=>{setdata(data+1)}}>count{data}</button>
// // //     </>
// // // )
// // // }


// // // export default function App()
// // // {
// // //     let [user,setuser]=useState('');
// // //     let [users,setusers]=useState([])

// // //     function handle()
// // //     {

// // //     setusers([...users,user])

// // //     }

// // //     let total=users.length;
// // //     let last=users[users.length-1]

// // //     let unique=[...new Set(users)].length

// // //     return(
// // //         <>
// // //         <h1>Total:{total}</h1>
// // //         <h1>Last:{last}</h1>
// // //         <h1>Unique:{unique}</h1>
// // //         <input type="text" onChange={(e)=>setuser(e.target.value)} />
// // //         <button onClick={handle}>click</button>
// // //         <div>
// // //             {
// // //                 users.map((item,index)=>(
// // //                     <div key={index}>
// // //                         <h1>{item}</h1>
// // //                     </div>
// // //                 ))
// // //             }
// // //         </div>
// // //         </>
// // //     )

// // // }


// // // let emptydata = {
// // //     name: '',
// // //     email: '',
// // //     age: '',
// // //     email: '',
// // //     city: '',
// // // }

// // // function getdata(data, action) {
// // //     return { ...data, [action.type]: action.val }
// // // }

// // // export default function App() {

// // //     let [state, dispatch] = useReducer(getdata,emptydata)



// // //     return (
// // //         <>

// // //             <form >
// // //                 <input type="text" onChange={(e) => { dispatch({ type: 'name', val: e.target.value }) }} /><br /><br />
// // //                 <input type="text" onChange={(e) => { dispatch({ type: 'email', val: e.target.value }) }} /><br /><br />
// // //                 <input type="text" onChange={(e) => { dispatch({ type: 'age', val: e.target.value }) }} /><br /><br />
// // //                 <input type="text" onChange={(e) => { dispatch({ type: 'city', val: e.target.value }) }} /><br /><br />
// // //                 <button>submit</button>
// // //             </form>

// // //        <h2>Name:{state.name}</h2>
// // //         <h2>Email:{state.email}</h2>
// // //         <h2>Age:{state.age}</h2>
// // //         <h2>City:{state.city}</h2>
// // //         </>
// // //     )
// // // }
// // // let styles={
// // //     background:"black"

// // // }


// // export default function App()
// // {
// //     let [subject,setsubject]=useState("math")

// //     return(
// //         <>
// //        <SubjectContext.Provider value={subject}>
// //         <select onChange={(e)=>{setsubject(e.target.value)}} defaultValue={"math"}>
// //             <option value="physic">physic</option>
// //             <option value="bio">bio</option>
// //             <option value="chem">chem</option>
// //             <option value="math">math</option>
// //         </select>

// // <Subject />

// //        </SubjectContext.Provider >
// //         </>
// //     )
// // }

// // let getdata=async()=>await fetch("https://dummyjson.com/products").then((res)=>res.json())

// // // function getdata()
// // // {
// // //     return new Promise((resolve,reject)=>{
// // //         let resp= fetch("https://dummyjson.com/products").then((res)=>res.json())
// // //         resolve(200)

// // //     })
// // // }

// // console.log(getdata())

// // let resource=getdata()

// // export default function App()
// // {

// //     return(
// //         <>
// //         <h1>Hello</h1>

// //         <Suspense fallback={<h1>Loading.....</h1>}><Userdataget resource={resource} /></Suspense>



// //         </>
// //     )
// // }

// // export function Userdataget({resource})
// // {
// //     let data=use(resource)
// //     console.log(data.products)

// //     return(
// //         <>
// //         <h1>UserComponent</h1>
// //         <div>
// //             {
// //                 data.products.map((item)=>(
// //                     <div key={item.id}>
// //                         <h1>{item.brand}</h1>
// //                     </div>
// //                 ))
// //             }
// //         </div>
// //         </>
// //     )
// // }

// // let Subject=lazy(()=>import( './Subject'))
// // export default function App()
// // {
// //     let [load,setload]=useState(false)

// //     return(
// //         <>
// //         <button onClick={()=>{setload(!load)}}>Load</button>
// //         <h1>{load?<Suspense fallback={<h1>Loading....</h1>}><Subject /></Suspense>:"not fount"}</h1>
// //         </>
// //     )
// // }


// // export default function App() {

// //     let [data, action, pending] = useActionState(getdata);

// //     async function getdata(prev, formdata) {

// //         await new Promise((res) => {
// //             setTimeout(res, 3000)
// //         })

// //         let name = formdata.get("name");
// //         let Age = formdata.get("age");
// //         let pass = formdata.get("password");
// //         let email = formdata.get("email")
// //         let regex = /[A-Z0-9]+$/i;

// //         if (name == '' || pass == '' || Age == "" || email == "") {
// //             alert("Please Enter a Form Field");
// //         }
// //         else if (name.length > 6) {
// //             return { error1: "Please enter only character", name, email, Age, pass }
// //         }
// //         else if (!regex.test(pass)) {
// //             return { error12: "Please enter only number and character", name, email, Age, pass }
// //         }
// //         else if (!email.endsWith("@gmail.com")) {
// //             return { error3: "please enter valid email id ex-john@gmail.com", name, email, Age, pass }
// //         }
// //         else if (Age < 18) {
// //             return { error4: "You are under 18. You can't fill the form", name, email, Age, pass }
// //         }
// //         else {
// //             return { message: "Data Is Successfully Submitted", name, email, Age, pass }
// //         }
// //         console.log(name, Age);



// //     }

// //     return (
// //         <>
// //             <form action={action} >
// //                 <input type="text" name="name" /><br /><br />
// //                 <span style={{ color: "red" }}>{data?.error1}</span>
// //                 <input type="text" name="age" /><br /><br />
// //                 <span style={{ color: "red" }}>{data?.error12}</span>
// //                 <input type="text" name="email" /><br /><br />
// //                 <span style={{ color: "red" }}>{data?.error3}</span>
// //                 <input type="text" name="password" /><br /><br />
// //                 <span style={{ color: "red" }}>{data?.error4}</span>
// //                 <button disabled={pending || data?.error1 || data?.error12 || data?.error3 || data?.error4}>{pending ? "submitting" : "submit"}</button>
// //                 <span style={{ color: "green" }}>{data?.message}</span>

// //             </form>

// //             <span>
// //                 <h2>Name:{data?.name}</h2>
// //                 <h2>Age:{data?.Age}</h2>
// //                 <h2>Email:{data?.email}</h2>
// //                 <h2>Password:{data?.pass}</h2>
// //             </span>

// //         </>
// //     )
// // }


// // export default function App()
// // {

// //     let [value,setvalue]=Usetoggle(true)

// //     return(
// //         <>
// //         <button onClick={()=>{setvalue(!value)}}>toggle</button>
// //         <h1>{value?"hello":null}</h1>
// //         </>
// //     )
// // }



// // export default function App()
// // {
// //     let [subject,setsubject]=useState("math")

// //     return(
// //         <>
// //        <SubjectContext.Provider value={subject}>
// //         <select onChange={(e)=>{setsubject(e.target.value)}} defaultValue={"math"}>
// //             <option value="physic">physic</option>
// //             <option value="bio">bio</option>
// //             <option value="chem">chem</option>
// //             <option value="math">math</option>
// //         </select>

// // <Subject />

// //        </SubjectContext.Provider >
// //         </>
// //     )
// // }


// // export default function App() {

// //     let [datafetch, setdata] = useState([])

// //     useEffect(() => {
// //         getdata()
// //     }, [])
// //     console.log(datafetch)
// //     async function getdata() {

// //         let data = await fetch('https://dummyjson.com/products')
// //         data = await data.json()
// //         console.log(data)
// //         setdata(data.products)
// //     }

// //     console.log(datafetch)
// //     return (
// //         <>
// //             <div>
// //               {
// //                datafetch.length>0 && datafetch.map((item)=>(
// //                     <div>
// //                         <h1>{item.brand}</h1>
// //                     </div>
// //                 ))
// //               }
// //             </div>
// //         </>
// //     )
// // }

// export default function App() {
//     return (
//         <>

//             <Routes>
//                 <Route path="/" element={<Userlist />}>
//                 </Route>
//                 <Route path="/addUser" element={<AddUser />}>
//                 </Route>
//                 <Route path="/edit/:id" element={<EditUder />}>
//                 </Route>
//             </Routes>

//         </>
//     )
// }


export default function App() {
    let [data, setdata] = useState()
    let [display, setdisplay] = useState([])
    let [currentdata,setcurrent]=useState([])
    let [temp,settemp]=useState([])
    
    async function getdata(cityname) {

        let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=909e51cb6bc349d4bfa135006252807&q=${cityname}&aqi=yes`)
        return await response.json();
      
        console.log(respjson)

    }

    async function handle() {

        let inputvalue = data

        let respdata = await getdata(inputvalue)
        console.log(respdata)
        console.log(respdata.location)
        console.log(respdata.current)
        setdisplay(respdata.location)
        settemp(respdata.current)
       setcurrent(respdata.current.condition)
    }

  

    return (
        <>
            <div className="wheather">
                <div className="containner">
                    <input type="text" onChange={(e) => { setdata(e.target.value) }} />
                    <button onClick={handle}>search</button>
                    <div className="detail">
                        <h1 className="cityname">CityName:{display.name}</h1>
                        <h2 className="region">State:{display.region}</h2>
                        <h2 >Country:{display.country}</h2>
                        <h2 className="localtime">LocalTime:{display.localtime}</h2>
                        <h2>Condition:{currentdata.text} <img src={currentdata.icon} alt="" /></h2>
                        <h1 className="temprature">temp:{temp.temp_c}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}