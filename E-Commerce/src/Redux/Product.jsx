import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchdata } from "./ProductSlice"
import { additem, removeitem } from "./Slice"

export default function Productdata() {
    useEffect(() => {
        dispatch(fetchdata())
    }, [])

    let dispatch = useDispatch()
    let productSelector = useSelector((state) => state.product.items)
    console.log(productSelector)
    console.log(productSelector.length)

    let cartselector = useSelector((state) => state.cart.items)
    console.log(cartselector.length)

    return (
        <>


            <div className="product-box">

                {
                   productSelector.length>0 && productSelector.map((item) => (

                        <div className="product-card" key={item.id}>

                            <div className="product-info">
                              <div className="img-box">
                                  <img src={item.thumbnail} alt="" />

                              </div>
                               <div className="product-detail">
                                 <div className="title">
                                    {item.title}
                                </div>
                                <div className="brand">
                                    {item.brand}
                                </div>
                                <div className="price">
                                    ${item.price}
                                </div>
                                <div className="rating">
                                    {item.rating}
                                </div>
                               </div>
                                 {
                                cartselector.length>0 && cartselector.find(cartitem=> cartitem.id === item.id) ?
                                    <button className="btnr" onClick={() => dispatch(removeitem(item))}>Remove to Cart</button>
                                    :

                                    <button className="btn" onClick={() => dispatch(additem(item))}>Add to Cart</button>
                            }
                            </div>
                           
                        </div>
                    ))
                }
            </div>

        </>
    )
}
