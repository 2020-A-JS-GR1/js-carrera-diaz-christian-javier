import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrudComputerComponent} from "./components/crud-computer/crud-computer.component";
import {CrudUserComponent} from "./components/crud-user/crud-user.component";

const routes: Routes = [
  {
    component: CrudComputerComponent,
    path: 'computer',
  },
  {
    component: CrudUserComponent,
    path: 'user',

  },
  {
    path:'',
    redirectTo: '/user',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
