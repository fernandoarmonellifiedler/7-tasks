import {useState} from 'react'

function TemperatureConverter() {
    const [celsius, setCelsius] = useState()
    const [fahrenheit, setFahrenheit] = useState()

    const handleChangeCelsius = (e) => {
        let faherenheitConvertion = e.target.value * (9/5) + 32

        setCelsius(e.target.value)
        setFahrenheit(faherenheitConvertion)
    }

    const handleChangeFahrenheit = (e) => {
        let celsiusConvertion = (e.target.value - 32) * (5/9)

        setFahrenheit(e.target.value)
        setCelsius(celsiusConvertion)
    }

    return (
    <div>
        <h1>2_Temperature Converter</h1>
        <div className='container'>
            <input className='celsius' type="number" value={celsius} onChange={handleChangeCelsius}/>
            <label htmlFor="celsius">celsius</label>
            
            <input className='fahrenheit' type="number" value={fahrenheit} onChange={handleChangeFahrenheit}/>
            <label htmlFor="fahrenheit">fahrenheit</label>
        </div>
    </div>
    );
}

export default TemperatureConverter