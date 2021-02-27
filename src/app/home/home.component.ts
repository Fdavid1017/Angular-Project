import {Component, OnInit} from '@angular/core';
import {RippleModule} from 'primeng/ripple';
import {PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  display = false;
  imageUrl: string;
  isDesktop = true;

  constructor(private primengConfig: PrimeNGConfig) {
    this.isDesktop = window.innerWidth > 768;
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  showDialog(url: string): void {
    this.imageUrl = url;
    this.display = true;
  }
}
