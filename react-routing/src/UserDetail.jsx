import { NavLink, useParams } from "react-router"

export default function Userdetail() {
    let parmsdata = useParams()
    console.log(parmsdata)
    return (
        <>
            <h1>User detail page</h1>
            <h2>User id : {parmsdata.id }</h2>
            <h2>User Name : {parmsdata.name }</h2>
            <h2>User age : { parmsdata.age}</h2>
            <h3><NavLink to={"/user"}>back to user</NavLink></h3>

        </>
    )
} 