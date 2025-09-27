// BrowserRouter-> it is enabled the client side server routing using browser history api;

import { Navigate, Route, Routes } from "react-router";
import Navbar from "./Navbar";

import Home from "./Home"
import About from "./About"
import Details from "./Details"
import Login from "./Login"
import Page from "./Page"
import "./Navbar.css"
import Student from "./Student";
import College from "./College";
import Userlist from "./Userlist";
import UserDetails from "./UserDetails";


// note-> in server-side-rounting the if you go new route then browser is refersh

// Routes -> it is reesponsible to rerender the appropiriate component based on current url;

// Route -> it is define the path each route  component the component are rerender when path is matched;

// navlink-> it is used for navigation to 1 page to another page;

// outlet -> it is used to display child route

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>

        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="in">
          <Route path="/in/user">
          <Route path="/in/user/about" element={<About />} />
          </Route>
          </Route>
          <Route index element={<Login />} />


        </Route>

        <Route path="/details" element={<Details />}>
          <Route path="student" element={<Student />} />
          <Route path="college" element={<College />} />
        </Route>
         <Route path="/user/list?" element={<Userlist />} />
         <Route path="/user/:id/:name?" element={<UserDetails />} />
         
        {/* <Route path="/*" element={<Page />} /> */}
        {/* <Route path="/*" element={<Navigate to={"/login"} />} /> */}

      </Routes>
    </>
  )
}

export default App