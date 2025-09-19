import { useContext } from "react";
import { Contextapi } from "./ContexData";

function Studentdata()
{
    let data=useContext(Contextapi)
    return(
        <>
         <h1>StudentData:{data}</h1>
        </>
    )
}
export default Studentdata