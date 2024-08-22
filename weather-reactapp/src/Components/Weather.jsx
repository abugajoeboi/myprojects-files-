import React, { useState } from 'react'
import axios from 'axios';

export default function Weather() {

  const[city,setCity]=useState('');
  const[weather,setWeather]=useState(null);

  const apiKey= 'bde4c1c4b24b5072b85314cf8adb5eda';



  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching the weather data:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
  };
  return (
    <div>
        <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button type="submit">Get Weather</button>
        </form>

        {weather && (
        <div className='weather-container'>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
      
    </div>
  )
}
