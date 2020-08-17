import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
import {fadeInAnimation} from '../../_animations/fade-in';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  animations: [fadeInAnimation],
  // tslint:disable-next-line:no-host-metadata-property
  host: { '[@fadeInAnimation]': '' }
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('https://static.proto.io/api/widget-embed.js');
  }

  public loadScript(url: string) {
    const body =  document.body as HTMLDivElement;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = true;
    script.defer = false;
    script.type = 'text/javascript';
    document.getElementsByClassName('script')[0].appendChild(script);
  }


}
