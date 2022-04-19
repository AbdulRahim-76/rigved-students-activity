import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Demo } from './demo.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent, UserComponent, Demo
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
