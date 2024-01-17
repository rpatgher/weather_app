import useWeather from "../hooks/useWeather"

const Result = () => {
    const { result } = useWeather();
    const kelvin = 273.15;
    return (
        <div className="contenedor clima">
            <h2>The Weather in {result.name} is: </h2>
            <p>{(result.main.temp - kelvin).toFixed(2)} <span>&#x2103;</span></p>
            <div className="temp_min_max">
                <p>Min: {(result.main.temp_min - kelvin).toFixed(2)} <span>&#x2103;</span></p>
                <p>Max: {(result.main.temp_max - kelvin).toFixed(2)} <span>&#x2103;</span></p>
            </div>
        </div>
    )
}

export default Result
