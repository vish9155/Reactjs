import { Outlet } from "react-router";

 function About()
{
    return(
        <>
        
        <div>
            <h1>This is  About page</h1>
        <Outlet />
        </div>
        
        </>
    )
}
export default  About