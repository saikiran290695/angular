import { Component, OnInit } from '@angular/core';
import { dashboardMetaData } from '../../Model/dashboardDetails';
import { Employee } from '../../Model/employeeDetails';
import { DashboardServicesService } from '../../Services/dashboard-services.service';
import { EmployeeServices } from '../../Services/EmployeeServices';

@Component({
  selector: 'app-basic-view',
  templateUrl: './basic-view.component.html',
  styleUrls: ['./basic-view.component.css'],
})
export class BasicViewComponent implements OnInit {
  constructor(
    public _employeeService: EmployeeServices,
    public _dashboardServices: DashboardServicesService
  ) {}

  ngOnInit() {
    this.setDashboardMetadata();
  }

  dashboardMetadata: dashboardMetaData[];
  employeeDetails: Employee[];

  setDashboardMetadata(): void {
    this.dashboardMetadata = this._dashboardServices.getMetaData();
  }

  getListOfEmployees(): void {
    this.employeeDetails = this._employeeService.getEmployees();
  }
}
