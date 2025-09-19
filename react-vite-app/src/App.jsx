//react-> a react is a liabrary of js that develope by facebook it is using to build a fronted page;
//      it make a single page application(spa) its fast to works and relode browser


// import { useActionState, useState } from "react"
// import useToggle from "./useToggle"


// import Name, { Animals,  Fru, God, Newcourse, Vegitable } from "./Header";
// function App()
// {
//   return(
//     <div>
//       <h1>List of Name's</h1>
//       <Name />
//       <h1>List of Fruit's</h1>
//       <Fru />
//       <h1>List of Vegitable's</h1>
//       <Vegitable />
//       <h1>List of Animal's</h1>
//       <Animals />
//       <h1>List of Course's</h1>
//      <Newcourse />
//       <h1>List of God</h1>
//       <God />
//     </div>
//   )
// }





//2.method create component in app.jsx file

// function App()
// {
// return(
//   <div>
//   <College />
//   <School />
//   </div>
// )
// }
// export default App


// function College()
// {
//   return(
//     <div>
//       <ul>
//         <li>Vibrm</li>
//         <li>L.s Mishra</li>
//         <li>Rds college</li>
//       </ul>

//     </div>
//   )
// }

// function School()
// {
//   return(
//     <div>
//       <ul>
//         <li>B.D publis</li>
//         <li>Osis school</li>
//         <li>Dps</li>
//       </ul>

//     </div>
//   )
// }
//---------------------------------------------------------------------------------------------------


// export default App


// import Fruits, { Veg } from "./Message"

// function App()
// {
//   return
//   (
//     <div>
//       <h1>List of Fruits</h1>
//       <Fruits />
//       <h1>List of Vegitable</h1>
//       <Veg />
//     </div>
//   )
// }

// export default App

//---------------------------------------------------------------------------------------------


//jsx->it is stand for Node syntax Extension or js xml;
//-> it allow the user write html markup code in js file
// react==>html+js

//ex->


// function App() {
//   const name = "vishal";
//   let a = 90;
//   let b = 30;
//   // const name = prompt("enter a name");
//   // let a = parseInt(prompt("enter a"));
//   // let b = parseInt(prompt("enter b"))
//   function fun() {
//     alert("The success full run jsx ")
//   }
//   return (
//     <div>
//       <h1>Name is:{name}</h1>
//       <h1>a is:{a}</h1>
//       <h1>b is :{b}</h1>
//       <h1>Sum is: {a + b}</h1>
//       <h1>sub is: {a - b}</h1>
//       <h1>Mul is : {a * b}</h1>
//       <h1>Div is : {a / b}</h1>
//       <h1>Modulas is : {a % b}</h1>
//       <button onClick={() => { alert("hello") }}>click</button>
//       <button onClick={fun}>Click me</button>

//     </div>
//   )
// }

// export default App

//-----------------------------------------------------------------------------------------------------------

//practice question 1.


// function App()
// {
//   return(
//     <div>

//     <h1>Vishal Kumar Todo</h1>
//     <img src="../public/dog.jpg" alt="This is Dog image" height="300px" width="300px" title="dog" />
//     <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit qui voluptatem laudantium neque libero quis optio natus eum unde expedita dignissimos, adipisci consequuntur nobis beatae! Delectus quod commodi minima.</p>
//     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt repudiandae, porro eum distinctio possimus dolores, sapiente eius sint mollitia dolorem aut similique cum nemo. Aliquam, hic sint! Dolor, repudiandae quibusdam.
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, officiis nesciunt? Sint voluptatem officiis rerum hic ratione. Exercitationem, magni quod!</p>
//     </p>

//     <h1>Important Fact's</h1>
//     <ul>
//       <li>Danger's</li>
//       <li>Not sleep</li>
//       <li>Not cryo

//       </li>
//     </ul>
//     {/* <button onClick={()=>{document.writeln("successfully run todo")}}>Click</button> */}
//     <button onClick={()=>{alert("successfully run todo")}}>Click</button>
//     </div>
//   )
// }

// export default App
//-----------------------------------------------------------------------------------------------------------

//jsx with curly braces

//1.with variable;

// function App() {
//     // const name =null
//     const name="vivek"
//     let a = 90;
//     let b = 10;
//     function fruit()
//     {
//         alert("List of Fruits:\nApple\nBanana\nPapaya\nMango\nGuava")
//     }
//     return (
//         <div>
//             <h1>hello</h1>
//             <h1>Name is: {name?name:"User not found"}</h1>
//             <h1>a is: {a}</h1>
//             <h1>b is: {b}</h1>
//             <h1>sum is:{a + b}</h1>
//             <h1>sub is:{a - b}</h1>
//             <h1>mul is:{a * b}</h1>
//             <h1>div is:{a / b}</h1>
//             <button onClick={fruit}>click me</button>
//         </div>
//     )
// }

// export default App


//example2.
// function App()
// {
//     let a=10;
//     let b=20

//     function fruit(name)
//     {
//         alert(name)
//     }
//     function cal(x,y,op)
//     {
//      if(op=="+")
//      {
//        alert(x+y)
//      }
//       else if(op=="-")
//      {
//         alert (x-y)
//      }
//       else if(op=="*")
//      {
//         alert (x*y)
//      }
//       else if(op=="/")
//      {
//         alert( x/y)
//      }
//      else{
//         alert("error")
//      }
//     }



