import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicViewComponent } from './basic-view/basic-view.component';
import { CardViewComponent } from './card-view/card-view.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [BasicViewComponent, CardViewComponent],
  exports: [BasicViewComponent],
})
export class DashboardModule {}
