import { useState } from "react"

const weightConversions = {
    g: 0.001,
    mg: 0.000001,
    kg: 1,
    pound: 0.453592,
    ounce: 0.0283495
}

export default function WeightConverter() {

    const [num, setNum] = useState("")
    const [fromUnit, setFromUnit] = useState("g")
    const [toUnit, setToUnit] = useState("kg")
    const [result, setResult] = useState(null)
    const [isSubmitted, setIsSubmitted] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        const valueInKg = Number(num) * weightConversions[fromUnit]
        const finalValue = valueInKg / weightConversions[toUnit]
        setResult(finalValue)
        setIsSubmitted(true)
    }

    const handleReset = () => {
      setNum("")
      setFromUnit("g")
      setToUnit("kg")
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
                <label for="length">Enter the weight to convert</label>
                <input 
                type="number"
                value={num}
                onChange={(e) => setNum(e.target.value)}
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
                        <option value="g">g</option>
                        <option value="mg">mg</option>
                        <option value="kg">kg</option>
                        <option value="ounce">ounce</option>
                        <option value="pound">pound</option>
                    </select>
            </div>

            <div className="formGroup">
                <label for="toUnits">Unit to convert to</label>
                    <select id="toUnits" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                        <option value="kg">kg</option>
                        <option value="mg">mg</option>
                        <option value="g">g</option>
                        <option value="ounce">ounce</option>
                        <option value="pound">pound</option>
                    </select>
            </div>

            <button type="submit" class="submitBtn">Convert</button>

        </form>
    )
}