// return(
//     <div>
//         <h1>USer Sum is: {a+b}</h1>

//         {/* <h1>first mehthod</h1> */}
//         {/* <h1>{cal(10,200,"-")}</h1>
//          <h1>{cal(10,200,"+")}</h1>
//           <h1>{cal(10,200,"/")}</h1>
//            <h1>{cal(10,200,"*")}</h1> */}
//       <h1>Click Here Get Fruit Name </h1>
//       <button onClick={()=>{
//         fruit("apple")
//       }}>click me</button>


//       <h2>Calculator Opertation click below button</h2>
//       <button onClick={()=>{
//         cal(10,200,"+");
//         cal(10,5,"-")
//       }}>click me</button>

//     </div>
// )
// }
// export default App
//-------------------------------------------------------------------------------------------------------------------

//jsx with obj and array

// function App() {
//     let obj = {
//         name: null,
//         age: 20,
//         Adhar: " 5369 - 3928 - 4093",
//         course: "Bca",
//         arr1: ["vishalyadav", 40, "9155014125"]
//     }

//     let arr = ["vishal kumar", 30, "6287-3412-0448"]
//     return (
//         <div>
//             {/* <h1>{obj}</h1> */}
//             <h1>Name is:{obj.name ? obj.name : "user not found"}</h1>
//             <h2>Age is:{obj.age}</h2>
//             <h3>Adhar no is:{obj.Adhar}</h3>
//             <h4>Course is:{obj.course}</h4>
//             <h1>Array data</h1>
//             <h2>{arr}</h2>
//             <h2>{arr[0]}</h2>
//             <h2>{arr[1]}</h2>
//             <h2>{arr[2]}</h2>
//             <h1>Array of object data</h1>

//             <h2>{obj.arr1[0]}</h2>
//             <h2>{obj.arr1[1]}</h2>
//             <h2>{obj.arr1[2]}</h2>
//         </div>
//     )
// }

// export default App

//curly braces with html property

// function  App()
// {

//     let path="../public/dog.jpg"
//     let name="vishal"
//     return (
//      <div >
//        <img src={path} alt="" />
//        <input type="text" id={name}  value={name}/>
//      </div>
//     )
// }
// export default App
//----------------------------------------------------------------------------------------------------------------------

//STATE-> state is a containner to store data like variable.It is muetable and dynamic;
//->it use when it import;
//->it is automatically rerandring the component and data
//syntax-> [stateval,statefun]=usestate()->here []->distructuring -> js feature

//sample example;

//  import { useState } from "react"
//     function App()
//     {
//         let [data,setdata]=useState(0)
//         function handle()
//         {
//             data+=1;
//             setdata(data)

//         }
//     return(
//         <div>
//             <h1>{data}</h1>
//          <button onClick={handle}>Click me</button>
//         </div>
//     )
//     }
//    export default App
//-------------------------------------------------------------------------------------------------------

// use state we have create toggle

// import { useState } from "react"

// function App()
// {
//     let [dispaly,setdispaly]=useState(true)

//     function toggle()
//     {
//         setdispaly(!dispaly)
//     }

//     return(
//    <div>
//     {
//         dispaly?"vishal":null
//     }
//     <button onClick={toggle}>show</button>
//    </div>
//     )
// }
// export default App

//toggle component

// import { useState } from "react"
// import Fruits from "./Message"
// import Name from "./Header"

// function App()
// {
//     let [dispaly,setdispaly]=useState(true)

//     function toggle()
//     {
//         setdispaly(!dispaly)
//     }

//     return(
//    <div>
//     {
//         dispaly?<Fruits /> : < Name />
//     }
//     <button onClick={toggle}>show</button>
//    </div>
//     )
// }
// export default App
//---------------------------------------------------------------------------------------------------------------------


//multiple statement

// import { useState } from "react";

// function App() {
//     let [count, setcount] = useState(0);
//     function handle() {
//         count += 1;
//         setcount(count)
//     }
//     return (
//         <div>
//             {
//                 count == 0 ? "statement 0" : count == 1 ? "statement 1" : count == 2 ? "statemeent 2" : count == 3 ? "Statement 3" : "Other statement"
//             }
//             <h1>count is: {count}</h1>
//             <button onClick={handle}>Click</button>

//         </div>
//     )
// }

// export default App

// BAsic of Hooks->Hooks is provide a feature of funtional component;
//it allow you to use different react feature of your component;
//ex:-> useState,useContext etc 


//-----------------------------------------------------------------------------------------------------------------------

// import Detail from "./User";
// function App()
// {

//     return(
//         <div>
//           {/* <Detail names={name} ages={age} emails={email} /> */}
//           < Detail name="anil" age={20} email="vishaljpkumar4970@gmail.com" />
//         </div>
//     )
// }

// export default App

//through variable,object,array and onclick-event

// import Detail from "./User";
// import { useState } from "react";
// function App() {
// let [data,setdata]=useState("bhaskar")

//     let name =null
//     let age = 20;
//     let email = "vishaljpkumar@gmail.com"

//     let obj = {
//         name: "kushal",
//         age: 22,
//         email: "kushaljpkumar@gmail.com"
//     }
//     let arr = ["Adarsh", "Kushal", "Vishal"]
//     return (
//         <div>
//             <h2>Props through variables</h2>
//             {
//                 name?name:"user"
//             }
//             <Detail name={name} age={age} email={email} />

