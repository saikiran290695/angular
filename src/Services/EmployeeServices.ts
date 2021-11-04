import { Injectable } from '@angular/core';
import { IEmployeeServices } from '../IServices/IEmployeeServices';
import { Employee } from '../Model/employeeDetails';
import { employees } from '../Data/EmployeeDetails';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServices implements IEmployeeServices {
  constructor() {}

  getEmployees(): Employee[] {
    return employees;
  }
}
