import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
import {NgForm} from '@angular/forms';
import {fadeInAnimation} from '../../_animations/fade-in';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css'],
  animations: [fadeInAnimation],
  // tslint:disable-next-line:no-host-metadata-property
  host: { '[@fadeInAnimation]': '' }
})
export class ContributeComponent implements OnInit {

  constructor() { }
  signs = [
    'a', 'b' , 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  activateWebcam = false;
  uploadFile = false;
  uploadOption: any;
  dev_mode = false;

  ngOnInit(): void {

  }

  chooseUploadMethod(id) {
    if (id === 1) {
      this.activateWebcam = true;
      this.uploadFile = !this.activateWebcam;
    }
    else if (id ===2) {
      this.uploadFile = true;
      this.activateWebcam = !this.uploadFile;
    }
  }

  onUpload($event: Event) {

  }

  onSubmit(form: NgForm) {

  }
}