//             <h2>Props through object </h2>

//             <Detail name={obj.name} age={obj.age} email={obj.email} />

//             <h2>Example of array through props</h2>
//             <Detail name={arr} />
//             <Detail name={arr[0]} />
//             <Detail name={arr[1]} />
//             <Detail name={arr[2]} />

//           {
//             data?data:null
//           }

//             <button onClick={()=>{setdata(<Detail name=""/>)}}>click</button>

//         </div>
//     )
// }

// export default App

// import Wrapper from "./User"
// function App() {
//     return (
//         <div>
//      {/* <Wrapper /> */}

//      <Wrapper color="purple">
//         <h1>Hello231</h1>
//      </Wrapper>

//         </div>
//     )
// }

// export default App

//How to get input field data->using state or onchange event  

// import { useState } from "react";

// function App()
// {
//     let [val,setval]=useState("Default")
//     return(
//         <div>
//           <input type="text" value={val} onChange={(event)=>{setval(event.target.value)}} placeholder="Enter name" />
//           <h1>{val}</h1>
//           <button onClick={()=>setval("")}>click</button>
//         </div>
//     )
// }

// export default App

//Controlled component->A controlled component is a form whose input value controlled by react state;

//How its work
//->To store input value in state;
//->use change handler(onchange event) with input field;
//->value attribute attached to state;

// import { useState } from "react";

// function App() {
//     let [Name, setName] = useState("")
//     let [Password, setPassword] = useState("")
//     let [Email, setEmail] = useState("")

//     return (
//         <div>
//             <form action="" method="post">
//                 <input type="text" value={Name} onChange={(event) => { setName(event.target.value) }} placeholder="Enter name" />
//                 <h2>{Name}</h2>
//                 <input type="password" value={Password} onChange={(event) => { setPassword(event.target.value) }} placeholder="Enter Password" maxLength={8} minLength={3} />
//                 <h2>{Password}</h2>
//                 <input type="email" value={Email} onChange={(event) => { setEmail(event.target.value) }} placeholder="Enter Email" />
//                 <h2>{Email}</h2>

//                 <button onClick={() => { setName(""); setEmail(""); setPassword("") }} >Clear</button>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }
// export default App


//Handle check box-> ...spread operatot or filter both are new and all concept are controlled statement

//-> spread opretor is powerfull operator in js denoted by ...;
//-> it allow you to itrate on array object string;
//->it store all value
//example
// const originalArray = [1, 2, 3];
// const copiedArray = [...originalArray]; // copiedArray is [1, 2, 3]

// const originalObject = { a: 1, b: 2 };
// const copiedObject = { ...originalObject }; // copiedObject is { a: 1, b: 2 }

// import { useState } from "react";

// function App() {
//     let [skills, setskills] = useState([])


//     function handle(event)
//     {
//      //console.log(event.target.value,event.target.checked)
//         if(event.target.checked)
//         {
//             setskills([...skills,event.target.value])
//         }
//         else{
//             setskills([...skills.filter((item)=>item!=event.target.value)])
//         }
//     }

//     return (
//         <div>
//             <input type="checkbox" onChange={handle} value="js" id="js" />
//             <label htmlFor="js">Js</label>
//             <br /><br />
//             <input type="checkbox" onChange={handle} value="php" id="php"  />
//             <label htmlFor="php">php</label>
//             <br /><br />
//             <input type="checkbox" onChange={handle}  value="python" id="python" />
//             <label htmlFor="python">python</label>
//             <br /><br />
//             <input type="checkbox" onChange={handle}  value="React" id="React" />
//             <label htmlFor="React">React</label>
//             <br /><br />
//             <input type="checkbox" onChange={handle}   value="Node" id="Node" />
//             <label htmlFor="Node">Node</label>
//             <br /><br />
//             <h1>{skills.toString()}</h1>
//         </div>
//     )
// }
// export default App

//how to get radio button 

// import {useState } from "react"
// function App() {
//     let [gender,setgender]=useState("male")
//     let [city,setcity]=useState("Bihar")
//     return (
//         <div>
//             <input type="radio" onChange={(event) => { setgender(event.target.value) }} name="gender" value={"male"} id="male" checked={gender==='male'} />
//             <label htmlFor="male">Male</label>
//             <input type="radio" onChange={(event) => {setgender(event.target.value) }} name="gender" value={"female"} id="female" checked={gender==="female"} />
//             <label htmlFor="female">Female</label>
//             <h1>{gender}</h1>
//             <br />
//             <br />
//            <select onChange={(event)=>{setcity(event.target.value)}} defaultValue={"Bihar"} >
//             <option  value="noida">noida</option>
//             <option value="delhi">delhi</option>
//             <option value="pune">Pune</option>
//             <option value="Bihar">bihar</option>
//            </select>
//            <h1>{city}</h1>

//         </div>
//     )
// }
// export default App

//loop in jsx using with map()

