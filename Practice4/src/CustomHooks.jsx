import { useState } from "react"

export default function Usetoggle(defaultval)
{

    let [value,setvalue]=useState(defaultval)

    function setval(val)
    {
        if(typeof(val)!='boolean')
        {
            setvalue(!value)
        }
        else{
            setvalue(val)
        }
    }



    return[value,setval]
}