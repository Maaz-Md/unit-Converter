import { useState } from "react"

const toCelsius = {
    C: (val) => val,
    F: (val) => (val - 32) * 5/9,
    K: (val) => val - 273.15
}

const fromCelsius = {
    C: (val) => val,
    F: (val) => (val * 9/5) + 32,
    K: (val) => val + 273.15
}


export default function TemperatureConverter() {

    const [num, setNum] = useState("")
    const [fromUnit, setFromUnit] = useState("C")
    const [toUnit, setToUnit] = useState("F")
    const [result, setResult] = useState(null)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const valueInCelsius = toCelsius[fromUnit](Number(num))
        const finalValue = fromCelsius[toUnit](valueInCelsius)
        setResult(finalValue)
        setIsSubmitted(true)
    }

    const handleReset = () => {
      setNum("")
      setFromUnit("C")
      setToUnit("F")
      setResult(null)
      setIsSubmitted(false)
    }

    if (isSubmitted) {
        return (
            <>
                <p>Result of your calculation</p>
                <h2>{num} {fromUnit} = {result} {toUnit}</h2>
                <button type="button" onClick={handleReset}>Reset</button>
            </>
        )
    }


    return (
        <form onSubmit={handleSubmit}>
            <h2>Temperature</h2>
            <label for="length">Enter the Temperature to convert</label>
            <input 
              value={num}
              onChange={(e) => setNum(e.target.value)}
              type="number"
              step="0.01"
              placeholder="Enter a number"
              id="length"
              required
              autoFocus
            /><br/>
            <label for="fromUnits">Unit to convert from</label>
                <select id="fromUnits" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                    <option value="C">C</option>
                    <option value="F">F</option>
                    <option value="K">K</option>
                </select><br/>
            <label for="toUnits">Unit to convert to</label>
                <select id="toUnits" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                    <option value="F">F</option>
                    <option value="C">C</option>
                    <option value="K">K</option>
                </select><br/><br/>
            <button type="submit">Convert</button>
        </form>
    )
}