// import { useState } from "react";
// function App() {
//     let data = [{
//         name: "vishal",
//         age: 20,
//         email: "vishalpkumar4970@gmail.com"
//     },{
//         name: "kushal",
//         age: 19,
//         email: "kushalpkumar4970@gmail.com"
//     },
//     {
//         name: "vishal",
//         age: 22,
//         email: "shalinijpkumar4970@gmail.com"
//     }
//     ]
//     return (
//         <div>
//             <table border="1">
//              <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Age</th>
//                     <th>Email</th>
//                 </tr>
//              </thead>
//              <tbody>
//                 {
//                     data.map((user)=>{
//                         return(
//                         <tr key={user.email}>
//                             <td>{user.name}</td>
//                             <td>{user.age}</td>
//                             <td>{user.email}</td>
//                         </tr>
//                     )}) 
//                 }
//              </tbody>
//             </table>
//         </div>
//     )
// }

// export default App

// import User from "./User";
// import { useState } from "react";


// function App()
// {
//     let data = [{
//         name: "vishal",
//         age: 20,
//         email: "vishalpkumar4970@gmail.com"
//     },{
//         name: "kushal",
//         age: 19,
//         email: "kushalpkumar4970@gmail.com"
//     },
//     {
//         name: "vishal",
//         age: 22,
//         email: "shalinijpkumar4970@gmail.com"
//     }
//     ]
//     return(
//         <div>
//             <h1>Hello</h1>
//          {
//             data.map((employee)=>{
//                 return(
//                 <div key={employee.email}>
//                     <User userdata={employee} /> 
//                 </div>
//              ) })
//          }
//         </div>
//     )
// }


// export default App


// import College from "./CollegeDAta";


// function App()
// {

//     let collegeData=[{
//         collegename:"IET",
//         id:1,
//         city:"Kharakpur",
//         website:"www.iet.com",
//         student:[
//             {
//             name:"vishal",
//             age:20,
//             email:"vish@gmail.com"
//         },
//         {
//             name:"kushal",
//             age:22,
//             email:"kush@gmail.com"
//         },
//         {
//             name:"shalini",
//             age:24,
//             email:"shalini@gmail.com"
//         }
//     ]
//     },
//     {
//         collegename:"NIT",
//         id:2,
//         city:"kerla",
//         website:"www.nit.com",
//         student:[
//             {
//             name:"komal",
//             age:26,
//             email:"komal@gmail.com"
//         },
//         {
//             name:"khusi",
//             age:24,
//             email:"khushi@gmail.com"
//         },
//         {
//             name:"shaliniyadav",
//             age:29,
//             email:"shaliniyadav@gmail.com"
//         }
//     ]
//     },
//     {
//         collegename:"IIT",
//         id:3,
//         city:"Delhi",
//         website:"www.iit.com",
//         student:[
//             {
//             name:"vishnu",
//             age:29,
//             email:"vishnu@gmail.com"
//         },
//         {
//             name:"kushal",
//             age:22,
//             email:"kush@gmail.com"
//         },
//         {
//             name:"shalini",
//             age:24,
//             email:"shalini@gmail.com"
//         }
//     ]
//     }
// ]

//     return(
//         <div>
//           <h1>This is  a college data.................</h1>
//          {
//             collegeData.map((college)=>{
//                 return(
//                     <div key={college.id}>
//                       <College collegeinfo={college} />


//                     </div>
//                 )
//             })
//          }
//         </div>
//     )
// }

// export default App

// import { useEffect, useState } from "react"
// import Props from "./Header";
// function App() {

//     let [count, setcount] = useState(0);
//     let [data, setdata] = useState(0)
//     // function counter() {
//     //     console.log("hello counter function")
//     // }
//     // function datafun() {
//     //     console.log("hello datafun function")
//     // }
//     // useEffect(() => {
//     //     datafun()
//     //     counter() //call every time
//     // })

//     // useEffect(() => {
//     //     datafun()
//     //     counter()
//     // }, [])//call only one time

//     // useEffect(() => {
//     //     datafun()
//     //     counter()
//     // }, [count])//call every time on this state

//     // useEffect(() => {
//     //     datafun()
//     //     counter()
//     // }, [count,data])//call every time on this state


//     return (
//         <div>
//             <Props count={count} data={data} />
//             {/* <h1>counter:{count}</h1> */}
//             <button onClick={() => {
//                 count = count + 1
//                 setcount(count)
//             }}>click</button>
//             {/* <h1>Data:{data}</h1> */}
//               <button onClick={() => {
//                 data = data + 1
//                 setdata(data)
//             }}>click</button>
//         </div>
//     )
// }

// export default App

// import { useState } from "react"
// import Lifecycle from "./Header";


// function App()
// {
//      let [count, setcount] = useState(0);
//      let [data, setdata] = useState(0);
//      let [dispaly,setdispaly]=useState(true);



//     return(
//         <div>
//           {
//             dispaly?<Lifecycle count={count} data={data} />:null
//           }
//             <button onClick={()=>{
//                 setcount(count+1)
//             }}>click</button>
//              <button onClick={()=>{
//                 setdata(data+1)
//             }}>data</button>
//              <button onClick={()=>{
//             setdispaly(!dispaly)
//             }}>toggle</button>
//         </div>
//     )
// }

// export default App


//to make a digital clock using useeffect;
// import { useState } from "react"
// import Clock from "./Clock"
// function App()
// {
//   let [colorname,setcolor]=useState("green")
//     return(
//         <div>
//           <h1>Hello This Is Digital Clock</h1>
//           <select  onChange={(event)=>{setcolor( event.target.value)}}  >

