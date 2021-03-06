import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { AlertifyService } from '../_service/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.succcess('logged in successfully');
    }, err => {
      this.alertify.error(err);
    });
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    this.alertify.error('Logout Successful');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
  }
}
