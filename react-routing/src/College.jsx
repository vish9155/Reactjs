/* 

1.NavLink mai hame to="pathname" mai / nahi dena hota hai
2.Outlet -> Outlet are used to display child route

*/

import { NavLink, Outlet } from "react-router"
function College() {
    return (
        <>
            <h1>College</h1>
            <NavLink to={"Student"}>Student</NavLink>
            <NavLink to={"Teacher"}>Teacher</NavLink>
            <NavLink to={"Department"}>Department</NavLink>
          <Outlet />

        </>
    )
}

export default College