import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentDataService } from '../student-data.service';
import { IStudentData } from '../shared/models/details.model';
import { Constant } from '../shared/models/constants';
import { EditDataComponent } from '../shared/component/edit-data/edit-data.component';
import { Labels } from '../shared/models/labels';
import {MatTableDataSource} from '@angular/material/table';


@Component({
   selector: 'app-student-details',
   templateUrl: './student-details.component.html',
   styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
   dataSource = new MatTableDataSource(Constant.studentData);
   labels = Labels.studentDataLabels;
   displayedColumns = Constant.tableHeading;

   constructor(public matDialog: MatDialog, private readonly studentDataService: StudentDataService) { }

   ngOnInit() {
      if (this.studentDataService.getNewStudentData()) {
         this.dataSource.data.push(this.studentDataService.getNewStudentData());
      }
   }
   openEditDialog(rowData) {
      const dialogRef = this.matDialog.open(EditDataComponent, { data: rowData });
      dialogRef.afterClosed().subscribe(result => {
         this.saveNewDetails(result, rowData);
      });
   }

   saveNewDetails(newDetails, oldDetails) {
      const tempArray = this.dataSource.filteredData;
      const index = tempArray.indexOf(oldDetails);
      if (index > -1) {
         tempArray.splice(index, 1, newDetails);
         this.dataSource = new MatTableDataSource(tempArray);
      }

   }
   deleteData(data) {
      const tempArray = this.dataSource.filteredData;
      const index = tempArray.indexOf(data);
      if (index > -1) {
         tempArray.splice(index, 1);
         this.dataSource = new MatTableDataSource(tempArray);
      }
   }
}
