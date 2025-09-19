import { useState } from "react"
import Subject from "./Subjects"

function Color() {
    let [color, setcolor] = useState("green")
    return (
        <>
            <select onClick={(event) => { setcolor(event.target.value) }}>
                <option value="yellow">yellow</option>
                <option value="purple">purple</option>
                <option value="aqua">aqua</option>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="pink">pink</option>
                <option value="maroon">maroon</option>
            </select>
            <Subject color={color} />
        </>
    )
}

export default Color