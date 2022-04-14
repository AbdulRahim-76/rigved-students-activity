import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserStoreComponent } from './user-store/user-store.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserlistComponent } from './userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDeleteComponent,
    UserStoreComponent,
    UserUpdateComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
