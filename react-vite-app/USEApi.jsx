import { response } from "express"
import { Suspense } from "react"

let getdata = () => {
    fetch("http://localhost:3000/users").then((response) => {
        response.json()
    })
}

let usedata = getdata()

export default function USEapi() {
    return (
        <>
            <h1>This is Use api</h1>
            <Suspense fallback={<h1>Loading.....</h1>}><Users usedata={usedata} /></Suspense>
        </>
    )
}

export function Users({ usedata }) {
    return (
        <>
            <div>
                {
                    usedata.map((item, index) => {
                        return (
                            <div key={index}>
                                <h1>{item}</h1>
                            </div>
                        )

                    })
                }
            </div>
        </>
    )
}