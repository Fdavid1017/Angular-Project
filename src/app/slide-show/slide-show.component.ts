import {AfterViewInit, Component, Input} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements AfterViewInit {

  slideIndex = 1;
  subscription: Subscription;

  @Input() values: object[];

  constructor() {
  }

  ngAfterViewInit(): void {
    this.showSlides(this.slideIndex);

    const source = interval(4000);
    this.subscription = source.subscribe(() => this.plusSlides(1));

  }

  plusSlides(n): void {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n): void {
    this.showSlides(this.slideIndex = n);
  }


  showSlides(n): void {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      // @ts-ignore
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    // @ts-ignore
    slides[this.slideIndex - 1].style.display = 'block';
    dots[this.slideIndex - 1].className += ' active';
  }

}
