import { NavLink, Outlet } from "react-router";

export default function College()
{
    return(
        <>
        <h1>This Is College Page</h1>
       <div>
         <NavLink to={""}>Students</NavLink>
        <NavLink to={"/college/departments"}>departments</NavLink>
        <Outlet />
       </div>
        </>
    )
}