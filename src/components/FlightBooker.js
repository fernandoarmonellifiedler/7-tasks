import {useState} from 'react'

function FlightBooker() {
    const [travelOption, setTravelOption] = useState("one-way-flight")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")


    const handleTravelOption = (e) => {
        setTravelOption(e.target.value)
    }

    const handleSubmit = (e) => {
        alert('You have booked a one-way flight on ' + startDate);
        e.preventDefault();
    }

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value)
    }

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value)
    }

    return (
    <div>
        <h1>3_Flight Booker</h1>
        <div className='container'>

            <form onSubmit={handleSubmit} className='form'>
                <label>
                Select your travel option:
                <select value={travelOption} onChange={handleTravelOption}>
                    <option value="one-way-flight">One-way Flight</option>
                    <option value="return-flight">Return Flight</option>
                </select>
                </label>

                <input type="date" value={startDate} onChange={handleStartDateChange} />
                <input type="date" value={endDate} onChange={handleEndDateChange} />

                <input type="submit" value="Submit" />
            </form>
        </div>
    </div>
    );
}

export default FlightBooker;