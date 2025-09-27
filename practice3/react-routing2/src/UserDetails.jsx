import { useParams } from "react-router"

export default function UserDetails()
{
//     let paramsdata=useParams()
//     console.log(paramsdata)
//    console.log(paramsdata.id) //this is write but it short method is

let {id,name}=useParams()
console.log(id)
    return(
        <>
        <div>
            <h2>params id:{id}</h2>
            <h2>params name:{name}</h2>
        </div>
        </>
    )
}