function Student({ studentdata }) {
    //console.log(studentdata);

    return (
        <div>
            <h1>Student related data............................</h1>
            {/*          
         {
            studentdata.map((passdata)=>{
                return(
                    <div>
                        <h1>{passdata.name?passdata.name:null}</h1>
                    </div>
                )
            })
         } */}

            <div>

                <ol>
                    <li>
                        <h3>StudentName: {studentdata.name ? studentdata.name : null}</h3>
                    </li>
                    <li>
                        <h3>StudentAge: {studentdata.age ? studentdata.age : null}</h3>
                    </li>
                    <li>
                        <h3>StudentEmail: {studentdata.email ? studentdata.email : null}</h3>
                    </li>
                </ol>

            </div>
        </div>
    )
}
export default Student