import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneFormComponent } from './phone-form/phone-form.component';
import { PhoneListComponent } from './phone-list/phone-list.component';

const routes: Routes = [
  { path: 'phones', component: PhoneListComponent },
  { path: 'addphone', component: PhoneFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
