import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDetailsComponent } from './add-details/add-details.component';
import { ListDetailsComponent } from './list-details/list-details.component';

const routes: Routes = [
  { path: 'add', component: AddDetailsComponent },
  { path: 'list', component: ListDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
