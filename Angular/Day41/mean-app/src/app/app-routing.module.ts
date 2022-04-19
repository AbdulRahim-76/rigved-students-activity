import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { FindAllEmployeesComponent } from './find-all-employees/find-all-employees.component';
import { FindOneEmployeeComponent } from './find-one-employee/find-one-employee.component';
import { StoreEmployeesComponent } from './store-employees/store-employees.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:"", component: StoreEmployeesComponent},
  {path:"store", component: StoreEmployeesComponent},
  {path:"findAll", component: FindAllEmployeesComponent},
  {path:"findEmployee", component: FindOneEmployeeComponent},
  {path:"delete", component: DeleteEmployeeComponent},
  {path:"update", component: UpdateEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}