import {useDispatch,useSelector} from 'react-redux'
import { decrement, incremnet } from './slice'
export default function App()
{
  let dispatch=useDispatch()
  let selector=useSelector((state)=>state.count.value)
  console.log(selector)
return(
  <>
  <button onClick={()=>dispatch(decrement())}>-</button>
  <span>{selector>0?selector:0}</span>
  <button onClick={()=>dispatch(incremnet())}>+</button>
  </>
)
}