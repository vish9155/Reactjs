import { useEffect, useState } from "react"

function Clock({colorprop})
{
    let [time,settime]=useState(0)
    let [date,setdate]=useState(0)

    useEffect(()=>{
        setInterval(() => {
            settime(new Date().toLocaleTimeString())
        },1000);
    },[])

    useEffect(()=>{
        setInterval(() => {
            setdate(new Date().toDateString())
        },1000);
    },[])


    return(
        <div style={{display:"flex", justifyContent:"space-evenly"}}> 
           <h1 style={{color:colorprop, fontFamily:"fantasy", fontSize:"3rem", textAlign:"center"}}>{time?time:null} <span>{date?date:null}</span> </h1>
        </div>
    )
}
export default Clock