import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicViewComponent } from './basic-view/basic-view.component';
import { EmployeeServices } from '../Services/EmployeeServices';

@NgModule({
  imports: [CommonModule],
  declarations: [BasicViewComponent],
  exports: [BasicViewComponent],
  providers: [EmployeeServices],
})
export class DashboardModule {}
