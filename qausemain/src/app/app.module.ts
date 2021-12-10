import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { PhoneComponent } from './phone/phone.component';
import { OtpComponent } from './otp/otp.component';

@NgModule({
  declarations: [
    AppComponent,
     WelcomeComponent,
     SignupComponent,
     PhoneComponent,
     OtpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
