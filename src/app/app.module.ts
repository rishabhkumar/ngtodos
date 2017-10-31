import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { C01Component } from './c01/c01.component';
import { C02Component } from './c02/c02.component';
import { C03Component } from './c03/c03.component';
import { C04Component } from './c04/c04.component';

@NgModule({
  declarations: [
    AppComponent,
    C01Component,
    C02Component,
    C03Component,
    C04Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