//           <option value="red">Red</option>
//           <option value="yellow">yellow</option>
//           <option value="purple">Purple</option>
//           </select>
//    <Clock colorprops={colorname} />
//         </div>
//     )
// }

// export  default App

//to make a user card dynamic or conditional using inline css


// function App()
// {
//   return(
//     <div style={{display:"flex",flexWrap:"wrap"}}>
//        <div style={{border:"1px solid black", width:"150px" ,height:"250px", background:"#eae888", borderRadius:"8px"}}>
//         <div style={{textAlign:"center"}}>
//           <img src="profilepic.jpg" alt="profile" width="140px" height="100px" style={{borderRadius:"50%",margin:"10px"}} title="Profile picture" />
//         </div>
//         <div style={{textAlign:"center"}}>
//           <h3>Vishal Kumar</h3>
//           <h3>FullStack Developer</h3>
//         </div>

//        </div>
//        <div style={{border:"1px solid black", width:"150px" ,height:"250px", background:"#eae888", borderRadius:"8px"}}>
//         <div style={{textAlign:"center"}}>
//           <img src="profilepic.jpg" alt="profile" width="140px" height="100px" style={{borderRadius:"50%",margin:"10px"}} title="Profile picture" />
//         </div>
//         <div style={{textAlign:"center"}}>
//           <h3>Vishal Kumar</h3>
//           <h3>FullStack Developer</h3>
//         </div>

//        </div>
//        <div style={{border:"1px solid black", width:"150px" ,height:"250px", background:"#eae888", borderRadius:"8px"}}>
//         <div style={{textAlign:"center"}}>
//           <img src="profilepic.jpg" alt="profile" width="140px" height="100px" style={{borderRadius:"50%",margin:"10px"}} title="Profile picture" />
//         </div>
//         <div style={{textAlign:"center"}}>
//           <h3>Vishal Kumar</h3>
//           <h3>FullStack Developer</h3>
//         </div>

//        </div>
//          <div style={{border:"1px solid black", width:"150px" ,height:"250px", background:"#eae888", borderRadius:"8px"}}>
//         <div style={{textAlign:"center"}}>
//           <img src="profilepic.jpg" alt="profile" width="140px" height="100px" style={{borderRadius:"50%",margin:"10px"}} title="Profile picture" />
//         </div>
//         <div style={{textAlign:"center"}}>
//           <h3>Vishal Kumar</h3>
//           <h3>FullStack Developer</h3>
//         </div>

//        </div>
//          <div style={{border:"1px solid black", width:"150px" ,height:"250px", background:"#eae888", borderRadius:"8px"}}>
//         <div style={{textAlign:"center"}}>
//           <img src="profilepic.jpg" alt="profile" width="140px" height="100px" style={{borderRadius:"50%",margin:"10px"}} title="Profile picture" />
//         </div>
//         <div style={{textAlign:"center"}}>
//           <h3>Vishal Kumar</h3>
//           <h3>FullStack Developer</h3>
//         </div>

//        </div>
//          <div style={{border:"1px solid black", width:"150px" ,height:"250px", background:"#eae888", borderRadius:"8px"}}>
//         <div style={{textAlign:"center"}}>
//           <img src="profilepic.jpg" alt="profile" width="140px" height="100px" style={{borderRadius:"50%",margin:"10px"}} title="Profile picture" />
//         </div>
//         <div style={{textAlign:"center"}}>
//           <h3>Vishal Kumar</h3>
//           <h3>FullStack Developer</h3>
//         </div>

//        </div>
//          <div style={{border:"1px solid black", width:"150px" ,height:"250px", background:"#eae888", borderRadius:"8px"}}>
//         <div style={{textAlign:"center"}}>
//           <img src="profilepic.jpg" alt="profile" width="140px" height="100px" style={{borderRadius:"50%",margin:"10px"}} title="Profile picture" />
//         </div>
//         <div style={{textAlign:"center"}}>
//           <h3>Vishal Kumar</h3>
//           <h3>FullStack Developer</h3>
//         </div>

//        </div>
//          <div style={{border:"1px solid black", width:"150px" ,height:"250px", background:"#eae888", borderRadius:"8px"}}>
//         <div style={{textAlign:"center"}}>
//           <img src="profilepic.jpg" alt="profile" width="140px" height="100px" style={{borderRadius:"50%",margin:"10px"}} title="Profile picture" />
//         </div>
//         <div style={{textAlign:"center"}}>
//           <h3>Vishal Kumar</h3>
//           <h3>FullStack Developer</h3>
//         </div>

//        </div>
//          <div style={{border:"1px solid black", width:"150px" ,height:"250px", background:"#eae888", borderRadius:"8px"}}>
//         <div style={{textAlign:"center"}}>
//           <img src="profilepic.jpg" alt="profile" width="140px" height="100px" style={{borderRadius:"50%",margin:"10px"}} title="Profile picture" />
//         </div>
//         <div style={{textAlign:"center"}}>
//           <h3>Vishal Kumar</h3>
//           <h3>FullStack Developer</h3>
//         </div>

