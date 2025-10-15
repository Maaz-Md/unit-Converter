export default function TemperatureConverter() {
    return (
        <form>
            <h2>Temperature</h2>
            <label for="length">Enter the Temperature to convert</label>
            <input 
              type="number"
              min="0"
              step="0.01"
              placeholder="Enter a number"
              id="length"
              required
              autoFocus
            /><br/>
            <label for="fromUnits">Unit to convert from</label>
                <select id="fromUnits">

                </select><br/>
            <label for="toUnits">Unit to convert to</label>
                <select id="toUnits">

                </select><br/><br/>
            <button type="submit">Convert</button>
        </form>
    )
}