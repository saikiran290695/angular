import { Component, Input, NgModule, OnInit } from '@angular/core';
import { dashboardMetaData } from '../../Model/dashboardDetails';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css'],
})
export class CardViewComponent implements OnInit {
  constructor() {}
  @Input() dashboardmetadata: dashboardMetaData;

  ngOnInit() {}
}
