import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }

  fileUpload(file, prefix) {
    const contentType = file.type;
    const bucket = new S3(
      {
        accessKeyId: 'AKIAZWEARFGI37HBFYDW',
        secretAccessKey: '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',
        region: 'us-east-1',
      }
    );
    const params = {
      Bucket: 'its-ability-raw-training-data',
      Key:  prefix + '/' + file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType
    };
    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('EROOR: ', JSON.stringify( err));
        return false;
      }
      console.log('File Uploaded.', data);
      return true;
    });
  }
}
