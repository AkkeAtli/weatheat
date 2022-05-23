export const ForecastWeather = ({ dayForecast }) => {
  console.log(dayForecast);
  const dateOfDay = dayForecast.date.split('-').join('/');

  return (
    <div className="flex flex-row justify-between">
      <p>{dayForecast.day.avgtemp_c}</p>
      <p>{dateOfDay}</p>
      <img className="w-16" src={dayForecast.day.condition.icon} alt="Icon" />

    </div>
  )

}
