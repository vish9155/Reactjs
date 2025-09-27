import { useRef } from "react"
import "./Style.css"

function Calculator() {

  let display = useRef('')

  function press(val) {
    display.current.value += val
  }

  function calculate() {
    try {
      display.current.value = eval(display.current.value)
    }
    catch {
      display.current.value = "Error"
    }
  }
  function clear() {
    display.current.value = " "
  }
  return (
    <>
     <div className="containner">
      <div className="main">
       <div> <input type="text" ref={display} readOnly /></div>
       <div className="btn-field">
      <button onClick={() => { press("9") }} >9</button>
      <button onClick={() => { press("8") }} >8</button>
      <button onClick={() => { press("7") }} >7</button>
      <button onClick={() => { press("+") }} >+</button>
      <button onClick={() => { press("6") }} >6</button>
      <button onClick={() => { press("5") }} >5</button>
      <button onClick={() => { press("4") }} >4</button>
      <button onClick={() => { press("-") }} >-</button>
      <button onClick={() => { press("3") }} >3</button>
      <button onClick={() => { press("2") }} >2</button>
      <button onClick={() => { press("1") }} >1</button>
      <button onClick={() => { press("*") }} >*</button>
      <button onClick={() => { press("0") }} >0</button>
      <button onClick={() => { press("/") }} >/</button>
      <button onClick={() => { press(".") }} >.</button>
      <button onClick={calculate} >=</button>
  
      </div>
          <button className="clear" onClick={clear} >Clear</button>
      </div>
    </div>      
    </>
  )
}
export default Calculator