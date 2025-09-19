import { useContext } from "react"
import { SubjectContext } from "./ContextApi"



function Subject()
{
    let subject=useContext(SubjectContext)
    return(
        <>
        <div style={{background:"red", height:"200px"} }>
     
       <h1>Subject component:{subject}</h1>
       

        </div>
        </>
    )
}

export default Subject

