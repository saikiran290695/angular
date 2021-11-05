import { Injectable } from '@angular/core';
import { IEmployeeServices } from '../IServices/IEmployeeServices';
import { Employee } from '../Model/employeeDetails';
import { employees } from '../Data/EmployeeDetails';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServices implements IEmployeeServices {
  constructor() {}

  private emps: Employee[] = employees;

  getEmployees(): Observable<Employee[]> {
    const emp = of(this.emps);
    return emp;
  }

  getTotalEmployees(): number {
    return this.emps.length;
  }

  getAvgAgeOfEmp(): number {
    var age = 0;
    this.emps.forEach((x) => (age += x.Age));
    return age / this.getTotalEmployees();
  }

  addEmployee(employee: Employee): void {
    this.emps.push(employee);
  }

  deleteEmployee(employee: Employee): void {
    this.emps.splice(this.emps.indexOf(employee), 1);
  }
}
