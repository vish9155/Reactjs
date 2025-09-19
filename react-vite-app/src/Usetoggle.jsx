import { useState } from "react"

function useToggle(defaultvalue)
{
    let [value,setvalue]=useState(defaultvalue)
    function  togglevalue(val)
    {
        if(typeof val!='boolean')
        {
            setvalue(!value)
        }
        else{
            setvalue(val)
        }
    }
    return[value,togglevalue]
}
export default useToggle