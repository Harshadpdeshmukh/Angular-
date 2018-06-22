import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Mycomp1Component } from './mycomp1/mycomp1.component';
import { Mycomp2Component } from './mycomp2/mycomp2.component';

@NgModule({
  declarations: [
    AppComponent,
    Mycomp1Component,
    Mycomp2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
