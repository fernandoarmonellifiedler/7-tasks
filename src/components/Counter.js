import {useState} from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)
    const handleCounter = () => {
        setCounter(counter + 1)
    }
    return (
    <div>
        <h1>1_Counter</h1>
        <div className='container'>
            
            <input type="text" value={counter}/>
            <button onClick={handleCounter}>Count</button>
        </div>
    </div>
    );
}

export default Counter;