import { Injectable } from '@angular/core';
import { IDashboardServices } from '../IServices/idashboard-services';
import { dashboardMetaData } from '../Model/dashboardDetails';
import { EmployeeServices } from '../Services/EmployeeServices';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DashboardServicesService implements IDashboardServices {
  constructor(public employeeServices: EmployeeServices) {}
  getMetaData(): dashboardMetaData[] {
    return [
      {
        title: 'Total Employees',
        value: this.employeeServices.getTotalEmployees(),
      },
      {
        title: 'Average Age Of Employees',
        value: this.employeeServices.getAvgAgeOfEmp(),
      },
    ];
  }
}