//        </div>
//          <div style={{border:"1px solid black", width:"150px" ,height:"250px", background:"#eae888", borderRadius:"8px"}}>
//         <div style={{textAlign:"center"}}>
//           <img src="profilepic.jpg" alt="profile" width="140px" height="100px" style={{borderRadius:"50%",margin:"10px"}} title="Profile picture" />
//         </div>
//         <div style={{textAlign:"center"}}>
//           <h3>Vishal Kumar</h3>
//           <h3>FullStack Developer</h3>
//         </div>

//        </div>
//          <div style={{border:"1px solid black", width:"150px" ,height:"250px", background:"#eae888", borderRadius:"8px"}}>
//         <div style={{textAlign:"center"}}>
//           <img src="profilepic.jpg" alt="profile" width="140px" height="100px" style={{borderRadius:"50%",margin:"10px"}} title="Profile picture" />
//         </div>
//         <div style={{textAlign:"center"}}>
//           <h3>Vishal Kumar</h3>
//           <h3>FullStack Developer</h3>
//         </div>

//        </div>
//          <div style={{border:"1px solid black", width:"150px" ,height:"250px", background:"#eae888", borderRadius:"8px"}}>
//         <div style={{textAlign:"center"}}>
//           <img src="profilepic.jpg" alt="profile" width="140px" height="100px" style={{borderRadius:"50%",margin:"10px"}} title="Profile picture" />
//         </div>
//         <div style={{textAlign:"center"}}>
//           <h3>Vishal Kumar</h3>
//           <h3>FullStack Developer</h3>
//         </div>

//        </div>
//          <div style={{border:"1px solid black", width:"150px" ,height:"250px", background:"#eae888", borderRadius:"8px"}}>
//         <div style={{textAlign:"center"}}>
//           <img src="profilepic.jpg" alt="profile" width="140px" height="100px" style={{borderRadius:"50%",margin:"10px"}} title="Profile picture" />
//         </div>
//         <div style={{textAlign:"center"}}>
//           <h3>Vishal Kumar</h3>
//           <h3>FullStack Developer</h3>
//         </div>

//        </div>

//     </div>
//   )
// }

// export default App
// import { useState } from "react"
// function App() {
//   let name = "Vishal Kumar";
//   let degination = "FullStack  Developer"
//   let [cardstyele, setcardstyle] = useState({
//     width: "200px",
//     height: "250px",

//     border: "1px solid black",

//     boxShadow: "0 0 1px gray",
//     textAlign: "center",
//     margin: "10px",
//     padding: "10px",
//     borderRadius: "10px"

//   })

//   let [txcolor, settxcolor] = useState("black")

//   let [grid, setdispaly] = useState(true)

//   function update(bgcolors, textcolor) {
//     //  console.log(bgcolors,textcolor)
//     setcardstyle({ ...cardstyele, backgroundColor: bgcolors })
//     settxcolor(textcolor)
//   }

//   return (
//     <div style={{ display: grid ? "flex" : "block" }}>
//       <div style={cardstyele}>
//         <div>
//           <img src="profilepic.jpg" height="100px" width="120px" alt="" />
//         </div>
//         <div style={{color:txcolor}}>
//           <h3>Name:{name ? name : "user not found"}</h3>
//           <h3>Degination:{degination ? degination : null}</h3>
//         </div>
//       </div>
//       <button onClick={() => {
//         update("red","green")
//       }}>New  Theme</button>
//       <button onClick={() => {
//         update("yellow", "pink")
//       }}>default  Theme</button>
//       <button onClick={() => {
//         setdispaly(!grid)
//       }}>
//         toggle
//       </button>
//     </div>
//   )
// }

// export default App

// import "./Css/Style.css"

// function App()
// {
//   return(
//     <>
//     <h1 className="head">Hello EveryOne</h1>
//     </>
//   )
// }
// export default App
// import Demo from "./Usermod"
// function App()
// {
//   return(
//     <>
//     <h1>Hello</h1>
//    <Demo />
//     </>
//   )
// }
// export default App

// import styled from "styled-components";

// function App()
// {
//   let Heading=styled.h1({
//     color:"red",
//     background:"purple"
//   })
//   return(
//     <div>
//       <Heading>Hekllo</Heading>
//     </div>
//   )
// }

// export default App
// import  Dropdown  from "react-bootstrap/Dropdown"
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// function App()
// {
//   return(
//     <div>
//     <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Dropdown Button
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//      <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>

//     </div>
//   )
// }
// export default App

//useref()->this is use to  handle any html element and dom

// import { useRef } from "react"
// function App() {

//   let inputref = useRef(null)
// let buttonref=useRef(null)


//   function handleinputref() {
//     // console.log(inputref)

//     inputref.current.style.color = "red"

//     inputref.current.style.background = "purple"

//     inputref.current.focus()

//     inputref.current.placeholder = "Enter a value"

//     inputref.current.value = "redcolor"

//     inputref.current.style.fontSize = "2rem"


//   }
//   function toggle()
//   {
//     if(inputref.current.style.display!="none")
//     {
//       inputref.current.style.display="none"
//     }
//     else{
//       inputref.current.style.display="inline"
//     }

//     buttonref.current.style.color = "green"

//     buttonref.current.style.background = "gray"

//     buttonref.current.style.fontSize = "2rem"


//   }

//   return (
//     <div>
//       <button  ref={buttonref} onClick={toggle}>toggle</button>
//       <input  type="text" ref={inputref} placeholder="enter a name" />
//       <button onClick={handleinputref}>focus on input element</button>

