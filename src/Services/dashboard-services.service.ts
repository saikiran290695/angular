import { Injectable } from '@angular/core';
import { IDashboardServices } from '../IServices/idashboard-services';
import { dashboardMetaData } from '../Model/dashboardDetails';
import { EmployeeServices } from '../Services/EmployeeServices';

@Injectable({
  providedIn: 'root',
})
export class DashboardServicesService implements IDashboardServices {
  constructor(public employeeServices: EmployeeServices) {}
  getMetaData(): dashboardMetaData[] {
    let emp_length;
    this.employeeServices
      .getTotalEmployees()
      .subscribe((x) => (emp_length = x));
    return [
      {
        title: 'Total Employees',
        value: emp_length,
      },
      {
        title: 'Average Age Of Employees',
        value: Math.floor(this.employeeServices.getAvgAgeOfEmp()),
      },
    ];
  }
}
