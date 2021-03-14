import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { PatientHealthProfileComponent } from './patient-health-profile/patient-health-profile.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'patient', component: PatientHealthProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
