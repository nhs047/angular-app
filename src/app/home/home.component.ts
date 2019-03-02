import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_service/alertify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  createAppMode = false;
  values: any;
  data: any;
  constructor(private http: HttpClient, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getValues();
  }
  createAppModeToggle() {
    this.createAppMode = true;
  }

  getValues() {
    this.http.get('https://umsbckend.azurewebsites.net/api/app-setup/', {
      headers: ( { Authorization: '123456', 'Content-Type': 'application/json' })
   }).subscribe(response => {
     this.values = response;
     this.data = this.values.data;
   }, error => {
     this.alertify.error('Can\'t load data from app-setup \n' + error);
   });
  }
  refreshRequest() {
    this.getValues();
  }
  cancelcreateAppMode(createAppMode: boolean) {
    this.createAppMode = createAppMode;
  }
}
