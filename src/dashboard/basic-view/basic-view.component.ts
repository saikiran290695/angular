import { Component, OnInit } from '@angular/core';
import { EmployeeServices } from '../../Services/EmployeeServices';

@Component({
  selector: 'app-basic-view',
  templateUrl: './basic-view.component.html',
  styleUrls: ['./basic-view.component.css'],
})
export class BasicViewComponent implements OnInit {
  constructor(_employeeService: EmployeeServices) {}

  ngOnInit() {}
}
