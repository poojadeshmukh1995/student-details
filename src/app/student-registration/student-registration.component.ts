import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentDataService } from '../student-data.service';
import { Labels } from '../shared/models/labels';

@Component({
   selector: 'app-student-registration',
   templateUrl: './student-registration.component.html',
   styleUrls: ['./student-registration.component.scss']
})
export class StudentRegistrationComponent implements OnInit {
   registerForm: FormGroup;
   labels = Labels.studentRegisterLabels;
   cities = ['Pune', 'Mumbai', 'Amravati', 'Hydrabad', 'Akola', 'Nagpur'];
   constructor(private readonly fb: FormBuilder, private readonly router: Router,
               private readonly studentDataService: StudentDataService) { }

   // simple reactive form validation
   ngOnInit() {
      this.registerForm = this.fb.group({
         firstName: ['', [Validators.required]],
         lastName: ['', [Validators.required]],
         mobileNumber: ['', [Validators.required, Validators.minLength(10),
         Validators.maxLength(15)]],
         email: ['', [Validators.required, Validators.email]],
         password: ['', [Validators.required, Validators.minLength(6),
         Validators.maxLength(30)]],
         city: ['', [Validators.required]],
      });
   }
   // on student register
   onRegister() {
      this.studentDataService.setNewStudentData(this.registerForm.value);
      this.router.navigateByUrl('/student-details');
   }

}
