import { useDispatch, useSelector } from "react-redux"
import {useNavigate} from 'react-router'
import { clearall, decreaseQunatity, increaseQunatity, removeitem } from "./Slice"

export default function CartListing() {
    let dispatch = useDispatch()
    let navigate=useNavigate()
    let cartselector = useSelector((state) => state.cart.items)
    console.log(cartselector)
    console.log(cartselector.length)
    let handleplaceholder=()=>{
        if(cartselector.length===0)
       { 
        alert("Your Cart Is Empty Please Add Item In Your Cart  ")
        navigate("/")
    }
        else
       { 
       localStorage.clear()
        dispatch(clearall(cartselector))
        alert("Your Order Is SuccessFully Placed.... Thank You ! ")
        navigate("/")
    }
    }
    return (
        <>
            <div className="carts">

                <div className="cart-content">
                    <div className="cart-tittle">Cart Items:  <span className="item.length">{cartselector.length}</span></div>

                    {
                        cartselector.length > 0 && cartselector.map((item) => (

                            <div className="cart-box" key={item.id}>
                                <img src={item.thumbnail} alt="" />
                                <div className="cart-info">
                                    <h2 className="title">{item.title}</h2>
                                    <h3 className="brand">{item.brand}</h3>
                                    <h2 className="price">${(item.quantity ? item.price * item.quantity : item.price).toFixed(2)}</h2>
                                </div>
                                <div className="quantity">
                                    <button className="decrement" onClick={() => dispatch(decreaseQunatity(item.id))}>-</button>
                                    <span className="number">{item.quantity > 0 ? item.quantity : 1}</span>
                                    <button className="increment" onClick={() => dispatch(increaseQunatity(item.id))}>+</button>
                                </div>

                                <button className="btnr2" onClick={() => dispatch(removeitem(item))}>Remove</button>

                            </div>
                        ))
                    }
                    <div className="total">
                       
                        <span className="total-price">Total Price: ${(cartselector.length > 0 && cartselector.reduce((sum, item) => item.quantity ? sum + item.quantity * item.price : sum + item.price, 0).toFixed(2))}</span>
                    </div>
                    <button className="btnr" onClick={handleplaceholder}>Place Order</button>
                </div>
            </div>
        </>
    )
}