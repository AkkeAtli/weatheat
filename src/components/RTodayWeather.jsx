export const TodayWeather = ({ todayInfo, cityPlace }) => {
  const [date, time] = cityPlace.localtime.split(' ');
  const [, month, day] = date.split('-');

  return (
    <div className="p-2 bg-white rounded-xl shadow-inner bg-opacity-50 backdrop-filter backdrop-blur-lg tracking-wider font-light">
      <div className="flex flex-row justify-between uppercase">
        <p>{month}/{day}</p>
        <p>Today</p>
      </div>
      <div className="flex flex-row justify-between">
        <p>{cityPlace.name}</p>
        <p>{time}</p>
      </div>
      <div className="h-24 flex flex-row justify-between items-center">
        <div className="flex flex-col align-middle">
          <p className="text-4xl ordinal">{todayInfo.temp_c}oC</p>
          <p>{todayInfo.condition.text}</p>
        </div>
        <img className="w-24" src={todayInfo.condition.icon} alt="Icon" />
      </div>
    </div>
  )
}
