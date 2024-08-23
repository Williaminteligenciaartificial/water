import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import WeatherCard from './assets/components/WeatherCard'
import './index.css';

function App() {
  const [coords, setcoords] = useState()
  const [weather, setWeather] =  useState()
  const [temp, setTemp] = useState()
  
  useEffect(() => {
    const success = pos => {
      setcoords({
        lat:pos.coords.latitude,
        lon:pos.coords.longitude
      })
      }
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  
  useEffect(() => {
    if(coords){
      const API_KEY = '818271c8d05934f14848e9f9fbea1d08'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`
        axios.get(url)
      .then(res => {
        setWeather(res.data)
      const celsius =( res.data.main.temp - 273.15).toFixed(1)
      const fahrenhit = (celsius * 9/5 + 32).toFixed(1)
      setTemp({celsius, fahrenhit})
      })
      .catch(err => console.log(err))
    }
 }, [coords])
console.log(weather)
  return (
    <WeatherCard 
      weather={weather}
      temp={temp}
      />)}
export default App
