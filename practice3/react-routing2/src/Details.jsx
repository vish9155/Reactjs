import { NavLink, Outlet } from "react-router";

export default function Details()
{
    return(
        <>
        
        <div>
            <h1>This is  detaails page</h1>
             <NavLink to={"student"}>Student</NavLink>
             <NavLink to={"college"}>college</NavLink>

         <Outlet />

        </div>
        

        </>
    )
}