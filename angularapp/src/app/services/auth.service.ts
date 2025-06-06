import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/auth/register`, user);
  }

  login(login: Login): Observable<string> {
  return this.http.post(`${this.apiUrl}/api/auth/login`, login, { responseType: 'text' });
}
}
