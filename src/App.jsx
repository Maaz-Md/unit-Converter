import './App.css';
import LengthConverter from "./components/lengthConverter";
import WeightConverter from './components/weight';
import TemperatureConverter from './components/Temperature';

function App() {
  return (
    <>
    <h1>Unit Converter</h1>
    <div className='form-layout'> 
      <LengthConverter />
      <WeightConverter />
      <TemperatureConverter />
    </div>
    </>
  );
}

export default App;
