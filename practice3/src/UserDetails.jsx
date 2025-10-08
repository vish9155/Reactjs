import { useParams } from "react-router"

export default function UserDeatails()
{
    let {id}=useParams()
    let {name}=useParams()
    console.log(id)
    return(
        <>
        <h1>{id}</h1>
        <h1>{name}</h1>
        </>
    )
}