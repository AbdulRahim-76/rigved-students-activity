import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { FindOneEmployeeComponent } from './find-one-employee/find-one-employee.component';
import { FindAllEmployeesComponent } from './find-all-employees/find-all-employees.component';
import { StoreEmployeesComponent } from './store-employees/store-employees.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    FindOneEmployeeComponent,
    FindAllEmployeesComponent,
    StoreEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
