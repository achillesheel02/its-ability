import {AfterViewInit, Component, OnInit} from '@angular/core';
import {fadeAnimation} from '../animations';
import {fadeInAnimation} from './_animations/fade-in';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation],
  // tslint:disable-next-line:no-host-metadata-property
  host: { '[@fadeInAnimation]': '' }
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'It\'s Ability';
  constructor(private authService: AuthService) {
    this.loadScript('//js.hs-scripts.com/8135993.js');

  }

  ngOnInit(): void {
    this.authService.autoAuthUser();
  }

  ngAfterViewInit() {
  }

  public loadHubSpotScript(url: string) {
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  public loadScript(url: string) {
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
  }


}
