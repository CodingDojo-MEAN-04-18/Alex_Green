import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from '../get-weather.service'

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  city = 20001;
  currentTemp = null;
  humidity = null;
  tempHi = null;
  tempLow = null;
  status = null;

  constructor(private getWeatherService: GetWeatherService) { }

  ngOnInit() {this.getWeatherService.getWeather(this.city).subscribe(
    (currentCity:any = {}) => {
      this.currentTemp = currentCity.main.temp;
      this.humidity = currentCity.main.humidity;
      this.status = currentCity.weather[0].description;
      this.tempHi = currentCity.main.temp_max;
      this.tempLow = currentCity.main.temp_min
    }
  )}

}
