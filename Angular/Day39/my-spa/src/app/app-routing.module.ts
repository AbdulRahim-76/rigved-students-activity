import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { ListComponent } from './list/list.component';
import { StoreComponent } from './store/store.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "store", component: StoreComponent },
  {
    path: "success/:name", component: SuccessComponent,
    children: [
      { path: "", component: ListComponent },
      { path: "list", component: ListComponent },
      { path: "delete", component: DeleteComponent },
      { path: "update", component: UpdateComponent }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
