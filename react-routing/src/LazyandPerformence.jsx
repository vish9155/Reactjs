import { lazy, Suspense, useState } from "react";
import HandleForm from "./ValidationUsingActionState";
// const FormPage = lazy(() => import("./ValidationUsingActionState") )



export default function LAZY() {
    let [load, setload] = useState(false)

    return (
        <>

            <div>
                <h1>lazy loading</h1>
                
                {/* //    { load ? <Suspense fallback={<h3>Loading...</h3>}><FormPage /></Suspense>:null} */}

{
    load?<HandleForm /> : null
}

                   <button onClick={()=>{setload(true)}}>click</button>
                
            </div>

        </>
    )

}