import Student from "./Student"
function College({college})
{
    return(
        <div>
        {/* <h1>This is College component</h1> */}
        <div>
            <h1 style={{fontSize:"3rem", color:"gray"}} >College Name : {college.college}</h1>
            <ul>
                <li>
                    <h3 style={{fontSize:"2rem", color:"green"}}>College Id: {college.id}</h3>
                </li>
                <li>
                    <h3 style={{fontSize:"2rem", color:"aqua"}} >College City : {college.city}</h3>
                </li>
                <li>
                    <h3 style={{fontSize:"2rem", color:"blue"}}>College Website: {college.website}</h3>
                </li>
               
            </ul>
        </div>
        {
            college.student.map((item2)=>{
                return(
                   <div key={item2.roll}>
                     <Student studentdata={item2} />
                   </div>
                )
            })
        }
       
        </div>
    )
}

export default College