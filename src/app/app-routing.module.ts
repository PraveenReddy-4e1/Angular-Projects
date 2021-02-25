import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDetailsComponent } from './main/add-details/add-details.component';
import { ListDetailsComponent } from './main/list-details/list-details.component';

const routes: Routes = [
  {path:'',
   redirectTo:'/list',
   pathMatch:'full'
},
  { path: 'add', component: AddDetailsComponent },
  { path: 'list', component: ListDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
