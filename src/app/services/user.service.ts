import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.serverUrl;

  constructor(private http: HttpClient,
              private router: Router,
              private authService: AuthService) { }

  registerContributor(form) {
    const payload = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      password: form.password,
      roles: ['contributor']
    };
    console.log(payload);
    this.http.post<{message: string}>(this.url + 'api/user/create', payload)
      .subscribe( () => {
        console.log('Registered successfully');
        this.authService.login(payload.email, payload.password);
        this.router.navigate(['contribute']);
      });
  }
}
