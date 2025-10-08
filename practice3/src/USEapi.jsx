import { Suspense, use } from "react"

let fetchdata = () => fetch("http://localhost:3000/users").then((response) => response.json())
console.log(fetchdata())
let userdata = fetchdata()

export default function USEAPI() {
    return (
        <>
            <div>
                {
                    <Suspense fallback={<h3>Loading..........</h3>}><Usersdata userdata={userdata} /></Suspense>
                }
            </div>
        </>
    )
}


export function Usersdata({ userdata }) {
    let usedata = use(userdata)
    console.log(usedata.name)
    return (

        <>
            <h1>hello</h1>
            <div>
                {
                    usedata.map((value) => {
                        return (
                            <div key={value.id}>
                                <h1>{value.name}</h1>
                                <h1>{value.age}</h1>
                                <h1>{value.course}</h1>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}