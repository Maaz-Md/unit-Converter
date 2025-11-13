import { useState } from "react"

const toCelsius = {
    c: (val) => val,
    f: (val) => (val - 32) * 5/9,
    k: (val) => val - 273.15
}

const fromCelsius = {
    c: (val) => val,
    f: (val) => (val * 9/5) + 32,
    k: (val) => val + 273.15
}


export default function TemperatureConverter() {

    const [num, setNum] = useState("")
    const [fromUnit, setFromUnit] = useState("c")
    const [toUnit, setToUnit] = useState("f")
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
      setFromUnit("c")
      setToUnit("f")
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
                <button type="button" onClick={handleReset}>Reset</button>
            </div>
        )
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="formGroup">
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
                />
            </div>

            <div className="formGroup">
                <label for="fromUnits">Unit to convert from</label>
                    <select id="fromUnits" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                        <option value="c">c</option>
                        <option value="f">f</option>
                        <option value="k">k</option>
                    </select>
            </div>

            <div className="formGroup">
            <label for="toUnits">Unit to convert to</label>
                <select id="toUnits" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                    <option value="f">f</option>
                    <option value="c">c</option>
                    <option value="k">k</option>
                </select>
            </div>
            
            <button type="submit" class="submitBtn">Convert</button>

        </form>
    )
}