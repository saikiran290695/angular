import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicViewComponent } from './basic-view/basic-view.component';
import { CardViewComponent } from './card-view/card-view.component';
import { MatButtonModule } from '@angular/material/button';
import { AddressconsolidatorPipe } from './addressconsolidator.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { EditempComponent } from './editemp/editemp.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  declarations: [
    BasicViewComponent,
    CardViewComponent,
    AddressconsolidatorPipe,
    EditempComponent,
  ],
  exports: [BasicViewComponent],
})
export class DashboardModule {}
