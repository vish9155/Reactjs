
import { use } from "react"
import { Suspense } from "react"

let getdata = () => {
    return (fetch("http://localhost:3000/users").then((response) => { return (response.json()) })
    )
}
console.log(getdata())
let usedata = getdata()

export default function USEapi() {
    return (
        <>
            <h1>This is Use api</h1>
            <Suspense fallback={<h1>Loading.....</h1>}><Users usedatas={usedata} /></Suspense>
        </>
    )
}

function Users({ usedatas }) {
    let userdata = use(usedatas)
    console.log(userdata)
    return (
        <>
            <div>
                {
                    userdata.map((item, index) => {
                        return (
                            <div key={index}>
                                <h1>{item.name}</h1>
                                <h1>{item.email}</h1>
                                <h1>{item.age}</h1>
                            </div>
                        )

                    })
                }
            </div>
        </>
    )
}