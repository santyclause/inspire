import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { setHTML } from "../utils/Writer.js";
import { Pop } from "../utils/Pop.js";

export class WeatherController {
  constructor() {
    AppState.on('weather', this.drawWeather)
    this.getWeather();
  }

  async getWeather() {
    try {
      await weatherService.getWeather();
    } catch (error) {
      Pop.error(error);
    }
  }

  drawWeather() {
    const weather = AppState.weather;
    setHTML('weather', weather.HTMLTemplate);
  }

  changeScale() {
    weatherService.changeScale();
  }
}