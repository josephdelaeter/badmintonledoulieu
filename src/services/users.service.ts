import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  postNewUser(user: string, password: string) {
    return this.http.post<any>(`${environment.api_base_url}/api/auth/signup`,
      {
        "email": user,
        "password": password,
      }).subscribe(
        data => console.log('success register', data),
        error => console.log('fail register', error)
      )
  }

  postLogin(user: string, password: string) {
    return this.http.post<any>(`${environment.api_base_url}/api/auth/login`,
      {
        "email": user,
        "password": password,
      }).subscribe(
        data => console.log('success login', data),
        error => console.log('oops login', error)
      );
  }
}
