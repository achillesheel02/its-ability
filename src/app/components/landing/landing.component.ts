import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {

  constructor() { }
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;


  ngOnInit(): void {
    this.myStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      'z-index': -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 80,
        },
        color: {
          value: '#ff0000'
        },
        shape: {
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            enable: true,
            nb_sides: 5
          }
        },
      },
      interactivity: {
        on_hover: {
          enable: true,
          mode: 'repulse'
        }
      }
    };

  }

}
