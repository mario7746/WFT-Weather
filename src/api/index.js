import axios from 'axios'

const getWeather = (lat, lng) => (
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=119a910cd9071ba4f4883c089924417a&units=imperial`
  ).then(weather => {
    return weather.data
  })
)

export default getWeather