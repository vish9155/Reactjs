import { lazy, Suspense, useState } from "react"

 let Data=lazy(()=>import("./USEActionsate"))


export default function LazyLoading(){

    let [load,setload]=useState(false)
    

    return(
        <>
        <h1>Hello</h1>
        <div>{load?<Suspense fallback={<h3>Loading......</h3>} ><Data /></Suspense>:null}</div>
        <button onClick={()=>{setload(true)}}>click</button>
        </>
    )
}