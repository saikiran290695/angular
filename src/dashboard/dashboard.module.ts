import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicViewComponent } from './basic-view/basic-view.component';
//import { EmployeeServices } from '../Services/EmployeeServices';
import { CardViewComponent } from './card-view/card-view.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [BasicViewComponent, CardViewComponent],
  exports: [BasicViewComponent],
  //providers: [EmployeeServices],
})
export class DashboardModule {}
