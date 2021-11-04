import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../Model/EmployeeDetails';

@Component({
  selector: 'app-details-of-emp',
  templateUrl: './details-of-emp.component.html',
  styleUrls: ['./details-of-emp.component.css'],
})
export class DetailsOfEmpComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() employee?: Employee;
}
