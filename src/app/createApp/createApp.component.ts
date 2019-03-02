import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-create-app',
  templateUrl: './createApp.component.html',
  styleUrls: ['./createApp.component.css']
})
export class CreateAppComponent implements OnInit {
  @Input() dataFromHome: any;
  @Output() cancelAppCreation = new EventEmitter();
  @Output() refreshRequst = new EventEmitter();
  model: any = {};
  constructor(private authService: AuthService) { }
  ngOnInit() {
  }
  create() {
    this.authService.createApp(this.model).subscribe((response) => {
      if (response.isExecuted) {
        this.cancelAppCreation.emit(false);
        this.refreshRequst.emit();
      }
    }, err => {
      console.log(err);
    });
  }
  cancelled() {
    this.cancelAppCreation.emit(false);
  }
}
