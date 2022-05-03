import { WeatElem } from "./RWeatElem";

export const WeatCast = ({ cityInfo, text }) => {
  return (
    <>
      <div className="grid grid-cols-2 justify-items-center items-center px-2 md:px-4 gap-6 max-w-sm mx-auto">
        <h2 className="col-span-2 text-center uppercase text-xl select-none font-light tracking-wide">{text}</h2>
        <WeatElem text={`${cityInfo?.current?.condition?.text}`} imgSrc={cityInfo?.current?.condition?.icon} imgAlt={"icon"} />
        <WeatElem text={`${cityInfo?.current?.temp_c} C (Feels ${cityInfo?.current?.feelslike_c} C)`} imgSrc={"/thermometer.png"} imgAlt={"therm"} />
        <WeatElem text={`${Math.round(cityInfo?.current?.wind_kph * 1000 / 360,) / 10} m/s`} imgSrc={"/wind.png"} imgAlt={"wind"} />
        <WeatElem text={`${cityInfo?.current?.humidity}%`} imgSrc={"/humidity.png"} imgAlt={"humid"} />
      </div>

      <div className="grid grid-cols-2 justify-items-center items-center px-2 md:px-4 gap-6 max-w-sm mx-auto">
        <h2 className="col-span-2 text-center uppercase text-xl select-none font-light tracking-wide">{cityInfo?.forecast?.forecastday[1]?.date}</h2>
        <WeatElem text={`${cityInfo?.forecast?.forecastday[1]?.day?.condition?.text}`} imgSrc={cityInfo?.forecast?.forecastday[1]?.day?.condition?.icon} imgAlt={"icon"} />
        <WeatElem text={`${cityInfo?.forecast?.forecastday[1]?.day?.avgtemp_c} C`} imgSrc={"/thermometer.png"} imgAlt={"therm"} />
        <WeatElem text={`${Math.round(cityInfo?.forecast?.forecastday[1]?.day?.maxwind_kph * 1000 / 360,) / 10} m/s`} imgSrc={"/wind.png"} imgAlt={"wind"} />
        <WeatElem text={`${cityInfo?.forecast?.forecastday[1]?.day?.totalprecip_mm} mm`} imgSrc={"/humidity.png"} imgAlt={"humid"} />
      </div>

      <div className="grid grid-cols-2 justify-items-center items-center px-2 md:px-4 gap-6 max-w-sm mx-auto">
        <h2 className="col-span-2 text-center uppercase text-xl select-none font-light tracking-wide">{cityInfo?.forecast?.forecastday[2]?.date}</h2>
        <WeatElem text={`${cityInfo?.forecast?.forecastday[2]?.day?.condition?.text}`} imgSrc={cityInfo?.forecast?.forecastday[2]?.day?.condition?.icon} imgAlt={"icon"} />
        <WeatElem text={`${cityInfo?.forecast?.forecastday[2]?.day?.avgtemp_c} C`} imgSrc={"/thermometer.png"} imgAlt={"therm"} />
        <WeatElem text={`${Math.round(cityInfo?.forecast?.forecastday[2]?.day?.maxwind_kph * 1000 / 360,) / 10} m/s`} imgSrc={"/wind.png"} imgAlt={"wind"} />
        <WeatElem text={`${cityInfo?.forecast?.forecastday[2]?.day?.totalprecip_mm} mm`} imgSrc={"/humidity.png"} imgAlt={"humid"} />
      </div>
    </>
  )
}
