// it can improve the performence of application. and you open any component in lazy loading
// it can use lazy(()=>import('./filename))
// and use suspense to load data

import { Suspense } from "react"
import { useState } from "react"
import { lazy } from "react"

let Data=lazy(()=>import("./ActionState"))

export default function LAzyLoad()
{
let [load,setload]=useState(false)

    return(
        <>
        <div>
            {
                load?<Suspense fallback={<h1>Loading.......</h1>} ><Data /></Suspense>:null     }
        </div>
        <button onClick={()=>{setload(true)}}>click</button>
        </>
    )
}