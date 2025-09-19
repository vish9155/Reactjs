function Wrap({children,color})
{
    return(
        <div style={{color:color,background:"green",margin:"10px", padding:"10px", border:"2px solid black" ,borderRadius:"50px",textAlign:"center"}}>
           {children}
        </div>
    )
}
export default Wrap