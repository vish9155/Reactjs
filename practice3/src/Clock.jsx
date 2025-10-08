// import { useEffect, useState } from "react"

// export default function Clock({colors}) {

//     let [time, settime] = useState(0)

//     useEffect(() => {
//         setInterval(() => {
//             settime(new Date().toLocaleTimeString())
//         }, 1000)
//     }, [])

//     return (
//         <>
//             <h1>Hello</h1>
//             <h1 style={{color:colors}}>{time}</h1>
           

//         </>
//     )
// }


import { useContext, useEffect, useState } from "react"
import { Colorsdata } from "./contextApi"

export default function Clock({}) {

    let [time, settime] = useState(0)

    let colorsdata=useContext(Colorsdata)

    useEffect(() => {
        setInterval(() => {
            settime(new Date().toLocaleTimeString())
        }, 1000)
    }, [])

    return (
        <>
            <h1>Hello</h1>
            <h1 style={{color:colorsdata}}>{time}</h1>
           

        </>
    )
}