//     </div>
//   )
// }

// export default App

//Uncontrolled component-> we can handle form input field without using state ;
// import { useRef } from "react";
// function App() {

//   let nameref = useRef(null)
//   let passwordref = useRef(null)
//   let emailref = useRef(null)

//   function formref(event) {
//     event.preventDefault()
//   let user=nameref.current.value
//   let email=emailref.current.value
//   let password=passwordref.current.value
//   console.log(user,email,password)

//   }


//   function formhandler(event) {

//     event.preventDefault()

//     let user = document.querySelector("#name").value
//     let password = document.querySelector("#password").value;
//     let email = document.querySelector("#email").value

//     console.log(user, password, email)

//   }

//   return (
//     <div>
//       <form action="" onSubmit={formhandler}>
//         <input type="text" id='name' />
//         <br /><br />
//         <input type="password" id='password' />
//         <br /><br />
//         <input type="email" id='email' />
//         <br /><br />
//         <button>Submit</button>
//       </form>
//       <h1>uncontrolled component with useref</h1>
//       <form action="" onSubmit={formref}>
//         <input ref={nameref} type="text" />
//         <br /><br />
//         <input ref={passwordref} type="password" />
//         <br /><br />
//         <input ref={emailref} type="email" />
//         <br /><br />
//         <button>Submitref</button>
//       </form>
//     </div>
//   )
// }

// export default App

//pass function in components as props
// import User from "./User"
// function App() {
//   let defaultnamed = "vishal;"
//   function namedata(name) {
//     console.log(name)
//   }
//   function defaultdata() {
//     console.log("this is default data")
//   }
//   return (
//     <div>
//       <h1>Hello App component as parent</h1>

//       <User namedata={namedata} name="kushal" defaultdata={defaultdata} named={defaultnamed} />
//       <User namedata={namedata} name="shalini" defaultdata={defaultdata} named={defaultnamed} />
//       <User namedata={namedata} name="puja" defaultdata={defaultdata} named={defaultnamed} />
//       <User namedata={namedata} name="neha" defaultdata={defaultdata} named={defaultnamed} />
//       <User namedata={namedata} name="anju" defaultdata={defaultdata} named={defaultnamed} />

//     </div>
//   )

// }

// export default App
// import Todo from "./Todo"

// function App()
// {
//     return(
//         <div>
//           <Todo />
//         </div>
//     )
// }
// export default App

//UseForwardRef-> Two share the data to child component you can use USeforwardRef.It can take only two parameter props or ref in using ofrwardRef React 18 version but not in 19 version ;


// import { useRef, useState } from "react"
// import User from "./User"
// function App()
// {

//   let [name,setname]=useState()
//   let userref=useRef(null)
//   function handle(Names)
//   {
//     setname(Names)
//   }
//   function getdata()
//   {
//     userref.current.value="ananya"
//     userref.current.focus()
//     userref.current.style.background="Orange"
//   }
//   return(
//     <div>
//      <h1>Hello</h1>

//      <button onClick={()=>{handle("vishal")}}>Click</button>
//      <h1>{name}</h1>
//      <User  userref={userref} />
//        <button onClick={getdata}>click input</button>
//     </div>
//   )
// }

// export default App

//FormStatusHook-> it can handle form element  it neccesary to declare a form You can perform all task another component or function as first letter capital 

// import { useFormStatus } from "react-dom"
// function App()
// {

// async function handleform()  
// {

// await new Promise((res)=>{setInterval(res,5000)})

// }

// function Handlecustomer()
// {
//   let {pending}=useFormStatus()
//   console.log(pending)
//   return(
//     <div>
//        <input type="text" />
//          <button disabled={pending}>{pending?"submitting.......":"submit"}</button>
//     </div>
//   )
// }

//   return(
//     <div>
//        <form action={handleform}>
//         <Handlecustomer />
//        </form>
//     </div>
//   )
// }
// export default App

//Usetransition hoooks -> it not need to form to handle a form data 

// import { useTransition } from "react";

// function App() {

//   let [pending, settrantion] = useTransition()

//   function handle() {
//     settrantion(async () => {
//       await new Promise((res) => { setInterval(res, 5000) })
//       console.log(pending)
//     })
//   }

//   return (
//     <div>

//       <input type="text" />
//       <br />
//       <br />
//       {
//         pending ? <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" height="100px" width="100px" /> : null
//       }
//       <button disabled={pending} onClick={handle} >click</button>

//     </div>
//   )
// }
// export default App

//keep pure your components

// function App() {

//   return (
//     <div>
//       <Data guest={1} />
//       <Data guest={3} />
//       <Data guest={10} />
//     </div>
//   )
// }
// const Data = ({ guest }) => {
//   console.log(`The ${guest} guest is come and need ${guest} cups`)
// }
// export default App

//Derived state ->the state that is  calculate or  derived from other state value or props whithin your components it is a variable that not need to other state,
//how to find unique value-> [..new Set(arrayname)].length
// function App()
// {
//   let [users,setusers]=useState([]);
//   let [user,setuser]=useState('')
//    function handleuser()
//    {
//     setusers([...users,user])

