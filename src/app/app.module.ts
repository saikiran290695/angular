import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HerosComponent } from '../heros/heros.component';
import { DetailsOfEmpComponent } from './details-of-emp/details-of-emp.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HerosComponent,
    DetailsOfEmpComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
