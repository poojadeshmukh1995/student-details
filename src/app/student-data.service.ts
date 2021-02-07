import { Injectable } from '@angular/core';
import { IStudentData } from './shared/models/details.model';


@Injectable({
   providedIn: 'root'
})
export class StudentDataService {
   newStudentData: IStudentData;
   constructor() { }
   setNewStudentData(data: IStudentData) {
      this.newStudentData = data;
   }
   getNewStudentData(): IStudentData {
      return this.newStudentData;
   }
}