//    }
//    let total=users.length
//    let lastuser=users[users.length-1]
//    let unique=[...new Set(users)].length
//   return(
//     <div>
//       <h1>{total}</h1>
//       <h2>{lastuser}</h2>
//       <h3>{unique}</h3>
//       <input type="text" onChange={(event)=>{setuser(event.target.value)}} />
//       <br /><br />
//       <button onClick={handleuser}>AddUser</button>
//       {/* <h1>{users}</h1> */}
//       {
//         users.map((item)=>{
//           <h2>
//             {/* {console.log(item)} */}

//             {item}

//           </h2>
//         })
//       }
//     </div>
//   )
// }
// export default App

//lifting state in react js -------------> two share the data  in components

// import User from "./User"
// import Display from "./Dispaly"
// function App()
// {
//   let [name,setname]=useState("")

//   return(
//     <div>
//     <User Name={setname}/>
//     <Display display={name} />
//     </div>
//   )
// }
// export default App

//update object in state

// function App() {
//   let [data, setdata] = useState({
//     name: "vishal",
//     id: 102,
//     dsg: 'trainner',
//     salary: 200293,
//     address: {
//       city: {
//        namecity:"hajipur"
//       },
//       stae: "bihar"
//     }
//   })

//   function handle(val) {
//     data.name = val

//     setdata({ ...data })
//   }
//   function handlecity(stae) {
//     data.address.stae= stae

//     setdata({ ...data,address:{...data.address,stae} })
//     // setdata({ ...data,address:{...data.address},city:{...data.address.city.namecity.namecity } })
//   }

//   return (
//     <div>
//       <input type="text" onChange={(event) => { handle(event.target.value) }} />
//        <input type="text" onChange={(event) => { handlecity(event.target.value) }} />
//       <h2>Name:{data.name}</h2>
//       <h2>Dsg:{data.dsg}</h2>
//       <h2>Id:{data.id}</h2>
//       {/* <h2>City:{data.address.city.namecity}</h2> */}
//       <h2>State{data.address.stae}</h2>
//       <h2>Salery:{data.salary}</h2>

//     </div>
//   )
// }

// export default App

// function App()
// {

//   let [data,setdata]=useState([{
//     id: 102,
//     dsg: 'trainner'}])
//   function handledata(name)
// {
//   data[data.length-1].dsg=name;
//   setdata([...data])
// }
//   return(
//     <div>
//    <input type="text" onChange={(event)=>{handledata(event.target.value)}} />
//    <h1>{data.map((Item,index)=>{
//     return(
//       <div key={index}>
//         <h1>{Item.dsg}</h1>
//       </div>
//     )
//    })}</h1>
//     </div>
//   )
// }
// export default App

//useActionState()-> it is used to handle the form in react js,
//               it state is update  based on the result of  form action;
//               it takes 3 value an 2 args like->[var_name,action,pending]=useActionState(function-name,undefined);


// function App()
// {
//     let [data,action,pending]=useActionState(handlesubmit,undefined)
//    async function handlesubmit(previousdata,formdata)
//     {
//    await new Promise((res)=>setInterval(res,2000))     
//    let name=formdata.get('name')
//    let password=formdata.get('password')
//    console.log(name,password)
//    if(name && data)
//    {
//     return {message:"Data is submitted",name,password}
//    }
//    else{
//     return {error:"Data is invalid",name,password}
//    }

//     }


//     return(
//         <>
//        <form action={action}>
//         <input defaultValue={data?.name} type="text" name="name"   />
//         <br /><br />
//         <input type="password" defaultValue={data?.password} name="password" />
//         <br />
//         <br />
//         <button disabled={pending}>click</button>
//         {
//             data?.error && <span>{data?.error}</span>
//         }
//         {
//             data?.message && <span>{data?.message}</span>
//         }
//         <h3>Name:{data?.name}</h3>
//         <h3>password:{data?.password}</h3>
//        </form>
//         </>
//     )
// }

// export default App

// function App() {
//     let [toggle, settoggle] = useToggle(true)
//     let [data, setdata] = useToggle(true)
//     return (
//         <>
//             <h1>hello</h1>
//             <button onClick={settoggle}>click</button>
//             {toggle ? "hello india it custom hooks " : toggle}
//             <hr />
//             <h1>hello</h1>
//             <button onClick={setdata}>clickdata</button>
//             <button onClick={() => { setdata(true) }}>true</button>
//             <button onClick={() => { setdata(false) }}>false</button>

//             {data ? "hello india it custom hooks " : toggle}
//         </>
//     )
// }
// export default App

//context api-> to share the data across entire component without props;
// import { useState } from "react"
// import College from "./College"
// import { SubjectContext } from "./ContextApi"
// import Subject from "./Subject"


// function App() {
//     let [subject, setsubject] = useState('math')
//     return (
//         <>
//             <div style={{ background: "purple", height: "100vh", padding:"20px" }}>
//                 <h1>App Component</h1>

//                 <SubjectContext.Provider value={subject}>
//                     <select value={subject}  onChange={(event) => { setsubject(event.target.value) }}>
                       
//                         <option value="physic">physic</option>
//                         <option value="english">english</option>
//                         <option value="hindi">hindi</option>
//                          <option value="math">math</option>

//                     </select>

//                     <College />
//                     <Subject />
//                 </SubjectContext.Provider>
    
//             </div>
//         </>
//     )
// }

// export default App

