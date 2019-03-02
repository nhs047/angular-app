import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_service/auth.service';
import { HomeComponent } from './home/home.component';
import { CreateAppComponent } from './createApp/createApp.component';
import { ErrorInterceptorProvider } from './_service/error.interceptor';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      CreateAppComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
