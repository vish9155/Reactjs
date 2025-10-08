import { BrowserRouter, Route, Routes } from "react-router"
import Header from "./Redux/Header"
import Productdata from "./Redux/Product"
import CartListing from "./Redux/CartListing"
//import Addtocart from "./Addtocart"
export default function App() {
    return (
        <>
            <BrowserRouter>
            <Header />
                <Routes>
                   <Route path="/" element={<Productdata />}></Route>
                   <Route path="/about" element={<h1>About</h1>}></Route>
                   
                   <Route path="/cart" element={<CartListing />}>
                   
                   </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}