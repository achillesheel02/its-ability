import {AfterViewInit, Component, OnInit} from '@angular/core';
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
export class DemoComponent implements OnInit, AfterViewInit {
  opened = false;

  constructor() {
  }

  ngOnInit(): void {
    this.loadProtoScript('https://static.proto.io/api/widget-embed.js');

  }

  ngAfterViewInit() {

  }

  public loadProtoScript(url: string) {
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = true;
    script.defer = false;
    script.type = 'text/javascript';
    document.getElementsByClassName('script')[0].appendChild(script);
  }




}
