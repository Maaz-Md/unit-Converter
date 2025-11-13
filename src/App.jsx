import { useState } from "react"
import './App.css';
import LengthConverter from "./components/lengthConverter";
import WeightConverter from './components/weight';
import TemperatureConverter from './components/Temperature';

function App() {

  const [activeForm, setActiveForm] = useState("length")
  
  return (
    
    <div className="appContainer">
      <h1>Unit Converter</h1>

      <div className="buttonGroup">
        <button type="button" className={activeForm === "length" ? "active" : ""} 
          onClick={() => setActiveForm("length")}>Length</button>
        <button type="button" className={activeForm === "weight" ? "active" : ""} 
          onClick={() => setActiveForm("weight")}>Weight</button>
        <button type="button" className={activeForm === "temperature" ? "active" : ""} 
          onClick={() => setActiveForm("temperature")}>Temperature</button>
      </div>

      <div className='formLayout'>
        {
          activeForm === "length" ? <LengthConverter /> :
          activeForm === "weight" ? <WeightConverter /> :
          < TemperatureConverter />
        } 
      </div>
    </div>
    
  );
}

export default App;
