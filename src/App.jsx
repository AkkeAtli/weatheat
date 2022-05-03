import { useState } from "react";
import { Header } from "./components/RHeader"
import { WeatCast } from "./components/RWeatCast";

export const App = () => {
  const [city, setCity] = useState('');
  const [cityInfo, setCityInfo] = useState({});
  const [isShown, setIsShown] = useState(false);

  const getWeatherInfo = async () => {
    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${city}&days=3&aqi=no&alerts=no`);

    setCity('');

    if (response.ok) {
      let json = await response.json();
      console.log(json);
      setCityInfo(json);
      setIsShown(true);
    } else {
      setIsShown(false);
      setCityInfo({});
      console.log("Ошибка HTTP: " + response.status);
    }
  }

  return (
    <article className="min-h-screen">
      <Header />
      <main className="flex flex-col h-4/5 py-4 gap-4">
        <div className="flex flex-row gap-4 justify-center">
          <input className="shadow-inner" type="text" placeholder="Your city..." value={city} onChange={(e) => setCity(e.target.value)} />
          <button className="bg-orange-200 px-2 py-1" type="submit" onClick={getWeatherInfo}>Get Info</button>
        </div>

        {isShown &&
          <>
            <h2 className="text-center uppercase text-xl select-none font-light tracking-wide">{cityInfo?.location?.name} - {cityInfo?.location?.country}</h2>
            <section className="flex flex-col gap-4 md:flex-row">
              <WeatCast cityInfo={cityInfo} text="Current" />
            </section>
          </>
        }
      </main>

      <footer className="flex flex-col">
        <a href="https://www.flaticon.com/free-icons/thermometer" title="thermometer icons">Thermometer icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/wind" title="wind icons">Wind icons created by Vitaly Gorbachev - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/humidity" title="humidity icons">Humidity icons created by Freepik - Flaticon</a>
      </footer>
    </article>
  )
}
