import { Component, OnInit } from '@angular/core';
import { IEmployeeServices } from '../../IServices/IEmployeeServices';
import { EmployeeServices } from '../../Services/EmployeeServices';

@Component({
  selector: 'app-basic-view',
  templateUrl: './basic-view.component.html',
  styleUrls: ['./basic-view.component.css'],
})
export class BasicViewComponent implements OnInit {
  private _employeeService: IEmployeeServices;

  constructor(_employeeService: EmployeeServices) {
    //this._employeeService = EmployeeServices;
  }

  ngOnInit() {}
}
