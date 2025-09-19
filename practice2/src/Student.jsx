// import style from "./Css/Student.module.css"
// function Student({studentdata})
// {
//     // console.log(studentdata)
//     return(
//         <div>
//         {/* <h1>This is Student component</h1> */}

//         <ul>
//             <li className={style.sname} >
//                 <h3>Student Name : {studentdata.name}</h3>
//                 <ul>
//                     <li className={style.scourse}> 
//                         <h3>Student Course : {studentdata.course}</h3>
//                     </li>
//                      <li className={style.sroll}> 
//                         <h3>Student Roll : {studentdata.roll}</h3>
//                     </li>
//                 </ul>
//             </li>
//         </ul>

//         </div>
//     )
// }

// export default Student

function Student({namefun,name})
{
    return(
        <div>
        {/* <h1>{name}</h1> */}
        <button onClick={()=>{namefun(name)}}>click</button>
        </div>
    )
}

export default Student