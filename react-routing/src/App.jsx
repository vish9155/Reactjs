
// /* 1.BrowserRouter->it is a component to enables the client side rounting based on browser history api;

// import Simplevalidation from "./SimpleValidatino"
import Lazy from "./LazyandPerformence"
import HandleReducer from "./Reducer"
import HandleForm from "./ValidationUsingActionState"

// //  client-side-routing->the browser are not referesh go to the new route ;

// //  server-side-routing->the browser are refereh go to the new route;

// 2.Routes-> it is responsible to the rerendring to appropiriate component based on current url;

// 3.Route-> each route component is define the path  and rerender the component that path is matched

// 4. Link -> it is a link for navigation to 1 page to another

// 5 NavLink-> it is same a link but one major difference link not provide active class but Navlink can provide the active class

// ------------------------NOTE--------------------------------

// 1. if add 404 error ->you can add path="/*" in route at the last;

// 2.if you redirect if route not found you add path="/*" and element={<Nevigate to={path_nane you redirect  />}} in route . it useed when you import nevigate from react-router


// // layout and index -> to write the the component in route inclosed bracket

// */
// // import { BrowserRouter, Routes, Route, Link } from "react-router"
// // function App() {
// //   return (
// //     <>

// import { useEffect, useState } from "react"

// import { Route, Routes, Navigate, NavLink } from "react-router";
// import UserList from "./UserList";
// // import Home from "./Home";
// // import Login from "./Login";
// // import About from "./About";
// // import NavBar from "./NavBar";
// // import College from "./College";
// // import Student from "./Student";
// // import Teacher from "./Teacher";
// // import Department from "./Department";
// import PageNotFound from "./PageNotFound";
// import AddUser from "./AddUser";
// import UserEdit from "./UserEdit";
// // import User from "./Users";
// // import Userdetail from "./UserDetail";


// //       <BrowserRouter>
// //         <h1>hello</h1>
// //         <Link to={'/'}>Home</Link>
// //         <Link to={"/about"}>About</Link>
// //         <Link to={"/login "}>Login</Link>
// //         <Routes>
// //           <Route path="/" element={<h1>Home</h1>} />
// //           <Route path="/about" element={<h1>about</h1>} />
// //           <Route path="/login" element={<h1>login</h1>} />
// //         </Routes>
// //       </BrowserRouter>

// //     </>
// //   )
// // }

// // export default App

// // function App() {
// //   return (
// //     <>

// //       <NavBar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/college" element={<College />}>
// //           <Route path="student" element={<Student />} />
// //           <Route path="teacher" element={<Teacher />} />
// //           <Route path="department" element={<Department />} />
// //         </Route>
// //         {/* <Route path="/*" element={<PageNotFound />}/> */}
// //         <Route path="/*" element={<Navigate to={"/"} />} />
// //       </Routes>
// //     </>
// //   )
// // }

// // export default App

// //Layout or index route-> if you want to see page in other page you make <route element={<NavBar />}
// //                           you can provide which route that you seen in same page and other route can be display in other page
// //                         you can display by default any child route you give index path delete or give navlink to="" empty ;
// // and also add all nav link in the div element give outlet to display child route data

// // function App() {
// //   return (
// //     <>

// //       {/* <NavBar /> */}
// //       <Routes>

// //     <Route element={<NavBar />}>
// //        <Route path="/" element={<Home />} />
// //           <Route path="/about" element={<About />} />
// //           <Route path="/login" element={<Login />} />
// //     </Route>


// //         <Route path="/college" element={<College />}>
// //           <Route index element={<Student />} />
// //           <Route path="teacher" element={<Teacher />} />
// //           <Route path="department" element={<Department />} />
// //         </Route>
// //         {/* <Route path="/*" element={<PageNotFound />}/> */}
// //         <Route path="/*" element={<Navigate to={"/"} />} />
// //       </Routes>
// //     </>
// //   )
// // }

// // export default App


// //Route prefix

// // function App() {
// //   return (
// //     <>

// //       {/* <NavBar /> */}
// //       <Routes>

// //         <Route element={<NavBar />}>
// //           <Route path="/" element={<Home />} />

// //           <Route path="/in">

// //             <Route path="/in/user">


// //               <Route path="/in/user/about" element={<About />} />
// //               <Route path="/in/user/login" element={<Login />} />

// //             </Route>
// //           </Route>

// //         </Route>




// //         <Route path="/college" element={<College />}>
// //           <Route index element={<Student />} />
// //           <Route path="teacher" element={<Teacher />} />
// //           <Route path="department" element={<Department />} />
// //         </Route>
// //         {/* <Route path="/*" element={<PageNotFound />}/> */}
// //         <Route path="/*" element={<Navigate to={"/"} />} />
// //       </Routes>
// //     </>
// //   )
// // }

