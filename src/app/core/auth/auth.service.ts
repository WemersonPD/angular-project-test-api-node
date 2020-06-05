import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public API = 'http://localhost:3000/api'
  constructor(private httpSevice: HttpClient) { }

  authenticate(userName: string, password: string){
    return this.httpSevice
      .post(this.API + '/user/login', {userName, password})
  }


}
