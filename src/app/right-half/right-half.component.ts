import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-right-half',
  templateUrl: './right-half.component.html',
  styleUrls: ['./right-half.component.scss'],
  animations: [
    trigger('titleState', [
      state('move', style({
        transform: 'translateY(-180%)'
      })),
      transition('* => *', animate('500ms ease'))
    ])
  ]
})
export class RightHalfComponent implements OnInit {

  constructor(private http: HttpService, private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url === '/') {
          this.changePosition('null');
        } else {
          this.changePosition('move');
        }
      }
    });
  }

  weather: object;
  temperature: number;
  iconUrl: string;
  position: string;

  ngOnInit(): void {
    this.assignWeather();
  }

  changePosition(newPosition: string): void {
    this.position = newPosition;
  }

  assignWeather(): void {
    this.http.getWeather().subscribe(data => {
      this.weather = data;
      // @ts-ignore
      this.temperature = this.weather.main.temp;

      // @ts-ignore
      const icon = this.weather.weather[0].icon[0].toString() + this.weather.weather[0].icon[1].toString();

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
    });
  }
}
