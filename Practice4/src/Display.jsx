export default function Dispaly({data,display}){
    return(
        <>
        <button onClick={()=>{display(!data)}}>toggle</button>
        </>
    )
}