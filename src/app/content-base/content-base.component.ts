import {Component, Input, OnInit} from '@angular/core';
import {ContentInput} from '../content-input';

@Component({
  selector: 'app-content-base',
  templateUrl: './content-base.component.html',
  styleUrls: ['./content-base.component.scss']
})
export class ContentBaseComponent implements OnInit {

  @Input() content: ContentInput;

  constructor() {
  }

  ngOnInit(): void {
  }

}
