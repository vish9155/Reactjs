
//1.method->

import Display from "./Dispaly"

// function Detail(props) {
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <h1>{props.age}</h1>
//             <h1>{props.email}</h1>
//         </div>
//     )
// }

// export default Detail

//2.method
// function Detail({name="user not found",age,email})
// {
//     return(
//         <div>
//           <h1>{name}</h1>
//           <h1>{age}</h1>
//           <h1>{email}</h1>
//         </div>
//     )
// }
// export default Detail
// //------------------------------------------------------------------------------

//ex2-> variable & object

// function Detail(props)
// {
//     return(
//         <div>
//         <h1>{props.name}</h1>
//         <h1>{props.age}</h1>
//         <h1>{props.email}</h1>
//         </div>
//     )
// }

// export default Detail

// function Wrapper()
// {
//     return     //children props are important to write any in wrapper in app.jsx the children print property
//     (
//        <div style={{color:"red",border:"2px solid pink"}}>
//        <h2>hello2</h2>

//        </div>
//     )
// }

// export default Wrapper

// function Wrapper({children},color="orange")
// {
//     return(
//         <div style={{color:"red", border:"2px solid pink", width:"1000px"}}>
//             <h1>hello</h1>
//             {children}
//         </div>
//     )
// }

// export default Wrapper

// function User({ userdata }) {
//     return (
//         <div>
//             <h3>{userdata.name}</h3>
//             <h3>{userdata.age}</h3>
//             <h3>{userdata.email}</h3>
//         </div>
//     )
// }

// export default User


// function User({ namedata, defaultdata, named,name }) {
//     return (
//         <div>

//             <h1>Hello user component as child</h1>
//             <h1>{named}</h1>
//             <button onClick={()=>{
//                 namedata(name)
//             }}>student data</button>
            
//             <button onClick={()=>{
//                 defaultdata()
//             }}>Default data</button>

//         </div>
//     )
// }

// export default User
// import{UseForwardRef} from "react"
// function User(props,userref)
// {
//     return(
//         <div>
//          <input type="text" ref={userref} />
        
//         </div>
//     )
// }
// export default UseForwardRef(User)


// function User({userref})
// {
//     return(
//         <div>
//             <input type="text" ref={userref} />
//         </div>
//     )
// }
// export default User

function User({Name})
{
    return(
        <div>
         <input type="text" onChange={(event)=>{Name(event.target.value)}} />
         
        </div>
    )
}

export default User