import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Model/employeeDetails';
import { EmployeeServices } from '../../Services/EmployeeServices';

@Component({
  selector: 'app-basic-view',
  templateUrl: './basic-view.component.html',
  styleUrls: ['./basic-view.component.css'],
})
export class BasicViewComponent implements OnInit {
  constructor(public _employeeService: EmployeeServices) {}

  ngOnInit() {}
  employees: Employee[];

  setEmployeeList(): void {
    this.employees = this._employeeService.getEmployees();
  }
}
