import { NavLink } from "react-router"

export default function User()
{
    let user=[{
        name:"vishal",
        age:20,
        id:1
    },
   {
    name:'kushal',
    age:23,
    id:2
    },

    {
        name:'manish',
        age:23,
        id:3
    }
]
return(
    <>
    <h1>USERLIST</h1>
    {
        user.map((item,index)=>{
            return(
                <>
                
                {/* <h3>{item.age}</h3> */}
                <h4 key={item.id}><NavLink to={"/user/"+item.id+"/"+item.name+"/"+item.age}>{item.name}</NavLink></h4>
                </>
            )
        })
    }
    </>
)
}