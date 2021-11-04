import { Injectable } from '@angular/core';
import { Employee } from '../Model/employeeDetails';

Injectable({
  providedIn: 'root',
});

export interface IEmployeeServices {
  getEmployees(): Employee[];
}
