
/* 1.BrowserRouter->it is a component to enables the client side rounting based on browser history api;

//  client-side-routing->the browser are not referesh go to the new route ;

//  server-side-routing->the browser are refereh go to the new route;

2.Routes-> it is responsible to the rerendring to appropiriate component based on current url;

3.Route-> each route component is define the path  and rerender the component that path is matched

4. Link -> it is a link for navigation to 1 page to another

------------------------NOTE--------------------------------

1. if add 404 error ->you can add path="/*" in route at the last;

2.if you redirect if route not found you add path="/*" and element={<Nevigate to={path_nane you redirect  />}} in route . it useed when you import nevigate from react-router

*/
// import { BrowserRouter, Routes, Route, Link } from "react-router"
// function App() {
//   return (
//     <>

import { Route, Routes, Navigate } from "react-router";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import NavBar from "./NavBar";
import College from "./College";
import Student from "./Student";
import Teacher from "./Teacher";
import Department from "./Department";
import PageNotFound from "./PageNotFound";


//       <BrowserRouter>
//         <h1>hello</h1>
//         <Link to={'/'}>Home</Link>
//         <Link to={"/about"}>About</Link>
//         <Link to={"/login "}>Login</Link>
//         <Routes>
//           <Route path="/" element={<h1>Home</h1>} />
//           <Route path="/about" element={<h1>about</h1>} />
//           <Route path="/login" element={<h1>login</h1>} />
//         </Routes>
//       </BrowserRouter>

//     </>
//   )
// }

// export default App

function App() {
  return (
    <>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/college" element={<College />}>
          <Route path="student" element={<Student />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="department" element={<Department />} />
        </Route>
        {/* <Route path="/*" element={<PageNotFound />}/> */}
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  )
}

export default App