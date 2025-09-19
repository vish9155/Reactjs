import style from "./Css/Todo.module.css"
function Todo() {

    // let input=document.querySelector(".inputfield")
    // let btn=document.querySelector(".btnfield")
    // let listcontainner=document.querySelector(".listcontainner")

    // btn.addEventListener("click",()=>{
    //     let inputbox=input.value

    //     let elem=document.createElement("li");
    //     elem.innerHTML=inputbox
    //     listcontainner.appendChild(elem)

    // })


    return (
        <div>
            <div className={style.containner}>
                <div className={style.todoapp}>
                    <div className={style.imgtittle}>
                        <h2 className={style.tittle}>Todo_List <img src="./public/t.png" height="100px" width="100px" alt="" /></h2> 
                    </div>

                    <div className={style.inputbtnfield}>
                        <input type="text" className={style.inputfield} />
                        <button type="button" className={style.btnfield}>Add</button>
                    </div>
                     
                    
                        <ul className={style.listcontainner}>
                            <li className={style.checked}>Hello</li>
                            <li>hello2</li>
                            <li>hello3</li>
                        </ul>
                     

                </div>
            </div>
        </div>
    )
}

export default Todo