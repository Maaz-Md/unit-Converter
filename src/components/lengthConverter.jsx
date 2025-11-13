import { useState } from "react"

const lengthConversions = {
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
  inch: 0.0254,
  foot: 0.3048,
  yard: 0.9144,
  mile: 1609.34
}



export default function LengthConverter() {

  const [num, setNum] = useState("")
  const [fromUnit, setFromUnit] = useState("m")
  const [toUnit, setToUnit] = useState("km")
  const [result, setResult] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)


  
  const handleSubmit = (e) => {
    e.preventDefault()
    const ValueInMeters = Number(num) * lengthConversions[fromUnit]
    const finalValue = ValueInMeters / lengthConversions[toUnit]
    setResult(finalValue)
    setIsSubmitted(true)
  }

  const handlerReset = () => {
      setNum("")
      setFromUnit("m")
      setToUnit("km")
      setResult(null)
      setIsSubmitted(false)
  }

  if (isSubmitted) {
    return (
      <div className="resultContainer">
        <div className="resultHeader">
          <p>Result of your calculation</p>
          <h2>{num} {fromUnit} = {result} {toUnit}</h2>
        </div>
        <button type="button" onClick={handlerReset}>Reset</button>
      </div>
    )
  }
  
    return (
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label for="length">Enter the length to convert</label>
              <input 
                type="number"
                value={num}
                onChange={(e) => (setNum(e.target.value))}
                min="0"
                step="0.01"
                placeholder="Enter a number"
                id="length"
                required
                autoFocus
              />
          </div>

          <div className="formGroup">
            <label for="fromUnits">Unit to convert from</label>
              <select id="fromUnits" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                <option value="m">m</option>
                <option value="cm">cm</option>
                <option value="mm">mm</option>
                <option value="km">km</option>
                <option value="inch">inch</option>
                <option value="foot">foot</option>
                <option value="yard">yard</option>
                <option value="mile">mile</option>
              </select>
          </div>

          <div className="formGroup">
            <label for="toUnits">Unit to convert to</label>
              <select id="toUnits" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                <option value="km">km</option>
                <option value="cm">cm</option>
                <option value="m">m</option>
                <option value="mm">mm</option>
                <option value="inch">inch</option>
                <option value="foot">foot</option>
                <option value="yard">yard</option>
                <option value="mile">mile</option>
              </select>
          </div>

          <button type="submit" class="submitBtn">Convert</button>

        </form>
    )
}