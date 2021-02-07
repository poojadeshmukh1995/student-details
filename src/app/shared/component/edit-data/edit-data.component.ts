import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Labels } from '../../models/labels';

@Component({
   selector: 'app-edit-data',
   templateUrl: './edit-data.component.html',
   styleUrls: ['./edit-data.component.scss']
})
export class EditDataComponent implements OnInit {
   registerForm: FormGroup;
   labels = Labels.editDataLabels;
   constructor(private readonly fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) { }

   ngOnInit() {
      this.registerForm = this.fb.group({
         firstName: [this.data.firstName, [Validators.required]],
         lastName: [this.data.lastName, [Validators.required]],
         mobileNumber: [this.data.mobileNumber, [Validators.required, Validators.minLength(10),
         Validators.maxLength(15)]],
         email: [this.data.email, [Validators.required, Validators.email]],
         password: [this.data.password, [Validators.required, Validators.minLength(6),
         Validators.maxLength(30)]],
         city: [this.data.city, [Validators.required]],
      });
   }

}
