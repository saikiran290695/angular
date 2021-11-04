import { Component, Input, OnInit } from '@angular/core';
import { dashboardMetaData } from '../../Model/dashboardDetails';
import { Employee } from '../../Model/employeeDetails';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css'],
})
export class CardViewComponent implements OnInit {
  constructor() {}
  @Input() dashboardmetadata: dashboardMetaData;

  // employee: Employee = {
  //   Name: 'saikiran',
  //   Age: 25,
  //   Contact: 854587,
  //   Department: 'software',
  //   Salary: 4578,
  //   Address: {
  //     AddressLine1: 'Bandlaguda',
  //     AddressLine2: 'hyd',
  //     City: 'Hyderabad',
  //     State: 'Telanagana',
  //     Zipcode: 4589620,
  //   },
  // };
  ngOnInit() {}
}
