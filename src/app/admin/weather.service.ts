import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // tslint:disable-next-line:no-inferrable-types
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  dailyForecast() {
    return this.http.get('https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=b1b15e88fa797225412429c1c50c122a1')
    .pipe(map(result => result));
  }

  get_products(){
    return this.http.get(this.baseUrl + '/list');
}
}
