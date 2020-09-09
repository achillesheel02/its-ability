import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UploadService} from '../../services/upload.service';
import {SignsService} from '../../services/signs.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {

  startVideoFeed = false;
  allowFormSubmit = false;
  recordedVideo: any;
  loadPredictions = false;
  predictions = [];
  duration: any;
  constructor(private uploadService: UploadService, private signsService: SignsService) { }

  ngOnInit(): void {
    this.startVideoFeed = true;
  }

  log($event: any) {
    this.allowFormSubmit = true;
    this.recordedVideo = $event;
  }

  onSubmit() {
    this.uploadService.alphaFileUpload(this.recordedVideo)
      .promise().then( () => {
      this.signsService.fetchPredictions(this.recordedVideo.name)
        .subscribe( res => {
          this.duration = res.duration;
          res.output.forEach( x => {
            this.predictions.push(x);
          });
          console.log(this.predictions);
        });
    });
  }


  reset() {
    this.loadPredictions = false;
    this.predictions = [];
    this.allowFormSubmit = false;

  }
}
