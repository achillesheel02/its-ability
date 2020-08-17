import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

}
