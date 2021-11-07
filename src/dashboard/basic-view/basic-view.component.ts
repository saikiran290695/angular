import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog/dialog-ref';
import { dashboardMetaData } from '../../Model/dashboardDetails';
import { Employee } from '../../Model/employeeDetails';
import { DashboardServicesService } from '../../Services/dashboard-services.service';
import { EmployeeServices } from '../../Services/EmployeeServices';
import { EditempComponent } from '../editemp/editemp.component';

@Component({
  selector: 'app-basic-view',
  templateUrl: './basic-view.component.html',
  styleUrls: ['./basic-view.component.css'],
})
export class BasicViewComponent implements OnInit {
  constructor(
    public _employeeService: EmployeeServices,
    public _dashboardServices: DashboardServicesService,
    public _dialog: MatDialog
  ) {}

  ngOnInit() {
    this.setDashboardMetadata();
    this.getListOfEmployees();
  }

  dashboardMetadata: dashboardMetaData[];
  employeeDetails: Employee[];

  setDashboardMetadata(): void {
    this.dashboardMetadata = this._dashboardServices.getMetaData();
  }

  getListOfEmployees(): void {
    this._employeeService
      .getEmployees()
      .subscribe((x) => (this.employeeDetails = x));
  }

  addRecord(): void {
    let _employeeTemp: Employee = {
      Name: '',
      Age: null,
      Department: '',
      Contact: null,
      Salary: null,
      Address: {
        AddressLine1: '',
        AddressLine2: '',
        City: '',
        State: '',
        Zipcode: null,
      },
    };

    const _dialogRef = this._dialog.open(EditempComponent, {
      data: _employeeTemp,
    });

    _dialogRef
      .afterClosed()
      .subscribe((result) => this._employeeService.addEmployee(_employeeTemp));
  }

  deleteRecord(employee: Employee): void {
    this._employeeService.deleteEmployee(employee);
  }

  editRecord(employee: Employee): void {
    const _dialogRef = this._dialog.open(EditempComponent, { data: employee });

    _dialogRef.afterClosed().subscribe((result) => console.log(result));
  }
}
