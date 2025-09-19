import { useState } from "react"
function App() {
  let [userdata,setuserdata]=useState(
    {Name:"",
    Email:"",
    Password:"",
    Confirm_Password:""}
  )

  

  function handledata(event)
  {
   setuserdata({...userdata,[event.target.name]:event.target.value})
  
  }

function showhide()// show hide button
{
let password=document.querySelector("#pass")
let btn=document.querySelector("#btn")  
 let type=password.getAttribute("type")

 if(type==="password")
 {
     password.setAttribute("type","text")
      btn.innerText="Hide"
 }
 else{
  password.setAttribute("type","password")
 btn.innerText="Show"
 }

}
  function submitdata(event) 
  {
   event.preventDefault();
   alert("Registration successfull")
  }

  return (
    <div>
      {/* <h1>{userdata.Name}</h1> */}
      <div className="Containner" style={{display:"flex",alignItems:"center",justifyContent:"center", background:"purple", height:"100vh", width:"100vw", color:"#222", borderRadius:"10px"}}>
        <div className="form-box" style={{background:"white", width:"50%", borderRadius:"20px"}}>
          <h2 style={{textAlign:"center", color:"green"}}>Create an Account</h2>
        
        <form onSubmit={submitdata}>
          <div className="input-field-group" style={{display:"flex", alignItems:"center",justifyContent:"center", flexDirection:"column"}}>
               <div className="input-group" style={{width:"50%"}} >
            <label htmlFor="Name" style={{display:"flex"}}>Name</label>
            <input type="text" name="Name" onChange={handledata}  placeholder="Enter FullName" style={{border:"1px solid gray",background:"white",color:"black",width:"90%",padding:"5px",borderRadius:"5px"}}/>
          </div>
          <div className="input-group"  style={{width:"50%"}}>
            <label htmlFor="email" style={{display:"flex"}}>Email</label>
            <input type="email" name="Email" onChange={handledata} placeholder="Enter Email" style={{border:"1px solid gray",background:"white",color:"black",width:"90%",padding:"5px",borderRadius:"5px"}} />
          </div>
          <div className="input-group" style={{width:"50%"}}>
            <label htmlFor="password" style={{display:"flex"}}>Password</label>
            <input type="password" name="Password" onChange={handledata} id="pass" placeholder="Create Password" style={{border:"1px solid gray",background:"white",color:"black",width:"90%",padding:"5px",borderRadius:"5px"}} />
             {/* <button type="button" id="btn" onClick={showhide}>Show</button> */}
          </div>
          <div className="input-group" style={{width:"50%"}}>
            <label htmlFor="confirm-password" style={{display:"flex"}}>Confirm Password</label>
            <input type="password" name="confirm_Password" onChange={handledata} id="cp" placeholder="Enter Confirm Password" style={{border:"1px solid gray",background:"white",color:"black",width:"90%",padding:"5px",borderRadius:"5px"}} />
           </div>
          </div>
        <div id="btn-field" style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"15px", padding:"10px"}}>
            <button type="submit"  style={{width:"52%",textAlign:"center", marginRight:"10px", color:"#eaeaea",background:"blue"}}>Register Now</button>
        </div>
          <div className="login" style={{display:"flex",alignItems:"center", justifyContent:"center"}}>
            <p>Already have an account ?</p>
            <a href="#">Login</a>
          </div>

        </form>
        </div>
      </div>
      
    </div>
  )
}

export default App