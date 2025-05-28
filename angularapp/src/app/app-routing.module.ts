import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Components/error/error.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { AdminnavComponent } from './Components/adminnav/adminnav.component';
import { UsernavComponent } from './Components/usernav/usernav.component';
import { UserContactComponent } from './Components/usercontact/usercontact.component';
import { AdminaddturfComponent } from './Components/adminaddturf/adminaddturf.component';
import { AdminviewturfComponent } from './Components/adminviewturf/adminviewturf.component';
import { AdminviewbookingComponent } from './Components/adminviewbooking/adminviewbooking.component';
import { AdminviewfeedbackComponent } from './Components/adminviewfeedback/adminviewfeedback.component';
import { UserviewturfComponent } from './Components/userviewturf/userviewturf.component';
import { UsermakebookingComponent } from './Components/usermakebooking/usermakebooking.component';
import { UserviewbookingComponent } from './Components/userviewbooking/userviewbooking.component';
import { UserviewfeedbackComponent } from './Components/userviewfeedback/userviewfeedback.component';
import { UserAddFeedbackComponent } from './Components/useraddfeedback/useraddfeedback.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'home', component: HomeComponent },
   { path: 'admin', component: AdminnavComponent },  // your admin nav component
  { path: 'user', component: UsernavComponent },
  {path: 'usercontact', component:UserContactComponent},
  { path: 'adminaddturf', component: AdminaddturfComponent },
  { path: 'adminviewturf', component: AdminviewturfComponent },
  { path: 'adminviewbooking', component: AdminviewbookingComponent },
  { path: 'adminviewfeedback', component: AdminviewfeedbackComponent },
  { path: 'userviewturf', component: UserviewturfComponent },
  { path: 'usermakebooking', component: UsermakebookingComponent },
  { path: 'userviewbooking', component: UserviewbookingComponent },
  { path: 'userviewfeedback', component: UserviewfeedbackComponent },
  { path: 'useraddfeedback', component: UserAddFeedbackComponent },
  // your valid routes here
  { path: 'error/:code', component: ErrorComponent },
  { path: '**', redirectTo: '/error/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
