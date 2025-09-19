import { useState } from "react"
import style from "./TODO.module.css"
import { useEffect } from "react"

function App() {
  let [value, setvalue] = useState('')
  let [todo, settodo] = useState(() => {
    let saved = localStorage.getItem("todo")

    return saved ? JSON.parse(saved) : []

  })

  function Add() {
    if (value == "") {
      alert("please write somethings....")
    }
    else {
      settodo([...todo, {text:value, done:false}])
    }
  value=" "
  }

  function deletetodo(index) {
    let newtodo = todo.filter((_, i) => i != index)
    settodo(newtodo)
  }


  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo))

  }, [todo])

  function toogle(index)
  {
    let newtodo=[...todo];
    newtodo[index].done=!newtodo[index].done
    settodo(newtodo)
  }

  return (
    <>
      <div className={style.containner}>
        <div className={style.todo}>
          <h2 className={style.tittle}>TODO-LIST <img src="./public/t.png" alt="" /></h2> 
          <div className={style.inputbtn}>
            <input type="text" placeholder="Enter somethings......" onChange={(event) => { setvalue(event.target.value) }} />
            <button onClick={Add} className={style.btn}>Add</button>
          </div>

          <ul >
            {
              todo.map((item, index) => {
                return (
                  <li  className={item.done?style.checked:" "} key={index} onClick={()=>{toogle(index)}}>
                   <span className={style.textline}>{item.text}</span>
                  <button onClick={(e) => { e.stopPropagation(), deletetodo(index) }}>x</button> </li>

                )
              })
            }
          </ul>

        </div>

      </div>
    </>
  )
}

export default App