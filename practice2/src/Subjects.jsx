import { useContext } from "react"
import { SubjectContext } from "./Context"

function Subject({color})
{
    let suject=useContext(SubjectContext)

    return(
        <>
        <h1 >Subject: <span style={{color:color}}>{suject}</span> </h1>
        </>
    )
}

export default Subject