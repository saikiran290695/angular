import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Model/employeeDetails';

Injectable({
  providedIn: 'root',
});

export interface IEmployeeServices {
  getEmployees(): Observable<Employee[]>;
  addEmployee(employee: Employee): void;
  deleteEmployee(employee: Employee): void;
}
