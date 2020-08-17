import {Component, OnInit} from '@angular/core';
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
export class AppComponent  {

  title = 'It\'s Ability';
  constructor() {
    this.loadScript('//js.hs-scripts.com/8135993.js');
  }


  public loadScript(url: string) {
    const body =  document.body as HTMLDivElement;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
  }
}
