import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
   {
      path: '', redirectTo: 'registration', pathMatch: 'full'
   },
   {
      path: 'registration', component: StudentRegistrationComponent
   },
   {
      path: 'student-details', component: StudentDetailsComponent
   },
   {
      path: '**', redirectTo: 'registration', pathMatch: 'full'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
