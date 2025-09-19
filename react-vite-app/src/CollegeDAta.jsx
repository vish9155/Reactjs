import Student from "./StudentData"

function College({collegeinfo})
{
    //console.log(collegedata)
    return(
        <div>
          <h1>College Name:{collegeinfo.collegename?collegeinfo.collegename:null}</h1>
          <ul>
            <li>
                <h3>College city : {collegeinfo.city?collegeinfo.city:"City not found"}</h3>
            </li>
             <li>
                <h3>College  Id: {collegeinfo.id?collegeinfo.id:"id not found"}</h3>
            </li>
             <li>
                <h3>College Website: {collegeinfo.website?collegeinfo.website:"website not found"}</h3>
            </li>
          </ul>
          {
            collegeinfo.student.map((item)=>{
               return(
                 <div>
                    {/* <h1>{item.name?item.name:null}</h1> */}
                     < Student studentdata={item} />
                </div>
               )
            })
          }
          {/* < Student studentdata={collegeinfo} /> */}
        </div>
    )
}
export default College