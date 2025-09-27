// We can use map for loop method

import { data } from "react-router"

export default function Loop()
{
    let collegedata=[
        {
            collegename:"iet",
            city:"iet alwar",
            website:"www.iet.com",
            student:[
               {
                name:"vishal",
                roll:"38c2022",
                course:"Bca",
                city:"patna"
               },
                {
                name:"vishal",
                roll:"38c2022",
                course:"Bca",
                city:"patna"
               },
                {
                name:"vishal",
                roll:"38c2022",
                course:"Bca",
                city:"patna"
               }
               

            ]
        }, {
            collegename:"iit",
            city:"iit delhi",
            website:"www.iit.com",
            student:[
               {
                name:"vishal",
                roll:"38c2022",
                course:"Bca",
                city:"patna"
               },
                {
                name:"vishal",
                roll:"38c2022",
                course:"Bca",
                city:"patna"
               },
                {
                name:"vishal",
                roll:"38c2022",
                course:"Bca",
                city:"patna"
               }
               

            ]
        }, {
            collegename:"iim",
            city:"iim ahemdabad",
            website:"www.iim.com",
            student:[
               {
                name:"vishal",
                roll:"38c2022",
                course:"Bca",
                city:"patna"
               },
                {
                name:"vishal",
                roll:"38c2022",
                course:"Bca",
                city:"patna"
               },
                {
                name:"vishal",
                roll:"38c2022",
                course:"Bca",
                city:"patna"
               }
               

            ]
        }
        
    ]

    return(
        <>
        {
            collegedata.map((item,index)=>{
                return(
                    <div key={index}>
                        <h1>{item.collegename}</h1>
                        <h3>{item.city}</h3>
                        <h4>{item.website}</h4>
                        <span>{item.student.map((item,index)=>{
                            return(
                                <div key={index}>
                                       <h5>{item.name}</h5>
                                       <h6>{item.city}</h6>
                                       <h6>{item.course}</h6>
                                       <h6>{item.roll}</h6>
                                </div>
                            )
                        })}</span>
                    </div>
                )
            })
        }
        </>
    )
}