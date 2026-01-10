function fetchCityCoordinates(city) {
  return fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      city
    )}&count=1`
  )
    .then((response) => response.json())
    .then((data) => {
      if (!data.results || data.results.length === 0) {
        return null;
      }

      const place = data.results[0];

      return {
        name: place.name,
        country: place.country,
        latitude: place.latitude,
        longitude: place.longitude,
      };
    });
}

function fetchCurrentWeather(latitude, longitude) {
  return fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  )
    .then((response) => response.json())
    .then((data) => {
      return {
        temperature: data.current_weather?.temperature,
        windspeed: data.current_weather?.windspeed,
      };
    });
}

export { fetchCityCoordinates, fetchCurrentWeather };