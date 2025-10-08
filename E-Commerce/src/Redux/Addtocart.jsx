import { useSelector } from "react-redux";
import { NavLink } from "react-router";

export default function Addtocart() {
     let cartselector = useSelector((state) => state.cart.items)
    console.log(cartselector.length)
    return (
        
        <>
            <div className="cart">
                <NavLink to="/cart">

                    <img src="https://cbx-prod.b-cdn.net/COLOURBOX29690527.jpg?width=800&height=800&quality=70" alt="" />
                    <span className="cart-item-count">{cartselector.length}</span>
                </NavLink>
            </div>
        </>
    )
}