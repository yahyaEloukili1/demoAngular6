import { NgModule } from '@angular/core';
import {  RouterModule ,Route} from '@angular/router';
import { ListEmployeesComponent } from "../app/employee/list-employees/list-employees.component";
import { CreateEmployeeComponent } from "../app/employee/create-employee/create-employee.component"
const routes: Route[] = [
  {path: 'list',component: ListEmployeesComponent},
  {path: 'create',component: CreateEmployeeComponent},
  {path: '', redirectTo: '/list',pathMatch:'full'},
];

@NgModule({
  //Tell the angular router about these three routes
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
