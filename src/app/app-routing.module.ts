import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForceWielderComponent } from './force-wielder/force-wielder.component';

const routes: Routes = [
  { path: 'wielders', component: ForceWielderComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
