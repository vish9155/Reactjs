/* 

1.NavLink mai hame to="pathname" mai / nahi dena hota hai
2.Outlet -> Outlet are used to display child route

*/

// Layout or index route-> if you want to see page in other page you make <route element={<NavBar />}
//                           you can provide which route that you seen in same page and other route can be display in other page
//                         you can display by default any child route you give index path delete or give navlink to="" empty 

import { NavLink, Outlet } from "react-router"
function College() {
    return (
        <>
            <h1>College</h1>
            <h3><NavLink to={"/"}>go to home page</NavLink></h3>
            <NavLink to={""}>Student</NavLink>
            <NavLink to={"Teacher"}>Teacher</NavLink>
            <NavLink to={"Department"}>Department</NavLink>
          <Outlet />

        </>
    )
}

export default College