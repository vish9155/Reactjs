import { useState } from "react"


function App() {
  let savedcolor = JSON.parse(localStorage.getItem('color'))

  let [r, setr] = useState(savedcolor && savedcolor.r?savedcolor.r:0)
  let [g, setg] = useState(savedcolor && savedcolor.g?savedcolor.g:0)
  let [b, setb] = useState(savedcolor && savedcolor.b?savedcolor.b:0)

  console.log(r, g, b);
  function saved() {
    localStorage.setItem('color', JSON.stringify({ r, g, b }))
  }

  return (
    <>

      <div style={{ height: '200px', width: "250px", margin: "10px", border: "1px solid black", backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')' }}>

      </div>

      <input type="range" value={r} onChange={(event) => { setr(event.target.value) }} minLength={0} max={255} />
      <br />
      <input type="range" value={g} onChange={(event) => { setg(event.target.value) }} minLength={0} max={255} />
      <br />
      <input type="range" value={b} onChange={(event) => { setb(event.target.value) }} minLength={0} max={255} />
      <br />
      <button onClick={saved}>save</button>
    </>
  )
}
export default App