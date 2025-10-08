
import { useRef } from "react"

export default function Calculator() {

    let dispaly=useRef()

    function press(val)
    {
        dispaly.current.value+=val
        
    }
    function calculate()
    {
       try{
 dispaly.current.value=eval(dispaly.current.value)
       }
       catch{
        dispaly.current.value="Error"
       }
    }

    function clear()
    {
        dispaly.current.value=" "
    }

    return (
        <>
            <div className="container">
                <div className="calculator">
                    <input type="text" readOnly ref={dispaly} />
                    <div className="btnfield">
                        <button onClick={()=>{press('0')}}> 0</button>
                        <button onClick={()=>{press('1')}}> 1</button>
                        <button onClick={()=>{press('2')}}> 2</button>
                        <button onClick={()=>{press('+')}}> +</button>
                        <button onClick={()=>{press('3')}}>  3</button>
                        <button onClick={()=>{press('4')}}>  4</button>
                        <button onClick={()=>{press('5')}}>  5</button>
                        <button onClick={()=>{press('-')}}>  -</button>
                        <button onClick={()=>{press('6')}}> 6 </button>
                        <button onClick={()=>{press('7')}}>  7</button>
                        <button onClick={()=>{press('8')}}>  8</button>
                        <button onClick={()=>{press('*')}}>  *</button>
                        <button onClick={()=>{press('9')}}> 9 </button>
                        <button onClick={()=>{press('/')}}>  /</button>
                        <button onClick={()=>{press('.')}}>  .</button>
                        <button onClick={()=>{calculate()}}>=</button>
                        <button onClick={()=>{press('**')}}>**</button>
                        <button className="clear" onClick={()=>{clear()}}>Clear</button>
                    </div>
                </div>
            </div>
        </>
    )
}