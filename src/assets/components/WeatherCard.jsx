import React,  { useState } from "react"  





const WeatherCard = ({weather, temp}) => {
    const [isCelsius, setIsCelsius] = useState(true)
    const changeTemperture = () => {
        setIsCelsius(!isCelsius)

    }
  return (

        <article>
            <h1 className='bg-blue-900  flex items-center justify-center p-5 rounded-full gap-10 text-white'>wetherCard</h1>
            <h2 className='bg-blue-700 gap-10 text-white flex items-center justify-center rounded-md'>{weather?.name},{weather?.sys.country}</h2>
            <section>
                <div>
                    <img src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
                    
                    

                </div>
                <article>
                    <h3 className='bg-blue-300 gap-10 text-black'>{weather?.weather[0].description}</h3>
                    <ul>
                    <li><span className='text-center bg-blue-700 gap-10 text-yellow-50'>Wind spped</span>
                        <span className='bg-blue-200 gap-7 text-black'>{weather?.wind.speed}M/S</span></li>

                    <li><span className='text-center bg-blue-700 gap-10 text-yellow-50'>Clouds</span>
                    <span className='bg-blue-200 gap-10 text-black'>{weather?.clouds.all} %</span>

                    </li>
                    <li><span className='text-center bg-blue-700 rounded-md gap-10 text-yellow-50'>Pressure1</span>
                    <span className='bg-blue-200 gap-10 rounded-md text-black'>{weather?.main.pressure}HPA</span></li>
                    </ul>
                </article>
            </section>
            <h2 className='bg-blue-700 gap-10 text-white rounded-md'>{isCelsius ?`${temp?.celsius}C`:`${temp?.fahrenhit}F`}</h2>

            <button className='top- bg-violet-950 text-white rounded-md' onClick={changeTemperture}>Change to {isCelsius? 'ªF' : 'ªC'}</button>
        </article>
  )
}

export default WeatherCard