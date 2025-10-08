import { useContext } from "react"
import { SubjectContext } from "./CreateContext"

export default function Subject()
{

    let subject=useContext(SubjectContext)

    return(
        <>
        <p>Subject Component </p>
        <span>Subjects:{subject}</span>
        </>
    )
}