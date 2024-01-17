import { useState, createContext } from "react";
import axios from "axios";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
    const [search, setSearch] = useState({
        city: "",
        country: ""
    });
    const [result, setResult] = useState({});
    const [noResult, setNoResult] = useState('');
    const [loading, setLoading] = useState(false);
    
    const searchData = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const checkWeather = async () => {
        setLoading(true);
        try {
            const { city, country } = search;
            const appId = import.meta.env.VITE_API_KEY;
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`;
            const { data } = await axios.get(url);
            const { lat, lon } = data[0];
            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
            const { data: dataWeather } = await axios.get(urlWeather);
            setResult(dataWeather);
            setNoResult('');
        } catch (error) {
            setNoResult('No results');
        } finally{
            setLoading(false);
        }
    }
    
    return (
        <WeatherContext.Provider value={{ 
            search, 
            searchData,
            checkWeather,
            result,
            loading,
            setLoading,
            noResult        }}>
        {children}
        </WeatherContext.Provider>
    );
}

export { WeatherProvider };
export default WeatherContext;