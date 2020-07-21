import { Component } from '@angular/core';
import {fadeAnimation} from '../animations';
import {fadeInAnimation} from './_animations/fade-in';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation],
  // tslint:disable-next-line:no-host-metadata-property
  host: { '[@fadeInAnimation]': '' }
})
export class AppComponent {
  title = 'It\'s Ability';
}
