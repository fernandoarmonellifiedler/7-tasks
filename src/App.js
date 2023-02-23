import './App.css';

import Counter from './components/Counter'
import TemperatureConverter from './components/TemperatureConverter'
import FlightBooker from './components/FlightBooker'

function App() {
  return (
    <div className="App">
      <Counter />
      <TemperatureConverter />
      <FlightBooker />
    </div>
  );
}

export default App;
