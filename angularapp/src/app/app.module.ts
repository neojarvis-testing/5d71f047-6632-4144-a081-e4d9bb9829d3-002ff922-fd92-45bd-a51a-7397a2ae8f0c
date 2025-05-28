import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminaddturfComponent } from './Components/adminaddturf/adminaddturf.component';
import { AdminviewturfComponent } from './Components/adminviewturf/adminviewturf.component';
import { UserAddFeedbackComponent } from './Components/useraddfeedback/useraddfeedback.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { ErrorComponent } from './Components/error/error.component';
import { CommonModule } from '@angular/common';
import { AdminnavComponent } from './Components/adminnav/adminnav.component';
import { AdminviewfeedbackComponent } from './Components/adminviewfeedback/adminviewfeedback.component';
import { AdminviewbookingComponent } from './Components/adminviewbooking/adminviewbooking.component';
import { UserContactComponent } from './Components/usercontact/usercontact.component';
import { UsermakebookingComponent } from './Components/usermakebooking/usermakebooking.component';
import { UsernavComponent } from './Components/usernav/usernav.component';
import { UserviewfeedbackComponent } from './Components/userviewfeedback/userviewfeedback.component';
import { UserviewturfComponent } from './Components/userviewturf/userviewturf.component';
import { UserviewbookingComponent } from './Components/userviewbooking/userviewbooking.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ErrorComponent,
    NavbarComponent,
    AdminaddturfComponent,
    UserAddFeedbackComponent,
    AdminviewturfComponent,
    AdminaddturfComponent,
    AdminnavComponent,
    AdminviewfeedbackComponent,
    AdminviewbookingComponent,
    UserContactComponent,
    UsermakebookingComponent,
    UsernavComponent,
    UserviewbookingComponent,
    UserviewturfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
