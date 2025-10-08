// // // // // React-> React is a library of a js. It is used to build ui.It is develope by facebook,it is make spa beacuse it is fast work or not reload the browser.the current version is i 19.
// // // // // it is large community and high demand in job market.it is easy to learn;

// import { Route, Routes } from "react-router";
// import GetApi from "./GetApi";
// import UserDetail from "./AddUser";
// import AddUser from "./AddUser";
// import Edit from "./Edituser";

// import FormDataHAndle from "./ActionState";
import ColorMixing from "./Colormixing";
import LAzyLoad from "./Lazy2";
import ReducerDATA from "./Reducer2";
import Reducer2 from "./Reducer2";
// import USEAPI from "./USEAPI2";
// import LazyLoading from "./LazyLoading";
// import USEAPI from "./USEapi";

// import { Navigate, Route, Routes } from "react-router";
// import NavBar from "./Navbar";
// import College from "./College"
// import Home from "./Home"
// import Login from "./Login"
// import About from "./About"
// import Students from "./Students";
// import Departments from "./Departments";
// import UserList from "./Userlist";
// import UserDetails from "./UserDetails";

// // import { useState } from "react"
// // import { Colorsdata } from "./contextApi"
// // import Clock from "./Clock"

// // // import { use, useRef, useState } from "react"
// // // import Forward from "./Forwardref";
// // // import Users from "./Derived";
// // // import useToggle from "./customhooks";


// // // // // jsx-> it is javascript syntax extension or js xml . it allow you to write html code inside the  js .
// // // //       // the jsx write into the curly bracket.
// // // // // liabray-> in liabrary user can decide the file structure or program flow ;
// // // // // framework-> it is own decide the flow of file structure or program    ;

// // // // // export-> when you send the componet to one file to another file use export keyword;
// // // // // named export-> it is used for child component to export one file to another;
// // // // // default export-> it used for primary component.beacause only one component is used export default;
// // // // //import-> it is used to import the component from another file;

// // // // import ArrayObject from "./Array_object";
// // // // import Demo from "./Components";
// // // // import Propsdata from "./Props";
// // // // import DemoState from "./State";
// // // // import Loop from "./Loop";
// // // // import Userdata from "./Userdata";
// // // // import Wrapper from "./Wrapper";
// // // // // import Sideeffect from "./Hooks";
// // // // import HandleForm from "./USEActionsate";
// // // // import Reducer from "./Reducer";
// // // // import HandleReducer from "./Reducer";
// // // // // import Controlled from "./Control_uncontrolled_Component";
// // // // // import Uncontrolled from "./Control_uncontrolled_Component";
// // // // import Calculator from "./Calculator";
// // // // import Clock from "./Clock";
// // // // import { useState } from "react";

// // // // export default function App()
// // // // {

// // // //   let [colors,setcolor]=useState('navy')

// // // //   return(
// // // //     <>
// // // //     {/* <Demo />
// // // //     <DemoState /> */}

// // // // {/* <ArrayObject /> */}

// // // // {/* <Userdata />
// // // // <Propsdata /> */}
// // // // {/* <Wrapper />
// // // // <Propsdata /> */}

// // // // {/* <Loop />
// // // // <Sideeffect /> */}
// // // // {/* <HandleForm /> */}

// // // // {/* <HandleReducer /> */}

// // // // {/* <Controlled /> */}
// // // // {/* <Uncontrolled /> */}
// // // // {/* <Calculator /> */}


// // // //  <select onChange={(event)=>{setcolor(event.target.value)}} defaultValue={"navy"}>
// // // //                 <option value="red">red</option>
// // // //                 <option value="green">green</option>
// // // //                 <option value="purple">purple</option>
// // // //                 <option value="aqua">aqua</option>
// // // //                  <option value="navy">navy</option>
// // // //             </select>

// // // //             <Clock colors={colors} />



// // // //     </>
// // // //   )
// // // // }


// // // // export default function App()
// // // // {
// // // //   let name =useRef(null)
// // // //   function saved()
// // // //   {
// // // //   let names=name.current.value;
// // // //   console.log(names)
// // // //   }
// // // //   return(
// // // //     <>
// // // //       <Forward refdata={name} />
// // // //     <button onClick={saved}>click</button>

// // // //     </>
// // // //   )
// // // // }

// // // export default function App()
// // // {
// // //   let [value,toggle]=useToggle(true)

// // //   return(
// // //     <>
// // //     {/* <Users /> */}

// // //   { value?<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nesciunt accusantium aperiam recusandae laborum consequatur voluptatum dolores tenetur, officiis blanditiis maiores exercitationem esse maxime illum tempore ea eaque expedita. Molestias.</h1>:null}
// // //    <button onClick={toggle}>toggle</button>

// // //     </>
// // //   )
// // // }

// // export default function App()
// // {
// //   let [data,setdata]=useState('navy')
// //   return(
// //     <>
// //     <Colorsdata.Provider value={data}>

// //     <select onChange={(event)=>{setdata(event.target.value)}} defaultValue={"navy"}>

// //    <option value="red">red</option>
// //    <option value="blue">blue</option>
// //    <option value="aqua">aqua</option>
// //    <option value="yellow">yellow</option>
// //    <option value="navy">navy</option>
// //     </select>
// //   <Clock />
// //     </Colorsdata.Provider>
// //     </>
// //   )
// // }




// export default function App() {
//   return (
//     <>


//       <Routes>
//         <Route element={<NavBar />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/login" index element={<Login />} />
//           <Route path="/userlist/list?" element={<UserList />} />
//           <Route path="/userlist/:id/:name?" element={<UserDetails />} />
//         </Route>
//         <Route path="/college" element={<College />}>
//           <Route index element={<Students />} />
//           <Route path="/college/departments" element={<Departments />} />
//         </Route>




//         <Route path="/*" element={<Navigate to={"/login"} />} />
//         <Route />

//       </Routes>
//     </>
//   )
// }

export default function App()
{
  return(
    <>
    
  
{/* <LAzyLoad /> */}

{/* <USEAPI /> */}
<ColorMixing />
{/* <ReducerDATA /> */}

    </>
  )
}