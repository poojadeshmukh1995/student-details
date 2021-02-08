import { Injectable } from '@angular/core';
import { IStudentData } from './shared/models/details.model';


@Injectable({
   providedIn: 'root'
})
export class StudentDataService {
   newStudentData: IStudentData;
   constructor() { }
   // to set the new student details
   setNewStudentData(data: IStudentData) {
      this.newStudentData = data;
   }
   // to get the new student details
   getNewStudentData(): IStudentData {
      return this.newStudentData;
   }
}
