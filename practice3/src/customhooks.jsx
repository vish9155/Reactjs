import { useState } from "react";

export default function useToggle(defaultval)
{
    let [value,setvalue]=useState(defaultval);
    function toggle(val)
    {
        if(typeof(val)!="boolean")
        {
            setvalue(!value)
            console.log(val,value)
        }
        else{
            setvalue(val)
          
        }
    }
    return[value,toggle]
}