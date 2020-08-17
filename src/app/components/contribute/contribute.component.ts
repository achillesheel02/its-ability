import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
import {NgForm} from '@angular/forms';
import {fadeInAnimation} from '../../_animations/fade-in';
import { FileUploader } from 'ng2-file-upload';
import {AuthService} from '../../services/auth.service';
import {SignsService} from '../../services/signs.service';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css'],
  animations: [fadeInAnimation],
  // tslint:disable-next-line:no-host-metadata-property
  host: { '[@fadeInAnimation]': '' }
})
export class ContributeComponent implements OnInit {

  constructor(private authService: AuthService, private signsService: SignsService) { }
  signs = [];
  activateWebcam = false;
  uploadFile = false;
  uploadOption: any;
  user: any;
  sign = '';
  url = '';


  ngOnInit(): void {
    this.signsService.fetchAllSigns()
      .subscribe( data => {
        data.signs.forEach( x => {
          this.signs.push(x);
        });
      });
  }



  chooseUploadMethod(id) {
    if (id === 1) {
      this.activateWebcam = true;
      this.uploadFile = !this.activateWebcam;
    }
    else if (id === 2) {
      this.uploadFile = true;
      this.activateWebcam = !this.uploadFile;
    }
  }

  onUpload($event: Event) {

  }

  isAuth() {
    this.user = this.authService.getUserInfo();
    return this.authService.isAuth();
  }
  onSubmit(form: NgForm) {

  }

  logout() {
    this.authService.logout();
  }


  addGif() {
    this.url = this.signs.find(x => x.label === this.sign).link;
  }
}
