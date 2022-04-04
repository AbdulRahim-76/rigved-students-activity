import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Salutation } from './custom-pipe';
import { StructuralDemoComponent } from './structural-demo/structural-demo.component';
import { JsObjActivityComponent } from './js-obj-activity/js-obj-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    StructuralDemoComponent,
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
