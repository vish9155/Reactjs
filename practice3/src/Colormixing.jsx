import { useState } from "react"

export default function ColorMixing() {
    let saved = JSON.parse(localStorage.getItem("data"))

    let [r, setr] = useState(saved.r ? saved.r : 0)

    let [g, setg] = useState(saved.g ? saved.g : 0)

    let [b, setb] = useState(saved.b ? saved.b : 0)

    console.log(r, g, b)

    function saveddata() {
        localStorage.setItem("data", JSON.stringify({ r, g, b }))
    }

    return (
        <>
            <div style={{ backgroundColor: 'rgba(' + r + ',' + g + ',' + b + ')', width: "100px", height: "100px" }}>

            </div>
            <input type="range" max={"255"} value={r} onChange={(event) => { setr(event.target.value) }} />
            <br />
            <input type="range" max={"255"} value={g} onChange={(event) => { setg(event.target.value) }} />
            <br />
            <input type="range" max={"255"} value={b} onChange={(event) => { setb(event.target.value) }} />
            <br />
            <button onClick={saveddata}>saved</button>
        </>
    )
}