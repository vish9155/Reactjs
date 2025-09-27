export default function Wrapper({children,color})
{
    return(
        <>
        <h1>hello wrapper</h1>
        <h1 style={{color:color}}>{children}</h1>
        </>
    )
}