import {Link} from "react-router"
import  "./NavBAr.css"
function NavBar() {
    return (
        <>
            <div className="main">
                <div className="logo"><Link className="link" to={"/"}> <h2>LOGO</h2></Link></div>
                <div className="navdata">
                    <ul>
                        <li><Link className="link" to="/">Home</Link></li>
                        <li><Link className="link" to="/about">About</Link></li>
                        <li><Link className="link" to="/login">Login</Link></li>
                        <li><Link className="link" to="/college">College</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar