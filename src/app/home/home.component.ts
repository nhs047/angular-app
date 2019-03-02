import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  createAppMode = false;
  values: any;
  data: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }
  createAppModeToggle() {
    this.createAppMode = true;
  }

  getValues() {
    this.http.get('https://umsbckend.azurewebsites.net/api/app-setup/2', {
      headers: ( { Authorization: '123456', 'Content-Type': 'application/json' })
   }).subscribe(response => {
     this.values = response;
     this.data = this.values.data;
   }, error => {
     console.log(error);
   });
  }
  refreshRequest() {
    this.getValues();
  }
  cancelcreateAppMode(createAppMode: boolean) {
    this.createAppMode = createAppMode;
  }
}
