import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
import {NgForm} from '@angular/forms';
import {fadeInAnimation} from '../../_animations/fade-in';
import { FileUploader } from 'ng2-file-upload';
import {AuthService} from '../../services/auth.service';
import {SignsService} from '../../services/signs.service';
import {UploadService} from '../../services/upload.service';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css'],
  animations: [fadeInAnimation],
  // tslint:disable-next-line:no-host-metadata-property
  host: { '[@fadeInAnimation]': '' }
})
export class ContributeComponent implements OnInit {

  constructor(private authService: AuthService, private signsService: SignsService,
              private uploadService: UploadService) { }
  signs = [];
  activateWebcam = false;
  uploadFile = false;
  uploadOption: any;
  user: any;
  sign = '';
  url = '';
  startVideoFeed = false;
  allowFormSubmit = false;
  fileUploadSuccessful = false;
  recordedVideo: any;


  ngOnInit(): void {
    this.signsService.fetchAllSigns()
      .subscribe( data => {
        data.signs.forEach( x => {
          this.signs.push(x);
        });
      });
    this.startVideoFeed = true;
  }



  isAuth() {
    this.user = this.authService.getUserInfo();
    return this.authService.isAuth();
  }
  onSubmit(form: NgForm) {
    const prefix = form.value.sign;
    this.uploadService.fileUpload(this.recordedVideo, prefix);
    this.fileUploadSuccessful = true;
    form.reset();

  }

  logout() {
    this.authService.logout();
  }


  addGif() {
    this.url = this.signs.find(x => x.label === this.sign).link;
  }

  log($event: any) {
    this.allowFormSubmit = true;
    this.recordedVideo = $event;
  }
}
