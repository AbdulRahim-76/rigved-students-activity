import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Salutation } from './custom-pipe';
import { StructuralActivityComponent } from './structural-activity/structural-activity.component';
import { JsObjActivityComponent } from './js-obj-activity/js-obj-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    StructuralActivityComponent,
    Salutation,
    JsObjActivityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
