import { NavLink, Outlet } from "react-router";

export default function Navbar() {
    return (
        <>

            <div className="nav">
                <div className="logo"><NavLink className="link" to={"/"}>Logo</NavLink></div>
                <ul>
                    <li ><NavLink className="link" to={'/'}>Home</NavLink></li>
                    <li ><NavLink className="link" to={"in/user/about"}>About</NavLink></li>
                    <li ><NavLink className="link" to="/sevices">Services</NavLink></li>
                    <li ><NavLink className="link" to="">Login</NavLink></li>
                    <li ><NavLink className="link" to={"/details"}>Details</NavLink></li>
                    <li ><NavLink className="link" to={"/user"}>User</NavLink></li>
                       <li ><NavLink className="link" to={"/user/list"}>list</NavLink></li>
                    
                </ul>

            </div>
            <Outlet />

        </>
    )
}