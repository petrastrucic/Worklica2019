import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForceWeilderComponent } from './force-weilder/force-weilder.component';

@NgModule({
  declarations: [
    AppComponent,
    ForceWeilderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
