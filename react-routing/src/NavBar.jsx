import {NavLink, Outlet} from "react-router"
import  "./NavBAr.css"
function NavBar() {
    return (
        <><div>
            <div className="main">
                <div className="logo"><NavLink className="link" to={"/"}> <h2>LOGO</h2></NavLink></div>
                <div className="navdata">
                    <ul>
                        <li><NavLink className="link" to="/">Home</NavLink></li>
                        <li><NavLink className="link" to="/in/user/about">About</NavLink></li>
                        <li><NavLink className="link" to="/in/user/login">Login</NavLink></li>
                        <li><NavLink className="link" to="/college">College</NavLink></li>
                        <li><NavLink className={"link"} to={"/user/"}>User</NavLink></li>
                        <li><NavLink className={"link"} to={"/user/list"}>List</NavLink></li>  
                    </ul>
                </div>
            </div>
            <Outlet />
            </div>
        </>
    )
}

export default NavBar