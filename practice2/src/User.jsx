// import App from "./App"

import { useEffect } from "react"



// import { useEffect } from "react"

// function User({name,joke,game,children,color})
// {
//     return(
//         <div >
//       {/* <h1 style={{color:"red",fontSize:"3rem"}}> This is User Component</h1>
//       <h3 style={{color:"pink",fontSize:"3rem"}}>Name:{name?name:null}</h3>
//       <h3 style={{color:"aqua",fontSize:"3rem"}}>Joke:{joke?joke:null}</h3>
//       <h3 style={{color:"gray",fontSize:"3rem"}}>Game:{game?game:null}</h3>
//         {children} */}

//          <div style={{color:color}}>
//             {children}
//          </div>

//         </div>
//     )
// }

// export default User

// function User({ propeffect, propeffect2 }) {

//   function counter() {
//     console.log(`this is counter function`)
//   }
//   // counter()
//   function datacount() {
//     console.log(`this is datacount function`)
//   }
// datacount()

// useEffect(()=>{
//   datacount()
//   counter()
// })

// useEffect(()=>{
//   datacount()
//   counter()
// },[])

// useEffect(()=>{
//   datacount()
//   counter()
// },[propeffect])

//   useEffect(()=>{
//     datacount()
//     counter()
//   },[propeffect,propeffect2])
//   return (
//     <div>

//     </div>
//   )
// }

// export default User

// function User({ children, name, handle, togglehide, val, hidedata }) {
//   return (
//     <>
//       <input type="text" onChange={(event) => { hidedata(event.target.value) }}  ref={name} />
//       <br />
//       <br />
//       <button onClick={handle}>click</button>
//       <br />
//       <br />
//       <button onClick={togglehide}>toggle</button>
//       <br />
//       <br />
//       {/* <button onClick={()=>{hidedata("")}}>hide </button>//clear */}
    
//     </>
//   )
// }
// export default User

// function User({setval})
// {
//   return(
//     <>
//     <input type="text" onChange={(event)=>{setval(event.target.value)}} />
//     </>
//   )
// }

// export default User

function User({data,count})
{
  function abc()
  {
    console.log(`this is abc funtion`)
  }
  function xyz()
  {
    console.log(`this is xyz funtion`)
  }

  // useEffect(()=>{
  //   abc()
  //   xyz()
  // })

  // useEffect(()=>{
  //   abc()
  //   xyz()
  // },[])

  // useEffect(()=>{
  //   abc()
  //   xyz()
  // },[data])

  // useEffect(()=>{
  //   abc()
  //   xyz()
  // },[count])

  useEffect(()=>{
    abc()
    xyz()
  },[data,count])

  // abc()
  // xyz()

  return(
    <>

    </>
  )
}

export default User
