import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Project';

  height = 'Height: ' + screen.height.toString();
  width = 'Width: ' + screen.width.toString();
}
