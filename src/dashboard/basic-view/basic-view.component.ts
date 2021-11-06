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
    this._employeeService.addEmployee({
      Name: 'addedEmp',
      Age: 35,
      Contact: 789584,
      Salary: 7854,
      Department: 'BIE',
      Address: {
        AddressLine1: 'ad1',
        AddressLine2: 'ad2',
        City: 'ct',
        State: 'stat',
        Zipcode: 54882,
      },
    });
  }

  deleteRecord(employee: Employee): void {
    this._employeeService.deleteEmployee(employee);
  }

  editRecord(employee: Employee): void {
    const _dialogRef = this._dialog.open(EditempComponent, { data: employee });
  }
}
