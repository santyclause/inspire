export class Weather {
  constructor(data) {
    this.weather = data.weather[0].main;
    this.icon = data.weather.icon;
    this.temp = Math.round(((data.main.temp - 273.15) * 1.8) + 32);
    this.tempType = 'F';
  }

  get HTMLTemplate() {
    return `
    <section onclick="app.WeatherController.changeScale()" class="row align-items-center">
      <div class="col-md-8">
        <p>${this.temp} ${this.tempType}</p>
        <p>${this.weather}</p>
      </div>
      <div class="col-md-4">
        <img src="${this.icon}" alt="weather icon" class="img-fluid">
      </div>
    </section>
    `
  }
}