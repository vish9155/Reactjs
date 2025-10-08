
import { NavLink } from "react-router"

export default function UserList()
{
    let obj=[{name:'vishal',id:"101"},{name:'kushal',id:'102'},{name:"Arun",id:'103'},{name:"amar",id:'103'}]

    return(
        <>
        <div>
            {
                obj.map((item,index)=>{
                    return(
                        <div key={index}>
                            <NavLink to={"/userlist/"+item.id+"/"+item.name} >{item.name}</NavLink>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}