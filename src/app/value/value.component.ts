import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get('https://umsbckend.azurewebsites.net/api/user/', {
      headers: ( { Authorization: '123456', 'Content-Type': 'application/json' })
   }).subscribe(response => {
     this.values = response;
   }, error => {
     console.log(error);
   });
  }
}
