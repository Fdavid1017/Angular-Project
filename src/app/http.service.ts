import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  getWeather() {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat=48.030306&lon=19.872172&units=metric&appid=5e05f829f6fd6566e450893b1e769710');
  }
}
