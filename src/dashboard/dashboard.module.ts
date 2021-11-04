import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicViewComponent } from './basic-view/basic-view.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BasicViewComponent],
  exports: [BasicViewComponent],
})
export class DashboardModule {}
