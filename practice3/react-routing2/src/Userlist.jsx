import { NavLink } from "react-router"

export default function Userlist() {
    let data = [
        { id: 1, name: 'vishal' },
        { id: 2, name: 'vivek' },
        { id: 3, name: 'manish' },
        { id: 4, name: 'shalini' },
        { id: 5, name: 'Kushal' },
    ]
    return (
        <>
         <h1>Uselist</h1>
         {
            data.map((item)=>{
                return(
                    <div key={item.id}>
                        
                        <NavLink to={"/user/"+item.id+"/"+item.name}>{item.name}</NavLink>
                    </div>
                )
            })
         }
        </>
    )
}