import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignsService {

  constructor(private http: HttpClient) { }

  private url = environment.serverUrl;

  fetchAllSigns(){
    return this.http.get<{message: string, signs: any}>(this.url + 'api/vocabulary/all');
  }

  fetchSign(label){
    return this.http.get<{message: string, signs: any}>(this.url + 'api/vocabulary/fetch/' + label);
  }

  log() {
    console.log('Waiting for file to finish uploading...');
  }

  fetchPredictions(id){
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Request-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      'Access-Control-Allow-Methods': 'POST, OPTIONS, PUT,GET',
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    // tslint:disable-next-line:max-line-length
    return this.http.post<{ output: any, duration: number}>('https://ml.its-ability.me/predict', { key: id}, requestOptions);
  }

}
