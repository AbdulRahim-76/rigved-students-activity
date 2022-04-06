import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StudentRecordComponent } from './student-record/student-record.component';
import { ProductInformationComponent } from './product-information/product-information.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingComponent,
    AttributeBindingComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    StudentRecordComponent,
    ProductInformationComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
