import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
// import { BasicViewComponent } from '../dashboard/basic-view/basic-view.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { BasicViewComponent } from '../dashboard/basic-view/basic-view.component';

import { root } from './root';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DashboardModule,
    RouterModule.forRoot(root),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
