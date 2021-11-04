import { Component, OnInit } from '@angular/core';
import { Employee, employeeList } from '../Model/EmployeeDetails';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
})
export class HerosComponent implements OnInit {
  constructor() {}
  hero = 'Lets try soemthing new';
  employee: Employee[] = employeeList;
  selectedEmployee: Employee = null;

  onselect(emp) {
    this.selectedEmployee = emp;
  }
  ngOnInit() {}
}