// // export default App


// //dynamic routing

// // function App() {
// //   return (
// //     <>

// //       {/* <NavBar /> */}
// //       <Routes>

// //         <Route element={<NavBar />}>
// //           <Route path="/" element={<Home />} />

// //           <Route path="/in">

// //             <Route path="/in/user">


// //               <Route path="/in/user/about" element={<About />} />
// //               <Route path="/in/user/login" element={<Login />} />

// //             </Route>
// //           </Route>

// //         </Route>
// //         <Route path="/user/" element={<User />} />
// //            <Route path="/user/:id/:name/:age" element={<Userdetail />} />
// //         <Route path="/college" element={<College />}>
// //           <Route index element={<Student />} />
// //           <Route path="teacher" element={<Teacher />} />
// //           <Route path="department" element={<Department />} />
// //         </Route>
// //         {/* <Route path="/*" element={<PageNotFound />}/> */}
// //         <Route path="/*" element={<Navigate to={"/"} />} />
// //       </Routes>
// //     </>
// //   )
// // }

// // export default App

// //optional segment

// // function App() {
// //   return (
// //     <>

// //       {/* <NavBar /> */}
// //       <Routes>

// //         <Route element={<NavBar />}>
// //           <Route path="/" element={<Home />} />

// //           <Route path="/in">

// //             <Route path="/in/user">


// //               <Route path="/in/user/about" element={<About />} />
// //               <Route path="/in/user/login" element={<Login />} />

// //             </Route>
// //           </Route>

// //         </Route>
// //         <Route path="/user/List?" element={<User />} />
// //            <Route path="/user/:id/:name/:age?" element={<Userdetail />} />
// //         <Route path="/college" element={<College />}>
// //           <Route index element={<Student />} />
// //           <Route path="teacher" element={<Teacher />} />
// //           <Route path="department" element={<Department />} />
// //         </Route>
// //         {/* <Route path="/*" element={<PageNotFound />}/> */}
// //         <Route path="/*" element={<Navigate to={"/"} />} />
// //       </Routes>
// //     </>
// //   )
// // }

// // export default App


// // Api-> it is stand for Application programing interface;
// // it need data from database but js can't connect with database

// // JSON-> it is js object notation
// // 1. parse()-> it convert into normal data;
// // 2.stringfy()-> it convert all the data into string

// // API Methods-> Get , Post ,Delete,Patch/put

// // fetch api-> it provide the interface for fetch the resources(reciving,requested)

// // function App()
// // {
// //   let [dataapi,setdata]=useState("")
// //   useEffect(()=>{
// //     getdata()
// //   },[])
// //   async function getdata() {

// //     let response=await fetch("https://official-joke-api.appspot.com/jokes/random")
// //     console.log(response)
// //     let data=  await response.json()
// //     console.log(data)
// //     setdata(data)
// //   }

// //   return(
// //     <>
// //    <div>
// //     {/* {
// //       dataapi.map((item,index)=>{
// //         return(
// //           <h1>{item}</h1>
// //         )
// //       })
// //     } */}
// //     {
// //       dataapi.type
// //     }
// //    <h1> {
// //       dataapi.punchline
// //     }</h1>
// //     <h2> {
// //       dataapi.id
// //     }</h2>
// //    </div>
// //     </>
// //   )
// // }

// // export default App


// function App() {
//   return (
//     <>
//       <div>
//         <ul style={{display:"flex", alignItems:"center", justifyContent:"space-evenly", listStyle:"none", }}>
//           <li><NavLink to={"/"} >UserList</NavLink></li>
//           <li><NavLink to={"/AddUser"} >AddUSer</NavLink></li>

//         </ul>
//       </div>
//       <Routes>
//         <Route path="/" element={<UserList />} />
//         <Route path="/AddUser" element={<AddUser />} />
//        <Route path="edit/:id" element={<UserEdit />} />
//         {/* <Route path="/*" element={<Navigate to={"/"} />} />//for Redirect */}
//         <Route path="/*" element={<PageNotFound />} />
//       </Routes>
//     </>
//   )
// }
// export default App

// // function App() {
// //   return (
// //     <>
      
// //       <Routes>
// //         <Route path="/" element={<UserList />} />
// //         <Route path="/AddUser" element={<AddUser />} />
// //         {/* <Route path="/*" element={<Navigate to={"/"} />} />//for Redirect */}
// //         <Route path="/*" element={<PageNotFound />} />
// //       </Routes>
// //     </>
// //   )
// // }
// // export default App

function App()
{
  return(
    <>
    <h1>hello</h1>
    {/* <Simplevalidation /> */}
    {/* <HandleForm /> */}
    {/* <HandleReducer /> */}
    <Lazy />
    </>
  )
}
export default App