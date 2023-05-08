import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrentweatherService {

  constructor(private http: HttpClient) { };

  getCurrentWeather(latitude: number, longitude: number) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e76f8eac87d26a3d90e998709a5c3606&units=metric&lang=es`;
    return this.http.get(url);
  }

}
