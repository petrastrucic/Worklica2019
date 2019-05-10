import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForceWeilderComponent } from './force-weilder/force-weilder.component';

const routes: Routes = [
  { path: 'wielders', component: ForceWeilderComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
