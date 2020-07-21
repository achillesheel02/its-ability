import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
import {fadeInAnimation} from '../../_animations/fade-in';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  animations: [fadeInAnimation],
  // tslint:disable-next-line:no-host-metadata-property
  host: { '[@fadeInAnimation]': '' }
})
export class BlogComponent implements OnInit {

  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;
  constructor() { }

  ngOnInit(): void {
  }

}
