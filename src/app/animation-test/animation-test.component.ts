import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-animation-test',
  templateUrl: './animation-test.component.html',
  styleUrls: ['./animation-test.component.scss'],
  animations: [
    trigger('textState', [
      state('move', style({
        transform: 'translateY(50%)'
      })),
      transition('* => *', animate('500ms ease'))
    ])
  ]
})
export class AnimationTestComponent implements OnInit {

  position: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  changePosition(newPosition: string): void {
    this.position = newPosition;
  }
}
