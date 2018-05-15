import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {
  data: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  getWeather(city){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?zip=${city}&units=imperial&APPID=6a07cdf7ce7f322134e71207343fb7df`)
  }
}
  
