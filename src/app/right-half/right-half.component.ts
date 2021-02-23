import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-right-half',
  templateUrl: './right-half.component.html',
  styleUrls: ['./right-half.component.scss']
})
export class RightHalfComponent implements OnInit {

  weather: object;
  temperature: number;
  iconUrl: string;

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
    this.assignWeather();
  }

  assignWeather(): void {
    this.http.getWeather().subscribe(data => {
      this.weather = data;
      // @ts-ignore
      this.temperature = this.weather.main.temp;

      // @ts-ignore
      const icon = this.weather.weather[0].icon[0].toString() + this.weather.weather[0].icon[1].toString();
      console.log(icon);

      switch (icon) {
        case '01':
          this.iconUrl = './assets/weathericons/clear-sky.svg';
          break;
        case '02':
          this.iconUrl = './assets/weathericons/few-clouds.svg';
          break;
        case '03':
        case '04':
          this.iconUrl = './assets/weathericons/cloud.svg';
          break;
        case '09':
          this.iconUrl = './assets/weathericons/shower-rain.svg';
          break;
        case '10':
          this.iconUrl = './assets/weathericons/rain.svg';
          break;
        case '11':
          this.iconUrl = './assets/weathericons/thunderstorm.svg';
          break;
        case '13':
          this.iconUrl = './assets/weathericons/snow.svg';
          break;
        case '50':
          this.iconUrl = './assets/weathericons/mist.svg';
          break;
        default:
          this.iconUrl = './assets/weathericons/clear-sky.svg';
          break;
      }
      console.log(this.iconUrl);
      // @ts-ignore
      // this.iconUrl = 'http://openweathermap.org/img/wn/' + this.weather.weather[0].icon + '@2x.png';
    });
  }
}
