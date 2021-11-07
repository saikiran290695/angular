import { Component, Input, OnInit, Inject } from '@angular/core';
import { Employee } from '../../Model/employeeDetails';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css'],
})
export class EditempComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditempComponent>,
    @Inject(MAT_DIALOG_DATA) public employee: Employee
  ) {}

  ngOnInit() {}

  closeBox(): void {
    this.dialogRef.close();
  }

  saveChanges(): void {
    this.dialogRef.close();
  }
}
