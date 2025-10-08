import { NavLink, Outlet } from "react-router";
import "./Navbar.css"
export default function NavBar() {
    return (
        <>
            <div className="nav">
                <ul>
                    <div className="logo">
                        <li>  <NavLink to={"/"} className={"link"}>Logo</NavLink>      </li>
                    </div>
                    <div className="navbar">
                        <li>  <NavLink className={"link"} to={"/"}>Home</NavLink>      </li>
                        <li>   <NavLink className={"link"} to={"/about"}>About</NavLink>      </li>
                        <li>    <NavLink className={"link"} to={"/login"}>login</NavLink>      </li>
                        <li>   <NavLink className={"link"} to={"/college"}>college</NavLink>      </li>
                        <li>   <NavLink className={"link"} to={"/userlist"}>userlist</NavLink>      </li>
                             <li>   <NavLink className={"link"} to={"userlist/list"}>list</NavLink>      </li>
                    </div>

                </ul>

            </div>
            <Outlet />
        </>
    )
}