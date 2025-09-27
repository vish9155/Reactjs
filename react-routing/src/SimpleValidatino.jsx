import { useState } from "react"

function Simplevalidation()
{
    let [name,setname]=useState('')
    let [password,setpass]=useState('')
    let [nameerr,setnameerr]=useState('')
    let [passworderr,setpasserr]=useState('')

    function getdata(event)
    {
        let namedata=event.target.value;
     
        console.log(namedata)
        if(namedata.length>5)
        {
            setnameerr("please enter ony 5 character name")
        }
       
        else{
            setnameerr("")
          
        }
    }
 function handle(event)
 {
     let passdata=event.target.value
        let regex=/[A-x0-9]+$/i
        console.log(passdata)
    
         if(!regex.test(passdata))
        {
           setpasserr("please enter only character and number data")
        }
        else{
          
            setpasserr("")
        }

 }
    return(

        <>
        <h1>Simple Validation on Form Using State</h1>
       
       <input type="text"  onChange={getdata} placeholder="Enter your name...." />
       <span>{nameerr}</span>
       <br />
       <br />
       <input type="text"   onChange={handle} placeholder="Enter password....."/>
       <span>{passworderr}</span>
       <br /><br />
       <button disabled={nameerr || passworderr}>Submit</button>

        </>
    )
}
export default Simplevalidation