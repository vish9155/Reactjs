/*

------------------------NOTE--------------------------------

1. if add 404 error ->you can add path="/*" in route at the last;

2.if you redirect if route not found you add path="/*" and element={<Nevigate to={path_nane you redirect  />}} in route . it useed when you import nevigate from react-router

*/

function PageNotFound()
{
    return(
        <>
        <h1 style={{textAlign:"center", fontSize:"2rem", margin:"60px"}}>Page Not Found</h1>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/008/568/878/small_2x/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space-site-crash-on-technical-work-web-design-template-with-chatbot-mascot-cartoon-online-bot-assistance-failure-vector.jpg" alt="" style={{textAlign:"center",height:"220px", width:"270px", fontSize:"2rem", margin:"60px auto auto 500px"}} />
        </>
    )
}
export default PageNotFound