import { NavLink } from "react-router";
import Addtocart from "./Addtocart";

export default function Header() {
    return (
        <>
            <nav>
                <ul>
                    <div className="logo"> <li><NavLink className="link">Sudhati Store</NavLink></li></div>
                    <div className="head">
                        <li><NavLink to={"/"} className="link">Home</NavLink></li>
                        <li><NavLink to={"/about"} className="link">About</NavLink></li>
                        <li><NavLink to={"/login"} className="link">Login</NavLink></li>
                    </div>
                    <Addtocart />
                </ul>
            </nav>
        </>
    )
}