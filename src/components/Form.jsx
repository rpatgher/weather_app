import { useState } from "react";
import useWeather from "../hooks/useWeather"

const Form = () => {
    const [alert, setAlert] = useState('');
    const { search, searchData, checkWeather } = useWeather();
    const { city, country } = search;

    const handleSubmit = e => {
        e.preventDefault();
        if(Object.values(search).includes('')) {
            setAlert('All fields are required');
            return;
        }
        setAlert('');
        checkWeather();
    }

    return (
        <div className="contenedor">
            {alert && <p>{alert}</p>}
            <form
                onSubmit={handleSubmit}
            >
                <div className="campo">
                    <label htmlFor="city">City</label>
                    <input 
                        type="text" 
                        name="city"
                        id="city"
                        placeholder="City"
                        onChange={searchData}
                        value={city}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="city">City</label>
                    <select 
                        name="country" 
                        id="country"
                        onChange={searchData}
                        value={country}

                    >
                        <option value="">--- Select a Country ---</option>
                        <option value="US">United States</option>
                        <option value="MX">Mexico</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">Spain</option>
                        <option value="PE">Peru</option>

                    </select>
                </div>
                <input type="submit" value="Check Weather" />
            </form>
        </div>
    )
}

export default Form
