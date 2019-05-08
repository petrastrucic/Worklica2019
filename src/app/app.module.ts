import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForceWeilderComponent } from './force-weilder/force-weilder.component';
import { ForceToThirdPipe } from './force-to-third.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ForceWeilderComponent,
    ForceToThirdPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
