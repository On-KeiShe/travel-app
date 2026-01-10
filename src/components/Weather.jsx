import { useState } from "react";
import { fetchCityCoordinates, fetchCurrentWeather } from "../weatherApi.jsx";

function Weather() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    setResult(null);

    if (city.trim() === "") {
      setMessage("Please type a city name 🙂");
      return;
    }

    fetchCityCoordinates(city).then((place) => {
      if (!place) {
        setMessage("City not found. Try another name 🙂");
        return;
      }

      fetchCurrentWeather(place.latitude, place.longitude).then((weather) => {
        setResult({
          location: `${place.name}, ${place.country}`,
          temperature: weather.temperature,
          windspeed: weather.windspeed,
        });
      });
    });
  }

  return (
    <div className="weather-container">
      <h2 className="weather-title">Weather</h2>

      <form className="weather-form" onSubmit={handleSubmit}>
        <input
          className="weather-input"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          placeholder="Enter a city (e.g. London)"
        />
        <button className="weather-button" type="submit">
          Get weather
        </button>
      </form>

      {message && <p className="weather-message">{message}</p>}

      {result && (
        <div className="weather-card">
          <h3 className="weather-location">{result.location}</h3>

          <p className="weather-row">
            Temperature: <span className="weather-value">{result.temperature}°C</span>
          </p>

          <p className="weather-row">
            Wind: <span className="weather-value">{result.windspeed} km/h</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default Weather;