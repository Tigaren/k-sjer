import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit {

  WeatherData: any;
  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
  }

  // tslint:disable-next-line: typedef
  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=4460,no&appid=a5bb21c146760f91922701f8a8e3845b')
    .then(response => response.json())
    .then(data => {this.setWeatherData(data); });
  }

  // tslint:disable-next-line: typedef
  setWeatherData(data){
    this.WeatherData = data;
    const sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    const currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    this.WeatherData.weatherMain = this.WeatherData.weather[0].main;
    this.WeatherData.icon = this.WeatherData.weather[0].icon;
    console.log(this.WeatherData.icon);
  }

}
