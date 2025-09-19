import { useState } from "react";

function Usetoggle(defaultValue)
{
     let [toggle,settoggle]=useState(defaultValue)
     
     function setdata(val)
     {
        if(typeof val != "boolean")
        {
            settoggle(!toggle)
        }
        else{
            settoggle(val)
        }
     }


    return [toggle,setdata]
       
}
export default Usetoggle