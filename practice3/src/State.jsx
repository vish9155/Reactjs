// State-> A state is container to store the data like varible;
// it is mutablel and store different data type value; it is used when we have import this ;
// it is rerender the the data and dynamic change the value;

import { useState } from "react"

export default function DemoState() {
    let [data, setdata] = useState([])

    function getdata(event) {
        console.log(event.target.value, event.target.checked)
        if (event.target.checked) {
            setdata([...data, event.target.value])
        }
        else {
            setdata(data.filter((i) => i != event.target.value))
        }
    }

    return (
        <>
            <input type="checkbox" value={"js"} onChange={getdata} id="js" />
            <label htmlFor="js">js</label>
            <input type="checkbox" value={"python"} onChange={getdata} id="python" />
            <label htmlFor="python">python</label>
            <input type="checkbox" value={"java"} onChange={getdata} id="java" />
            <label htmlFor="java">java</label>
            <input type="checkbox" value={"node"} onChange={getdata} id="node" />
            <label htmlFor="node">node</label>
            <input type="checkbox" value={"react"} onChange={getdata} id="react" />
            <label htmlFor="react">react</label>
            <h3>{data.toString()}</h3>
        </>
    )
}