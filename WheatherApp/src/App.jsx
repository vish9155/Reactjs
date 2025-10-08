import { useState } from "react"

export default function App() {
    let [data, setdata] = useState()
    let [display, setdisplay] = useState([])
    let [currentdata,setcurrent]=useState([])
    let [temp,settemp]=useState([])
    
    async function getdata(cityname) {

        let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=909e51cb6bc349d4bfa135006252807&q=${cityname}&aqi=yes`)
        return await response.json();
      
        console.log(respjson)

    }

    async function handle() {

        let inputvalue = data

        let respdata = await getdata(inputvalue)
        console.log(respdata)
        console.log(respdata.location)
        console.log(respdata.current)
        setdisplay(respdata.location)
        settemp(respdata.current)
       setcurrent(respdata.current.condition)
    }

  

    return (
        <>
            <div className="wheather">
                <div className="containner">
                    <input type="text" onChange={(e) => { setdata(e.target.value) }} />
                    <button onClick={handle}>search</button>
                    <div className="detail">
                        <h2 >CityName:{display.name}</h2>
                        <h2 >State:{display.region}</h2>
                        <h2 >Country:{display.country}</h2>
                        <h2 >LocalTime:{display.localtime}</h2>
                        <h2>Condition:{currentdata.text} <img src={currentdata.icon} alt="" /></h2>
                        <h1 >temp:{temp.temp_c}</h1>
                        <h2>Humidity:{temp.humidity}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}