import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from '../get-weather.service'

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  city = 98103;
  currentTemp: number = null;
  humidity:number = null;
  tempHi:number = null;
  tempLow:number = null;
  status:string = null;

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
  // getTheWeather(){this.getWeatherService.getWeather(this.city).subscribe(
  //   currentCity => {console.log(currentCity)}
  // )
}


