import { lazy, Suspense, useState } from "react";
// import HandleForm from "./ValidationUsingActionState";
let Formpage = lazy(() => {
    import("./ValidationUsingActionState")
})
export default function Lazy() {
let [load,setload]=useState(false);

return(
    <>
    <h1>Lazy loading</h1>
    {load?<Suspense fallback={"loading..."}><Formpage /> </Suspense>:null}
    <button onClick={()=>{setload(true)}}>click</button>
    </>
)



}