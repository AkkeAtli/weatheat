import { useState } from "react";
import { ForecastWeather } from "./components/RForecastWeather";
import { TodayWeather } from "./components/RTodayWeather";

export const App = () => {
  const [city, setCity] = useState('');
  const [cityInfo, setCityInfo] = useState({});
  const [isSelected, setIsSelected] = useState(false);

  const getWeatherInfo = async () => {
    try {
      let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${city}&days=4&aqi=no&alerts=no`);
      let json = await response.json();
      setCityInfo(json);
      setIsSelected(true);
      setCity('');
    } catch (e) {
      console.log(response.status);
    }
  }

  return (
    <article className="h-screen w-full bg-slate-200">
      <div>
        <input className="shadow-inner w-full" type="text" placeholder="Your city..." value={city} onChange={(e) => setCity(e.target.value)} />
        <button className="bg-orange-200 px-2 py-1 w-full" type="submit" onClick={getWeatherInfo}>Get Info</button>
      </div>

      {isSelected ? (
        <>
          <TodayWeather todayInfo={cityInfo?.current} cityPlace={cityInfo?.location} />
          <div className="flex flex-col divide-x gap-y-3">
            <h2>Potential Weather</h2>
            <ForecastWeather dayForecast={cityInfo?.forecast.forecastday[1]} />
            <ForecastWeather dayForecast={cityInfo?.forecast.forecastday[2]} />
          </div>

        </>
      )
        : (<div>Empty</div>)}

      <footer className="flex flex-col">
        <a href="https://www.flaticon.com/free-icons/thermometer" title="thermometer icons">Thermometer icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/wind" title="wind icons">Wind icons created by Vitaly Gorbachev - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/humidity" title="humidity icons">Humidity icons created by Freepik - Flaticon</a>
      </footer>
    </article>
  )
}
