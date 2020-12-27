import { useEffect, useState } from "react";
import Search from "../components/Search";
import Button from "../components/Button";

export default function Home() {
  const [city, setCity] = useState("Buenos Aires");
  const [weather, setWeather] = useState({});

  const apiKey = process.env.apiKey;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=sp&`;

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      if (city) {
        const data = await fetch(URL);
        const json = await data.json();

        const weatherData = {
          name: json.name,
          temp: json.main.temp,
          desc: json.weather[0].description,
          icon: json.weather[0].icon,
          humidity: json.main.humidity,
          wind: json.wind.speed,
        };
        setWeather(weatherData);
      }
    } catch (error) {
      setWeather({}); //Setea el estado en un objeto vacio para poder hacer saltar el mensaje de error.
    }
  }

  function handleCity(value) {
    setCity(value);
  }

  return (
    <main>
      <div>
        <Search
          type="text"
          placeholder="Buscar..."
          handleCity={(value) => handleCity(value)}
        />
        <Button handleWeather={getData} name="Buscar" />
      </div>
      <section>
        {weather.name ? (
          <div>
            <h2>{weather.name}</h2>
            <p>{weather.temp.toFixed(1)}°C</p>
            <p>{weather.desc}</p>
            <p>Humedad: {weather.humidity}%</p>
            <p>Viento: {weather.wind}km/h</p>
            <img
              src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt="Weather icon"
            />
          </div>
        ) : (
          <h1>Ciudad no encontrada</h1>
        )}
      </section>
    </main>
  );
}
