import { useEffect, useState } from "react"

function Clock({colorprops})
{
    let [time,settime]=useState(0)
   //  console.log(props)
    useEffect(()=>{
        setInterval(() => {
            settime(new Date().toLocaleTimeString())
        },1000);
    },[])

    return(
        <div>
          <h1 style={{color:colorprops,height:"250px",width:"300px"}}>{
            time?time:null
          }</h1>
        </div>
    )
}

export default Clock