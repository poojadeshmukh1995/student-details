import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { StudentDetailsComponent } from './student-details/student-details.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { StudentDataService } from './student-data.service';
import { EditDataComponent } from './shared/component/edit-data/edit-data.component';

@NgModule({
   declarations: [
      AppComponent,
      StudentRegistrationComponent,
      StudentDetailsComponent,
      EditDataComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      MatTableModule,
      MatDialogModule

   ],
   providers: [StudentDataService],
   entryComponents: [EditDataComponent],
   bootstrap: [AppComponent]
})
export class AppModule { }
