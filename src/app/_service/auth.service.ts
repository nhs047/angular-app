import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl = 'https://umsbckend.azurewebsites.net/api/2';
constructor(private http: HttpClient) { }
login(model: any) {
  return this.http.post(`${this.baseUrl}user/signin`, model).pipe(
    map((response: any) => {
      const user = response;
      if (user && user.data && user.data.isAuthenticated && user.data.userInformation) {
        localStorage.setItem('token', '123456');
        localStorage.setItem('name', user.data.userInformation.userName);
      }
    }
  ));
}

createApp(model: any) {
  return this.http.post(`${this.baseUrl}app-setup`, model, {
    headers: ( { Authorization: '123456', 'Content-Type': 'application/json' })}).pipe(
    map((response: any) => {
      const app = response;
      return app;
    }
  ));
}

}
