import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {


  async getWeather() {
    const response = await api.get('api/weather');
    const curWeather = new Weather(response.data);

    AppState.weather = curWeather;
    AppState.emit('weather');
  }

  changeScale() {
    const weather = AppState.weather;
    if (weather.tempType == 'F') {
      weather.temp = Math.round((weather.temp - 32) / 1.8);
      weather.tempType = 'C';
    } else if (weather.tempType == 'C') {
      weather.temp = Math.round(weather.temp + 273.15);
      weather.tempType = 'K'
    } else {
      weather.temp = Math.round(((weather.temp - 273.15) * 1.8) + 32)
      weather.tempType = 'F'
    }
  }
}

export const weatherService = new WeatherService();