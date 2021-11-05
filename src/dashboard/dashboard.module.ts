import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicViewComponent } from './basic-view/basic-view.component';
import { CardViewComponent } from './card-view/card-view.component';
import { MatButtonModule } from '@angular/material/button';
import { AddressconsolidatorPipe } from './addressconsolidator.pipe';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [
    BasicViewComponent,
    CardViewComponent,
    AddressconsolidatorPipe,
  ],
  exports: [BasicViewComponent],
})
export class DashboardModule {}
